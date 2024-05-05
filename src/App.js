import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/Navbar/Navbar";
import FindAJob from "./pages/find/FindAJob";
import PostAJob from "./pages/postajob/PostAJob";

function App() {
  return (
    <div >
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/find" element={<FindAJob/>}/>
        <Route exact path="/post" element={<PostAJob/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
