import "./skills.css";
import "./skill-card.css";
import { Skill } from "../../../data/repository/skillsRepository";
import { repositories } from "../../../data";
import Separator from "../../common/separator";
import { useEffect, useState } from "react";

function Skills() {
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    const fetchSkills = async (): Promise<void> => {
      try {
        const skillsData = await repositories.skillData.getAll();
        setSkills(skillsData);
      } catch (error: any) {
        console.error(`Error fetching skills: ${error.message}`);
      }
    };

    fetchSkills();
  }, []);

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.type]) {
      acc[skill.type] = [];
    }
    acc[skill.type].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <div className="skills">
      <Separator />
      <label className="section-title">Skills</label>
      <div className="skills-container">
        {Object.entries(groupedSkills).map(([type, skills]) => (
          <div className="skills-section" key={type}>
            <label className="skills-section-title">{type}</label>
            <div className="skills-list">
              {skills.map((item) => (
                <div className="skill-card" key={item.name}>
                  <div
                    className="skill-icon"
                    dangerouslySetInnerHTML={{ __html: item.icon }}
                  />
                  <label className="skill-name">{item.name}</label>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
