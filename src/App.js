import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import NotFound from "./components/Utils/NotFound";
import AllQuotes from "./pages/AllQuotes";
import { RouteNames } from "./RouteNames";

const NewQuote = React.lazy(() => import("./pages/NewQuote"));
const QuoteDetail = React.lazy(() => import("./pages/QuoteDetail"));

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
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
      </Suspense>
    </Layout>
  );
}

export default App;
