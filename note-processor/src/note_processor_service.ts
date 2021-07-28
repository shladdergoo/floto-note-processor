import { inject, injectable } from 'inversify';
import { TYPES } from './container/types';

import { Note } from './note';
import { NoteRepository } from './note_repository';
import { ProcessorService } from './processor_service';

@injectable()
export class NoteProcessorService implements ProcessorService {
  private readonly _noteRepository: NoteRepository;

  public constructor(
    @inject(TYPES.NoteRepository) noteRepository: NoteRepository
  ) {
    this._noteRepository = noteRepository;
  }

  process(note: Note): string {
    return this._noteRepository.save(note);
  }
}
