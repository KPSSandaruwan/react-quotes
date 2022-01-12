import { Fragment } from "react";
import { Route, useParams } from "react-router-dom";
import { RouteNames } from "../RouteNames";
import Comments from "../components/comments/Comments";

const QuoteDetail = () => {
  const params = useParams();

  return (
    <Fragment>
      <h1>Quote detail page</h1>
      <p>{params.quoteId}</p>
      <Route path={RouteNames.SINGLE_QUOTES_COMMENTS}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
