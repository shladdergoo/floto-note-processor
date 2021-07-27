export class Note {
  private readonly _noteText: string;

  public get noteText(): string {
    return this._noteText;
  }

  public constructor(noteText: string) {
    if (!noteText) {
      throw new ReferenceError('noteText is undefined');
    }

    this._noteText = noteText;
  }
}
