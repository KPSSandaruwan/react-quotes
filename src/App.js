import { Route, Switch, Redirect } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import QuoteDetail from "./pages/QuoteDetail";
import { RouteNames } from "./RouteNames";
function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to={RouteNames.ALL_QUOTES} />
      </Route>
      <Route path={RouteNames.ALL_QUOTES} exact>
        <AllQuotes />
      </Route>
      <Route path={RouteNames.SINGLE_QUOTES_DETAILS}>
        <QuoteDetail />
      </Route>
      <Route path={RouteNames.NEW_QUOTES}>
        <NewQuote />
      </Route>
    </Switch>
  );
}

export default App;
