import { FaReact, FaNode, FaPython } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { TbFileTypeSql } from "react-icons/tb";
import { FcAbout } from "react-icons/fc";

const About = () => {
  return (
    <div id="about">
      <div className="about-text">
        <h1 id="about-heading"><FcAbout /> A small <span className="intro">intro</span> about myself</h1>
        <p className="about-text-desc">
          I'm a highly skilled Web Developer with expertise in React.js,
          dedicated to creating dynamic and user-friendly web applications.
          Having a keen eye for detail helps me build seamless websites. In
          addition to React.js, I also work with technologies like Python,
          Node.js and SQL. I'm passionate about crafting innovative solutions to
          drive business growth and I actively seek new challenges and
          opportunities to apply my skills.
        </p>
      </div>
      <div className="skills-div">
        <div className="skill-div">
          <FaReact size={"50px"} />
          <span className="skill-desc">ReactJs</span>
        </div>
        <div className="skill-div">
          <FaNode size={"50px"} />
          <span className="skill-desc">Node.js</span>
        </div>
        <div className="skill-div">
          <SiTypescript size={"50px"} />
          <span className="skill-desc">Typescript</span>
        </div>
        <div className="skill-div">
          <FaPython size={"50px"} />
          <span className="skill-desc">Python</span>
        </div>
        <div className="skill-div">
          <TbFileTypeSql size={"50px"} />
          <span className="skill-desc">SQL</span>
        </div>
      </div>
    </div>
  );
};

export default About;
