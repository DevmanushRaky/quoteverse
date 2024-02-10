import axios from 'axios';

const BASE_URL = 'https://api.quotable.io';

export const fetchRandomQuotes = () => async (dispatch) => {
  try {
    const response = await axios.get(`${BASE_URL}/quotes/random`);
    dispatch({ type: 'FETCH_RANDOM_QUOTES', payload: response.data });
  } catch (error) {
    console.error('Error fetching random quotes', error);
  }
};

export const fetchListQuotes = () => async (dispatch) => {
  try {
    const response = await axios.get(`${BASE_URL}/quotes?page=1`);
    dispatch({ type: 'FETCH_LIST_QUOTES', payload: response.data });
  } catch (error) {
    console.error('Error fetching list quotes', error);
  }
};

export const fetchTrendingQuotes = (tagname) => async (dispatch) => {
  try {
    const response = await axios.get(`${BASE_URL}/quotes?tags=${tagname}`);
    dispatch({ type: 'FETCH_LIST_QUOTES', payload: response.data });
  } catch (error) {
    console.error('Error fetching list quotes', error);
  }
};



export const likeQuote = (quote) => ({
    type: 'LIKE_QUOTE',
    payload: quote,
  });
  
  export const unlikeQuote = (quoteId) => ({
    type: 'UNLIKE_QUOTE',
    payload: quoteId,
  });
  
