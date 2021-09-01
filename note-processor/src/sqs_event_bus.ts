import { injectable } from 'inversify';

import { EventBus } from './event_bus';

@injectable()
export class SqsEventBus implements EventBus {
  push(topic: string, id: string): void {
    if (topic == null) {
      throw new ReferenceError('topic cannot be null');
    }
    if (id == null) {
      throw new ReferenceError('id cannot be null');
    }
  }
}
