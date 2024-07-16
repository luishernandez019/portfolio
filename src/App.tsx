import React from "react";
import { Navbar } from "./components/Navbar";
import { Presentation } from "./components/Presentation";
import { Services } from "./components/Services";
import { Stack } from "./components/Stack";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import "./index.css";

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <main>
        <Presentation/>
        <Services/>
        <Stack/>
        <Experience/>
        <Education/>
        <Projects/>
      </main>
      <Footer/>
    </React.Fragment>
  );
};

export default App;