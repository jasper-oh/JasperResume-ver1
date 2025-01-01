import { Repository } from './repository';

export interface Social {
  id: number;
  link: string;
  icon: string;
}

export class SocialRepository extends Repository<Social> {
  constructor() {
    super('socials');
  }
}