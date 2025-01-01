import { Repository } from './repository';

export interface Works {
  id: number;
  company: string;
  designation: string;
  dateJoining: string;
  dateEnd: string;
  companyLogo: string;
  work: string;
}

export class WorksRepository extends Repository<Works> {
  constructor() {
    super('works');
  }
}