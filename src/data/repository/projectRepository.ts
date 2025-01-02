import { Repository } from './repository';

export interface Project {
  id: number;
  type: string;
  tech_stack: string[];
  title: string;
  brief_description: string;
  description: string;
  detailDescription: string;
  demo: string;
  github: string;
  pdf: string;
  image: string;
}

export class ProjectRepository extends Repository<Project> {
  constructor() {
    super('projects');
  }
}

