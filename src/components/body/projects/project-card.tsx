import "./project-card.css";
import { Project } from "../../../data/repository/projectRepository";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps ) {
  return (
    <div className="project-card" data-type={project.type}>
      <div className="project-info">
        <label className="project-title">{project.title}</label>      
        <p>{project.briefDescription}</p>        
        <div className="project-links">
          {project.demo && (
            <a className="project-link" href={project.demo}>
              <div className="link-button">
                <i className="fi-rr-play"></i>
                Youtube
              </div>
            </a>
          )}
          {project.github && (
            <a className="project-link" href={project.github}>
              <div className="link-button">
                <i className="devicon-github-original colored"></i> Github
              </div>
            </a>
          )}
          {project.pdf && (
            <a className="project-link" href={project.pdf}>
              <div className="link-button">
                <i className="fi-rr-document"></i> Notion
              </div>
            </a>
          )}
        </div>

        <div className="projectAwesome">
          <div className="project-tags">
            {project.tech_stack.map((tag, i) => {
              return <label key={i} className="tag">{tag}</label>;
            })}
          </div>
          <img src={project.image} className="project-photo" />
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
