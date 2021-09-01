import { mock } from 'jest-mock-extended';

import { EventBus } from '../src/event_bus';
import { Note } from '../src/note';
import { NoteRepository } from '../src/note_repository';
import { NoteProcessorService } from '../src/note_processor_service';

it('should save note to repository', () => {
  const mockEventBus = mock<EventBus>();
  const mockNoteRepository = mock<NoteRepository>();

  const sut = new NoteProcessorService(mockNoteRepository, mockEventBus);
  sut.process(
    new Note('someText', true, 123, 456, new Date('2021-7-29 14:04:05'))
  );

  expect(mockNoteRepository.save).toHaveBeenCalled();
});

it('should push event to event bus', () => {
  const mockEventBus = mock<EventBus>();
  const mockNoteRepository = mock<NoteRepository>();

  const sut = new NoteProcessorService(mockNoteRepository, mockEventBus);
  sut.process(
    new Note('someText', true, 123, 456, new Date('2021-7-29 14:04:05'))
  );

  expect(mockEventBus.push).toHaveBeenCalled();
});
