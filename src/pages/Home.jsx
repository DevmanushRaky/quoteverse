import { QuoteFeed } from '../components/QuoteFeed';
import { TrendingTopics } from '../components/TrendingTopics';
import { UserDetails } from '../components/UserDetails';

export const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-4">
          <UserDetails />
        </div>
        <div className="col-sm-12 col-md-4">
          <QuoteFeed />
        </div>
        <div className="col-sm-12 col-md-4">
          < TrendingTopics />
        </div>
      </div>
    </div>

  );
};

