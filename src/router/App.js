import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Layout from "../components/layout/Layout";
import NoMatch from "../components/noMatch/NoMatch";
import HomeScreen from "../screens/homeScreen/HomeScreen";
import LoginScreen from "../screens/loginScreen/LoginScreen";
import SearchScreen from "../screens/watchScreen/SearchScreen";
import WatchScreen from "../screens/watchScreen/WatchScreen";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Layout>
            <HomeScreen />
          </Layout>
        </Route>
        <Route path="/login">
          <LoginScreen />
        </Route>
        <Route exact path="/search/:query">
          <Layout>
            <SearchScreen />
          </Layout>
        </Route>
        <Route exact path="/watch/:id">
          <Layout>
            <WatchScreen />
          </Layout>
        </Route>
        <Route>
          <Redirect to="/" />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
