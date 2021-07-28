import { NoteEvent } from '.';
import { Note } from './note';

export class EventMapper {
  static mapEvent(event: NoteEvent): Note {
    const hasLocation: boolean = event.hasLocation.toLowerCase() === 'true';
    const latitude: number = Number.parseFloat(event.latitude);
    const longitude: number = Number.parseFloat(event.longitude);
    const noteDate: Date = new Date(event.noteDate);

    return new Note(event.noteText, hasLocation, latitude, longitude, noteDate);
  }
}
