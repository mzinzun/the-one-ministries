import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pageComponents/About/About';
import './App.css';
import ParalaxTest from './components/ParalaxTest';

function App() {
  return (
    <Router>
      <div className="app container-fluid">
        {/* <Header /> */}
        <Routes>
          <Route exact path="/" element={<ParalaxTest />} />
          <Route exact path="/about" element={<About />} />
          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
