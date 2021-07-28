import { container } from './container/inversify.config';
import { TYPES } from './container/types';

import { EventMapper } from './event_mapper';
import { ProcessorService } from './processor_service';

export class NoteEvent {
  public noteText: string = '';
  public hasLocation: string = '';
  public latitude: string = '';
  public longitude: string = '';
  public noteDate: string = '';
}

export const handler = async (event: NoteEvent): Promise<any> => {
  console.log('start');
  console.log(event);

  const note = EventMapper.mapEvent(event);
  const service = container.get<ProcessorService>(TYPES.ProcessorService);
  const noteId = service.process(note);

  console.log('complete');
  return noteId;
};
