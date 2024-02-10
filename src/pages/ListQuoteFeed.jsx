import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchListQuotes } from '../store/actions';
import { Quote } from '../components/Quote';
import { UserDetails } from '../components/UserDetails';
import { TrendingTopics } from '../components/TrendingTopics';

export const ListQuoteFeed = () => {
    const quotes = useSelector((state) => state.quotes);
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchListQuotes());
    }, [dispatch]);

    return (
        <div className="container">
           <div className="row">
                <div className="col-sm-12 col-md-4">
                    <UserDetails />
                </div>
                <div className="col-sm-12 col-md-4">
                    <div className='quote-container'>
                        {quotes.results && quotes.results.map((quote) => (
                            <Quote key={quote._id} quote={quote} />
                        ))}
                    </div>
                </div>
                <div className="col-sm-12 col-md-4">
                    < TrendingTopics />
                </div>
            </div>
        </div>






    );
};
