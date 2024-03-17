import { Component } from '@angular/core';
import { Character } from '@app/dbz/interfaces/character.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  public characters: Character[] = [
    {
      name: 'Goku',
      power: 9500
    },
    {
      name: 'Krillin',
      power: 1000
    },
    {
      name: 'Vegeta',
      power: 9000
    }
  ]

  onNewCharacter(character: Character) {
    this.characters = [...this.characters, character];
  }
}
