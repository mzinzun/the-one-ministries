import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pageComponents/Landing';
import OneLess from './pageComponents/OneLess';
import Header from './components/Header';
import About from './pageComponents/About/About';
import './App.css';
import NewsStories from './pageComponents/NewsStories';

function App() {
  return (
    <Router>
      <div className="app container-fluid justify-content-start">
        <Header />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/one-less" element={<OneLess />} />
          <Route exact path="/news-stories" element={<NewsStories />} />
          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
