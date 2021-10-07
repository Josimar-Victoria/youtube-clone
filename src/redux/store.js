import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { authReducer } from "./reducers/auth.reducer";
import { homeVideosReducer } from "./reducers/videos.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  homevideos: homeVideosReducer,
})


const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
