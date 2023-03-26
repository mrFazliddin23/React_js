import BasicExample from "./Routers/Home";
import Music from "./Routers/Music";
import Blog from "./Routers/Blog";

import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<BasicExample />} />
        <Route path="/music" element={<Music />} />
        <Route path="/blog" element={<Blog/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
