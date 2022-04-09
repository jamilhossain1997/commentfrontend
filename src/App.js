
import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Register from './Auth/Register';
import Login from './Auth/Login';
import Comment from './Comment/Comment';
import Post from './Post/Post';
import Header from './Common/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Post/>
      <Routes>
          <Route path="/" element={ <Login />}/>
          {/* <Route path="/post" element={<Post/>}/> */}
          <Route path="/register" element={<Register/>} />
          <Route path='/comment' element={<Comment/>}/>
      </Routes>
    </div>
  );
}

export default App;
