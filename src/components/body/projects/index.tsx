import { useState, useEffect } from "react";
import "./projects.css";
import Separator from "../../common/separator/index";
import { Project } from "../../../data/repository/projectRepository";
import { repositories } from "../../../data";
import ProjectCard from "./project-card";

type ProjectType = "all" | "web" | "mobile" | "desktop";

function Projects() {
  const [visibleProjects, setVisibleProjects] = useState(4); // Start with showing 4 projects
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [project, setProject] = useState<Project[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<ProjectType>("all"); // Track selected filter
  const [counts, setCounts] = useState<Record<ProjectType, number>>({
    all: 0,
    web: 0,
    mobile: 0,
    desktop: 0,
  });

  useEffect(() => {
    const fetchProjects = async (): Promise<void> => {
      try {
        const projectData = await repositories.projectData.getAll();
        setProject(projectData);
        setFilteredProjects(projectData);

        // Count projects by category
        const categoryCounts = projectData.reduce(
          (acc: Record<ProjectType, number>, curr) => {
            acc.all++;
            if (curr.type in acc) {
              acc[curr.type as ProjectType]++;
            }
            return acc;
          },
          { all: 0, web: 0, mobile: 0, desktop: 0 }
        );
        setCounts(categoryCounts);
      } catch (error: any) {
        throw new Error(`Error fetching projects: ${error.message}`);
      }
    };

    fetchProjects();
  }, []);

  const handleFilterClick = (type: ProjectType) => {
    // Update selected filter
    setSelectedFilter(type);

    // Filter projects based on type
    const filtered =
      type === "all" ? project : project.filter((item) => item.type === type);
    setFilteredProjects(filtered);

    // Reset visible projects to the initial value
    setVisibleProjects(4);
  };

  const loadMore = () => {
    setVisibleProjects((prev) => prev + 4); // Load 4 more projects each time
  };

  return (
    <div className="projects">
      <Separator />
      <label className="section-title">Projects</label>
      <div className="work__categories">
        <button
          className={`category__btn ${
            selectedFilter === "all" ? "selected" : ""
          }`}
          data-filter="all"
          onClick={() => handleFilterClick("all")}
        >
          All <span className="category__count">{counts.all}</span>
        </button>
        <button
          className={`category__btn ${
            selectedFilter === "web" ? "selected" : ""
          }`}
          data-filter="web"
          onClick={() => handleFilterClick("web")}
        >
          Web <span className="category__count">{counts.web}</span>
        </button>
        <button
          className={`category__btn ${
            selectedFilter === "mobile" ? "selected" : ""
          }`}
          data-filter="mobile"
          onClick={() => handleFilterClick("mobile")}
        >
          Mobile <span className="category__count">{counts.mobile}</span>
        </button>
        <button
          className={`category__btn ${
            selectedFilter === "desktop" ? "selected" : ""
          }`}
          data-filter="desktop"
          onClick={() => handleFilterClick("desktop")}
        >
          Desktop <span className="category__count">{counts.desktop}</span>
        </button>
      </div>
      <div className="work__projects">
        {filteredProjects.slice(0, visibleProjects).map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      {visibleProjects < filteredProjects.length && (
        <button className="load-more-btn" onClick={loadMore}>
          See more...
        </button>
      )}
    </div>
  );
}

export default Projects;
