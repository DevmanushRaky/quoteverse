import { useSelector } from 'react-redux';
import { Quote } from '../components/Quote';

import { TrendingTopics } from '../components/TrendingTopics';
import { UserDetails } from '../components/UserDetails';

export const LikedQuotes = () => {
  const likedQuotes = useSelector((state) => state.likedQuotes);

  return (

    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-4">
          <UserDetails />
        </div>
        <div className="col-sm-12 col-md-4">
          <div className='quote-container'>
            {Array.isArray(likedQuotes) && likedQuotes.map((quote) => (
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
