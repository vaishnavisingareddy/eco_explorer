import Header from "./components/Header";
import {Routes,Route} from 'react-router-dom' 
import Blogs from "./pages/Blogs";
import Login from './pages/Login';
import Register from './pages/Register';
import UserBlogs from "./pages/UserBlogs";
import CreateBlog from "./pages/CreateBlog";
import BlogDetails from "./pages/BlogDetails";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <div>
      <>
       <Header/>
      <Routes>
     
      <Route path="/" element={<Welcome/>} />
      <Route path="/login" element={<Login/>} />  
      <Route path="/my-blogs" element={<UserBlogs />} />  
      <Route path="/blogs" element={<Blogs/>} />  
      <Route path="/register" element={<Register/>} />
      <Route path="/blog-details/:id" element={<BlogDetails/>} />
      <Route path="/create-blog" element={<CreateBlog/>} />
      </Routes>
      </>
     

      
    </div>
  );
}

export default App;
