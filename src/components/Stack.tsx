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
import { useLanguage } from "../hooks/useLanguage";
import "../styles/Stack.css";

export const Stack = () => {
  const { t } = useLanguage();
  const tt = t.stack.tooltips;

  return (
    <section className="stack-section" id="stack">
      <h2>{t.stack.heading}</h2>

      <div className="stack-container">
        <div className="stack-card" data-tooltip={tt.htmlCssSass}>
          <HtmlCssSass/>
          <h2>HTML, CSS y SASS</h2>
        </div>

        <div className="stack-card" data-tooltip={tt.jsTs}>
          <JavascriptTypescript/>
          <h2>Javascript y Typescript</h2>
        </div>

        <div className="stack-card square" data-tooltip={tt.react}>
          <React/>
          <h2>React.js</h2>
        </div>

        <div className="stack-card square" data-tooltip={tt.next}>
          <Next/>
          <h2>Next.js</h2>
        </div>

        <div className="stack-card square" data-tooltip={tt.node}>
          <Node/>
          <h2>Node.js</h2>
        </div>

        <div className="stack-card square" data-tooltip={tt.mysql}>
          <MySQL/>
          <h2>MySQL</h2>
        </div>

        <div className="stack-card square" data-tooltip={tt.mongodb}>
          <MongoDB/>
          <h2>MongoDB</h2>
        </div>

        <div className="stack-card square" data-tooltip={tt.postgresql}>
          <PostgreSQL/>
          <h2>PostgreSQL</h2>
        </div>

        <div className="stack-card" data-tooltip={tt.tailwind}>
          <Tailwind/>
          <h2>Tailwind</h2>
        </div>

        <div className="stack-card square" data-tooltip={tt.bootstrap}>
          <Bootstrap/>
          <h2>Bootstrap</h2>
        </div>

        <div className="stack-card square" data-tooltip={tt.python}>
          <Python/>
          <h2>Python</h2>
        </div>

        <div className="stack-card square" data-tooltip={tt.git}>
          <Git/>
          <h2>Git</h2>
        </div>
      </div>
    </section>
  );
};
