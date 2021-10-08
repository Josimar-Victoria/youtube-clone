import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomeScreen from "../homeScreen/HomeScreen";
import LoginScreen from "../loginScreen/LoginScreen";

import NoMatch from "../../components/noMatch/NoMatch";
import Layout from "../../components/layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Layout>
            <HomeScreen />
          </Layout>
        </Route>
        <Route exact path="/search">
          <Layout>
            <h1>Search Resultados</h1>
          </Layout>
        </Route>
        <Route path="/login">
          <LoginScreen />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
