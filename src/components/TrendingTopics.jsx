import { IoIosSettings } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { fetchTrendingQuotes } from '../store/actions';

export const TrendingTopics = () => {
    const dispatch = useDispatch();

    const handleTagClick = (tagname) => {
        // Dispatch action to fetch trending quotes based on the clicked tag
        dispatch(fetchTrendingQuotes(tagname));
    };

    return (

        <div className="container trending-topics">
            <div className="row ">
                <div className="col-xs-6 col-sm-6 col-md-6"><h4>Trending Topics</h4></div>
                <div className="col-xs-6 col-sm-6 col-md-6"> <IoIosSettings className="setting-icon" /></div>
            </div>

            <div className="row">
                <div className="col-sm-12 col-md-12"><p className="show-line"> show all quotes</p></div>
            </div>

            {/* topics */}

            <div className="row">
                <div className="col-sm-12 col-md-12">
                    <p className="category-name"> AGE</p>
                    <NavLink to="/trendingQuotes"  className="tag-name"  onClick={() => handleTagClick('age')}> #age</NavLink>
                    <p className="quotes-no"> 123 quotes</p>
                </div>
                <div className="col-sm-12 col-md-12">
                    <p className="category-name"> EDUCATION</p>
                    <NavLink to="/trendingQuotes"  className="tag-name"  onClick={() => handleTagClick('education')}> #education</NavLink>
                    <p className="quotes-no"> 93 quotes</p>
                </div>
                <div className="col-sm-12 col-md-12">
                    <p className="category-name"> SCIENCE</p>
                    <NavLink to="/trendingQuotes" className="tag-name"  onClick={() => handleTagClick('science')}> #science</NavLink>
                    <p className="quotes-no"> 85 quotes</p>
                </div>
                <div className="col-sm-12 col-md-12">
                    <p className="category-name"> GAMES</p>
                    <NavLink to="/trendingQuotes" className="tag-name"  onClick={() => handleTagClick('games|nature')}> #games</NavLink>
                    <p className="quotes-no"> 71 quotes</p>
                </div>
                <div className="col-sm-12 col-md-12">
                    <p className="category-name"> DESIGN</p>
                    <NavLink to="/trendingQuotes" className="tag-name"  onClick={() => handleTagClick('design|love')}> #design</NavLink>
                    <p className="quotes-no"> 69 quotes</p>
                </div>
            </div>
        </div>

    );
};
