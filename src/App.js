import Blogs from "./Components/Blogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Blog from "./Components/Blog";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Blogs/>}/>
              <Route path="/blog/:id" element={<Blog/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
