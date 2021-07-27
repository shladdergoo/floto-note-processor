import { container } from './container/inversify.config';
import { TYPES } from './container/types';

import { Note } from './note';
import { ProcessorService } from './processor_service';

export const handler = async (event: any = {}): Promise<any> => {
  console.log('start');

  const note = new Note('foo');
  const service = container.get<ProcessorService>(TYPES.ProcessorService);
  service.process(note);

  const response = JSON.stringify(event, null, 2);

  console.log('complete');
  return response;
};
