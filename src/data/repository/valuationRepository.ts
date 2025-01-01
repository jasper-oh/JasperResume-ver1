import { Repository } from './repository';

export interface Valuation {
  id: number;
  icon: string;
  description: HTMLDivElement;
}

export class ValuationRepository extends Repository<Valuation> {
  constructor() {
    super('valuations');
  }
}