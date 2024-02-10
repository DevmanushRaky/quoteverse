import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from './pages/Home';
import { Provider } from 'react-redux';
import store from './store/store';
import { Navbar } from "./components/Navbar";
import { ListQuoteFeed } from "./pages/ListQuoteFeed";
import { LikedQuotes } from "./pages/LikedQuotes";
import { TrendingQuotes } from "./pages/TrendingQuotes";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Navbar/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/listQuotes" element={<ListQuoteFeed />} />
            <Route path="/likedQuotes" element={<LikedQuotes />} />
            <Route path="/trendingQuotes" element={<TrendingQuotes />} />
            </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
