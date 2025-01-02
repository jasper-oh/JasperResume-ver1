// repository.ts
import { supabase } from '../../util/supabase';

export class Repository<T> {
  private table: string;

  constructor(table: string) {
    this.table = table;
  }

  async getAll(): Promise<T[]> {
    const { data, error } = await supabase.from(this.table).select('*').order('id', { ascending: false });
    if (error) throw new Error(`Error fetching data from ${this.table}: ${error.message}`);
    return data || [];
  }

  async getById(id: number): Promise<T | null> {
    const { data, error } = await supabase.from(this.table).select('*').eq('id', id).single();
    if (error) throw new Error(`Error fetching record with ID ${id} from ${this.table}: ${error.message}`);
    return data;
  }
}