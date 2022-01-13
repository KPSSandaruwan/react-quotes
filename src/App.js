import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components/layout/Layout";
import NotFound from "./components/Utils/NotFound";
import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import QuoteDetail from "./pages/QuoteDetail";
import { RouteNames } from "./RouteNames";
function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to={RouteNames.ALL_QUOTES} />
        </Route>
        <Route path={RouteNames.ALL_QUOTES} exact>
          <AllQuotes />
        </Route>
        <Route path={RouteNames.SINGLE_QUOTES_DETAILS + ":quoteId"}>
          <QuoteDetail />
        </Route>
        <Route path={RouteNames.NEW_QUOTES}>
          <NewQuote />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
