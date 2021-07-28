export class Note {
  private readonly _noteText: string;
  private readonly _hasLocation: boolean;
  private readonly _latitude: number;
  private readonly _longitude: number;
  private readonly _noteDate: Date;

  public get noteText(): string {
    return this._noteText;
  }

  public get hasLocation(): boolean {
    return this._hasLocation;
  }

  public get latitude(): number {
    return this._latitude;
  }

  public get longitude(): number {
    return this._longitude;
  }

  public get noteDate(): Date {
    return this._noteDate;
  }

  public constructor(
    noteText: string,
    hasLocation: boolean,
    latitude: number,
    longitude: number,
    noteDate: Date
  ) {
    if (!noteText) {
      throw new ReferenceError('noteText is undefined');
    }

    this._noteText = noteText;
    this._hasLocation = hasLocation;
    this._latitude = latitude;
    this._longitude = longitude;
    this._noteDate = noteDate;
  }
}
