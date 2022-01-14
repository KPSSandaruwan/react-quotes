import { Link } from 'react-router-dom';
import { RouteNames } from '../../RouteNames';
import classes from './NoQuotesFound.module.css';

const NoQuotesFound = () => {
  return (
    <div className={classes.noquotes}>
      <p>No quotes found!</p>
      <Link className='btn' to={RouteNames.NEW_QUOTES}>
        Add a Quote
      </Link>
    </div>
  );
};

export default NoQuotesFound;
