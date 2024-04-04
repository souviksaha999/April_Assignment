// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Nav from './Common/Nav';
import Login from './Pages/Login';
import Reg from './Pages/Reg';
import AllBlogs from './Pages/AllBlogs';
import BlogDetaills from './Pages/BlogDetaills';
import Category from './Pages/Category';
import CategoryDetails from './Pages/CategoryDetails';
import Footer from './Common/Footer';
import Home from './Pages/Home';

function App() {
  return (
    <>
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={< Home/>} />
        <Route path='/login' element={< Login/>} />
        <Route path='/register' element={<Reg />} />
        <Route path='/allblogs' element={<AllBlogs />} />
        <Route path='/blogdetails/:id' element={<BlogDetaills />} />
        <Route path='/category' element={<Category />} />
        <Route path='/catgdetails/:id' element={<CategoryDetails />} />


      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
