import React from 'react';
import { Link } from 'react-router-dom';
import { RouteNames } from '../../RouteNames';
import classes from './QuoteItem.module.css';

const QuoteItem = (props) => {
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>
      <Link className='btn' to={RouteNames.SINGLE_QUOTES_DETAILS + props.id}>
        View Fullscreen
      </Link>
    </li>
  );
};

export default QuoteItem;
