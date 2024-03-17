import { Component, EventEmitter, Output } from '@angular/core';
import { NewCharacter } from '@app/dbz/interfaces/character.interface';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<NewCharacter> = new EventEmitter();

  public character: NewCharacter = {
    name: '',
    power: 0
  }

  emitCharacter() {
    this.onNewCharacter.emit(this.character);

    this.character = {
      name: '',
      power: 0
    }
  }
}
