import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '@app/dbz/interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input({ required: true })
  public characterList: Character[] = []

  @Output()
  public onDeleteCharacter: EventEmitter<string> = new EventEmitter();

  deleteCharacter(id: string) {
    this.onDeleteCharacter.emit(id);
  }
}
