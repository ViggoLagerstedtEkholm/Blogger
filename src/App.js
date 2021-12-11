import Blog from "./Components/Blog";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Blog/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
