import { Repository } from './repository';

export interface Skill {
  id: number;
  type: string;
  icon: string;
  name: string;
}

export class SkillsRepository extends Repository<Skill> {
  constructor() {
    super('skills');
  }
}