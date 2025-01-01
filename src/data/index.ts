import { ProjectRepository } from './repository/projectRepository';
import { SkillsRepository } from './repository/skillsRepository';
import { SocialRepository } from './repository/socialRepository';
import { ValuationRepository } from './repository/valuationRepository';
import { WorksRepository } from './repository/worksRespository';

export const repositories = {
  projectData: new ProjectRepository(),
  skillData: new SkillsRepository(),
  socialData: new SocialRepository(),
  valuationData: new ValuationRepository(),
  worksData: new WorksRepository(),
};