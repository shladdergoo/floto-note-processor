import { Note } from './note';

export interface NoteRepository {
  save(note: Note): string;
}
