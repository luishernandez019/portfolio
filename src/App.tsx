import React, { Suspense } from "react";
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
        <Suspense fallback={<div style={{ height: 300 }}>Cargando...</div>}>
          <Stack/>
          <Experience/>
          <Education/>
          <Projects/>
        </Suspense>
      </main>
      <Footer/>
    </React.Fragment>
  );
};

export default App;