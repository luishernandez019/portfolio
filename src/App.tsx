import React, { lazy, Suspense } from "react";
import { Navbar } from "./components/Navbar";
import { Presentation } from "./components/Presentation";
import { Services } from "./components/Services";
import { ErrorBoundary } from "./components/ErrorBoundary";
import "./index.css";

const Stack = lazy(() => import("./components/Stack").then(m => ({ default: m.Stack })));
const Experience = lazy(() => import("./components/Experience").then(m => ({ default: m.Experience })));
const Education = lazy(() => import("./components/Education").then(m => ({ default: m.Education })));
const Projects = lazy(() => import("./components/Projects").then(m => ({ default: m.Projects })));
const Contact = lazy(() => import("./components/Contact").then(m => ({ default: m.Contact })));
const Footer = lazy(() => import("./components/Footer").then(m => ({ default: m.Footer })));

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <main id="main">
        <Presentation/>
        <Services/>
        <ErrorBoundary>
          <Suspense fallback={null}>
            <Stack/>
            <Experience/>
            <Education/>
            <Projects/>
            <Contact/>
          </Suspense>
        </ErrorBoundary>
      </main>
      <ErrorBoundary>
        <Suspense fallback={null}>
          <Footer/>
        </Suspense>
      </ErrorBoundary>
    </React.Fragment>
  );
}

export default App;
