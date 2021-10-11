import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import NoMatch from "../components/noMatch/NoMatch";
import HomeScreen from "../screens/homeScreen/HomeScreen";
import LoginScreen from "../screens/loginScreen/LoginScreen";
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
        <Route exact path="/search">
          <Layout>
            <h1>Search Resultados</h1>
          </Layout>
        </Route>
        <Route exact path="/watch/:id">
          <Layout>
            <WatchScreen />
          </Layout>
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
