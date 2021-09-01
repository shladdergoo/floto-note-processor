import { Note } from './note';

export interface ProcessorService {
  process(note: Note): string;
}
