import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./routing/Home";
import About from "./routing/About";
import Contact from "./routing/Contact";
import Error from "./routing/Error";
import Faq from "./routing/Faq";
import NavBar from "./routing/NavBar";
import Tem from "./routing/Tem";
import Users from "./routing/Users";
import Blogs from "./routing/Blogs";
import Blog from "./routing/Blog";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/tem" element={<Tem />} />
        <Route path="/users" element={<Users />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:title" element={<Blog />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
