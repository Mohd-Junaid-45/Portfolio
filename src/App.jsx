import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeLayout from "./layout/HomeLayout";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import TechStack from "./pages/TechStack";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";
import { inject } from "@vercel/analytics";

inject();

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Homepage />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="techstack" element={<TechStack />} />
          <Route path="projects" element={<Projects />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
