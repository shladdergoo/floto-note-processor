import { injectable } from 'inversify';

import { Note } from './note';
import { NoteRepository } from './note_repository';

@injectable()
export class DynamoDBNoteRepository implements NoteRepository {
  save(note: Note): string {
    if (!note) {
      throw new ReferenceError('note is undefined');
    }

    return '';
  }
}
