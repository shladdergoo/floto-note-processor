import { inject, injectable } from 'inversify';
import { TYPES } from './container/types';

import { EventBus } from './event_bus';
import { Note } from './note';
import { NoteRepository } from './note_repository';
import { ProcessorService } from './processor_service';

@injectable()
export class NoteProcessorService implements ProcessorService {
  private readonly _noteRepository: NoteRepository;
  private readonly _eventBus: EventBus;

  public constructor(
    @inject(TYPES.NoteRepository) noteRepository: NoteRepository,
    @inject(TYPES.EventBus) eventBus: EventBus
  ) {
    this._noteRepository = noteRepository;
    this._eventBus = eventBus;
  }

  process(note: Note): string {
    const eventTopic = 'NOTE';

    const id = this._noteRepository.save(note);
    this._eventBus.push(eventTopic, id);

    return id;
  }
}
