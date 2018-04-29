import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable()
export class ResetHomeService {

  @Output() change: EventEmitter<boolean> = new EventEmitter();
  constructor() { }

  resetHome() {
    this.change.emit(null);
  }
}
