import { useSelector } from 'react-redux';
import { Quote } from '../components/Quote';
import { UserDetails } from '../components/UserDetails';
import { TrendingTopics } from '../components/TrendingTopics';


export const TrendingQuotes = () => {
    const quotes = useSelector((state) => state.quotes);
   
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-4">
                    <UserDetails />
                </div>
                <div className="col-sm-12 col-md-4">
                    <div className='quote-container'>
                        {/* Map through the trending quotes and render them */}
                        {quotes && quotes.results && (
                            <>
                                <p className='tag-name'>{quotes.results[0]?.tags[0]}</p>
                                {quotes.results.map((quote) => (
                                    <Quote key={quote._id} quote={quote} />
                                ))}
                            </>
                        )}
                    </div>
                </div>
                <div className="col-sm-12 col-md-4">
                    <TrendingTopics />
                </div>
            </div>
        </div>
    );
};

