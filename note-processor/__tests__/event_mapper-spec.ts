import { NoteEvent } from '../src';
import { EventMapper } from '../src/event_mapper';

it('should export class', () => {
  expect(EventMapper).toBeTruthy();
});

it.each(['foo', ''])('should parse valid values for noteText', (i) => {
  const noteEvent = new NoteEvent();
  noteEvent.noteText = i;
  noteEvent.hasLocation = 'false';
  noteEvent.latitude = '0';
  noteEvent.longitude = '0';
  noteEvent.noteDate = '2021-07-30 11:12:13';

  const note = EventMapper.mapEvent(noteEvent);

  expect(note.noteText).toBe(i);
});

it.each(['false', 'true', '0', '1'])(
  'should parse valid values for hasLocation',
  (i) => {
    const noteEvent = new NoteEvent();
    noteEvent.noteText = 'foo';
    noteEvent.hasLocation = i;
    noteEvent.latitude = '0';
    noteEvent.longitude = '0';
    noteEvent.noteDate = '2021-07-30 11:12:13';

    EventMapper.mapEvent(noteEvent);
  }
);

it.each(['foo', 'yes', 'no'])(
  'should throw for invalid values of hasLocation',
  (i) => {
    const noteEvent = new NoteEvent();
    noteEvent.noteText = 'foo';
    noteEvent.hasLocation = i;
    noteEvent.latitude = '0';
    noteEvent.longitude = '0';
    noteEvent.noteDate = '2021-07-30 11:12:13';

    expect(() => {
      EventMapper.mapEvent(noteEvent);
    }).toThrow();
  }
);

it.each(['0', '1', '1.1', '1.234567', '-1', '-1.2345'])(
  'should parse valid values for latitude',
  (i) => {
    const noteEvent = new NoteEvent();
    noteEvent.noteText = 'foo';
    noteEvent.hasLocation = 'true';
    noteEvent.latitude = i;
    noteEvent.longitude = '0';
    noteEvent.noteDate = '2021-07-30 11:12:13';

    EventMapper.mapEvent(noteEvent);
  }
);

it.each(['foo', 'yes', 'no'])(
  'should throw for invalid values of latitude',
  (i) => {
    const noteEvent = new NoteEvent();
    noteEvent.noteText = 'foo';
    noteEvent.hasLocation = 'true';
    noteEvent.latitude = i;
    noteEvent.longitude = '0';
    noteEvent.noteDate = '2021-07-30 11:12:13';

    expect(() => {
      EventMapper.mapEvent(noteEvent);
    }).toThrow();
  }
);

it.each(['0', '1', '1.1', '1.234567', '-1', '-1.2345'])(
  'should parse valid values for longitude',
  (i) => {
    const noteEvent = new NoteEvent();
    noteEvent.noteText = 'foo';
    noteEvent.hasLocation = 'true';
    noteEvent.latitude = '0';
    noteEvent.longitude = i;
    noteEvent.noteDate = '2021-07-30 11:12:13';

    EventMapper.mapEvent(noteEvent);
  }
);

it.each(['foo', 'yes', 'no'])(
  'should throw for invalid values of longitude',
  (i) => {
    const noteEvent = new NoteEvent();
    noteEvent.noteText = 'foo';
    noteEvent.hasLocation = 'true';
    noteEvent.latitude = '0';
    noteEvent.longitude = i;
    noteEvent.noteDate = '2021-07-30 11:12:13';

    expect(() => {
      EventMapper.mapEvent(noteEvent);
    }).toThrow();
  }
);

it.each(['2021-7-29', '2020-12-31', '2022-01-01 13:12:11', '123456'])(
  'should parse valid values for noteDate',
  (i) => {
    const noteEvent = new NoteEvent();
    noteEvent.noteText = 'foo';
    noteEvent.hasLocation = 'true';
    noteEvent.latitude = '0';
    noteEvent.longitude = '0';
    noteEvent.noteDate = i;

    EventMapper.mapEvent(noteEvent);
  }
);

it.each(['foo', '2021-30-30', '2021-7-29 25:01:01'])(
  'should throw for invlid values of noteDate',
  (i) => {
    const noteEvent = new NoteEvent();
    noteEvent.noteText = 'foo';
    noteEvent.hasLocation = 'true';
    noteEvent.latitude = '0';
    noteEvent.longitude = '0';
    noteEvent.noteDate = i;

    expect(() => {
      EventMapper.mapEvent(noteEvent);
    }).toThrow();
  }
);
