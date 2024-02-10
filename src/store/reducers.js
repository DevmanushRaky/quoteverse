const initialState = {
    quotes: [],
    likedQuotes: [],
    trendingTopics: [],
};

const rootReducer = (state = initialState, action) => {
    let likedQuoteWithStatus; 

    switch (action.type) {
        case 'FETCH_RANDOM_QUOTES':
            return { ...state, quotes: action.payload };
        case 'FETCH_LIST_QUOTES':
            return { ...state, quotes: action.payload };
        case 'LIKE_QUOTE':
            likedQuoteWithStatus = {
                ...action.payload,
                isLiked: true,
            };
            return {
                ...state,
                likedQuotes: [...state.likedQuotes, likedQuoteWithStatus],
            };
        case 'UNLIKE_QUOTE':
            return {
                ...state,
                likedQuotes: state.likedQuotes.filter((quote) => quote._id !== action.payload),
            };
        case 'FETCH_LIKED_QUOTES':
            return { ...state, likedQuotes: action.payload };
        case 'FETCH_TRENDING_TOPICS':
            return { ...state, trendingTopics: action.payload };
        default:
            return state;
    }
};

export default rootReducer;
