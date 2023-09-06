import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import PageNotFound from "./pages/page-not-found";
import BaseLayout from "./components/baseLayout";

export default function Router () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>

        <Route path="/login" element={<h1>LOGIN</h1>} />
        
      </Routes>
    </BrowserRouter>
  )
}
