import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRandomQuotes } from '../store/actions';
import {Quote} from './Quote';

export const QuoteFeed = () => {
  const quotes = useSelector((state) => state.quotes);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchRandomQuotes() );
  }, [dispatch]);

  return (
    <div className='quote-container'>
      {Array.isArray(quotes) && quotes.map((quote) => (
        <Quote key={quote._id} quote={quote} />
      ))}
    </div>
  );
};
