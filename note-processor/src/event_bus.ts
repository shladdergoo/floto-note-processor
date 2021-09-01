export interface EventBus {
  push(topic: string, id: string): void;
}
