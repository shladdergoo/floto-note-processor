import 'reflect-metadata';

import { Container } from 'inversify';
import { TYPES } from './types';

import { NoteProcessorService } from '../note_processor_service';
import { ProcessorService } from '../processor_service';
import { NoteRepository } from '../note_repository';
import { DynamoDBNoteRepository } from '../dynamodb_note_repository';
import { EventBus } from '../event_bus';
import { SqsEventBus } from '../sqs_event_bus';

const container = new Container();

container
  .bind<ProcessorService>(TYPES.ProcessorService)
  .to(NoteProcessorService);
container.bind<NoteRepository>(TYPES.NoteRepository).to(DynamoDBNoteRepository);
container.bind<EventBus>(TYPES.EventBus).to(SqsEventBus);

export { container };
