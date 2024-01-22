import { projectsData } from "./projectData";
import { Card} from "react-bootstrap";
import { FcBriefcase } from "react-icons/fc";

const Projects = () => {
  return (
    <div id="projects">
      <h1 id="projects-header"><FcBriefcase /> Projects </h1>
      <div id="projects-wrapper-div">
          {projectsData.map((p) => {
            return (
              <Card key={p.id} className="project-card-div">
                <Card.Header className="project-card-header-div">
                  <Card.Img className="project-card-img" src={p.img}></Card.Img>
                </Card.Header>
                <Card.Body className="project-card-body-div">
                  <Card.Title className="project-card-title">
                    {p.title}
                  </Card.Title>
                  <p className="project-card-desc">{p.description} </p>
                  <ul className="project-tech-used-list">
                    {p.technologies.map((t) => {
                      return <li className="project-tech-used-list-item" key={t}>{t}</li>
                    })}
                  </ul>
                </Card.Body>
              </Card>
            );
          })}
      </div>
    </div>
  );
};

export default Projects;
