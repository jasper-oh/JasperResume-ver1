import "./body.css";
import About from "./about/index";
import Projects from "./projects/index";
import Skills from "./skills/index";
import Valuation from "./valuation";
import Contact from "./contact/index";
function Body() {
  return (
    <div className="body">
      <section id="about">
        <About />
      </section>
      <section id="valuation">
        <Valuation/>
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>      
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default Body;
