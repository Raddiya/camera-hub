import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import About from './Components/About/About';
import Home from './Components/Home/Home'
import Review from './Components/Review/Review';
import Dashboard from './Components/Dashboard/Dashboard';
import Blog from './Components/Blog/Blog';



function App() {
  return (
    <div className="App">
      <h1>Welcome to my website</h1>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/review" element={<Review></Review>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
      </Routes>


    </div>
  );
}

export default App;
