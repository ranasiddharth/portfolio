import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Introduction from "./components/introduction/Introduction";
import Education from "./components/education/Education";
import Achievements from "./components/achievements/Achievements";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import NotFound from "./components/NotFound";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/portfolio" element={<Introduction />}>
          {/* Home page */}
        </Route>
        <Route exact path="/education" element={<Education />}>
          {/* Education page */}
        </Route>
        <Route exact path="/achievements" element={<Achievements />}>
          {/* Achievements page */}
        </Route>
        <Route exact path="/skills" element={<Skills />}>
          {/* Contact page */}
        </Route>
        <Route exact path="/projects" element={<Projects />}>
          {/* Home page */}
        </Route>
        <Route exact path="/contact" element={<Contact />}>
          {/* Skills page */}
        </Route>
        <Route path="*" element={<NotFound />} />
        {/* 404 page */}
      </Routes>
    </>
  );
}

export default App;
