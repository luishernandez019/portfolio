import HtmlCssSass from "../assets/icons/stack/html_css_sass.svg";
import JavascriptTypescript from "../assets/icons/stack/javascript_typescript.svg";
import React from "../assets/icons/stack/react.svg";
import Next from "../assets/icons/stack/nextjs.svg";
import Node from "../assets/icons/stack/nodejs.svg";
import MySQL from "../assets/icons/stack/mysql.svg";
import MongoDB from "../assets/icons/stack/mongodb.svg";
import PostgreSQL from "../assets/icons/stack/postgresql.svg";
import Tailwind from "../assets/icons/stack/tailwind.svg";
import Bootstrap from "../assets/icons/stack/bootstrap.svg";
import Python from "../assets/icons/stack/python.svg";
import Git from "../assets/icons/stack/git.svg";
import "../styles/Stack.css";

export const Stack = () => {
  return (
    <section className="stack-section" id="stack">
      <h1>Mi stack de desarrollo</h1>

      <div className="stack-container">
        <div className="stack-card">
          <HtmlCssSass/>
          <h2>HTML, CSS y SASS</h2>
        </div>

        <div className="stack-card">
          <JavascriptTypescript/>
          <h2>Javascript y Typescript</h2>
        </div>

        <div className="stack-card square">
          <React/>
          <h2>React.js</h2>
        </div>

        <div className="stack-card square">
          <Next/>
          <h2>Next.js</h2>
        </div>

        <div className="stack-card square">
          <Node/>
          <h2>Node.js</h2>
        </div>

        <div className="stack-card square">
          <MySQL/>
          <h2>MySQL</h2>
        </div>

        <div className="stack-card square">
          <MongoDB/>
          <h2>MongoDB</h2>
        </div>

        <div className="stack-card square">
          <PostgreSQL/>
          <h2>PostgreSQL</h2>
        </div>

        <div className="stack-card">
          <Tailwind/>
          <h2>Tailwind</h2>
        </div>

        <div className="stack-card square">
          <Bootstrap/>
          <h2>Bootstrap</h2>
        </div>

        <div className="stack-card square">
          <Python/>
          <h2>Python</h2>
        </div>

        <div className="stack-card square">
          <Git/>
          <h2>Git</h2>
        </div>
      </div>
    </section>
  );
};