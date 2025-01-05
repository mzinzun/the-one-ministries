import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Landing from './pageComponents/Landing';
import OneLess from './pageComponents/OneLess';
import Header from './components/Header';
import About from './pageComponents/About/About';
import './App.css';
import NewsStories from './pageComponents/NewsStories';
import Login from './components/Login';
import Logout from './components/Logout';

function App() {
  const [user, setUser] = useState({});
  return (
    <Router>
      <div className="app container-fluid justify-content-start">
        <Header user={user}/>
        <Routes>
          <Route exact path="/" element={<Landing user={user}/>} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/one-less" element={<OneLess />} />
          <Route exact path="/news-stories" element={<NewsStories />} />
          <Route exact path="/login" element={<Login user={user} setUser={setUser} />} />
          <Route exact path="/logout" element={<Logout setUser={setUser} />} />
          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
