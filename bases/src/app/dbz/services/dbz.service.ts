import { Injectable } from '@angular/core';
import { Character, NewCharacter } from '@app/dbz/interfaces/character.interface';
import { v4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [
    {
      id: v4(),
      name: 'Goku',
      power: 9500
    },
    {
      id: v4(),
      name: 'Krillin',
      power: 1000
    },
    {
      id: v4(),
      name: 'Vegeta',
      power: 9000
    }
  ]

  get charactersList(): Character[] {
    return this.characters;
  }

  addCharacter(character: NewCharacter) {

    const newCharacter: Character = {
      id: v4(),
      ...character
    }

    this.characters.push(newCharacter);
  }

  deleteCharacter(id: string) {
    const index = this.characters.findIndex(character => character.id === id);

    this.characters.splice(index, 1);
  }


}
