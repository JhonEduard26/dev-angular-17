import { Component, inject } from '@angular/core';
import { Character, NewCharacter } from '@app/dbz/interfaces/character.interface';
import { DbzService } from '@app/dbz/services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  private dbzService = inject(DbzService);
  characters: Character[] = []

  ngOnInit() {
    this.getCharacters();
  }

  private getCharacters() {
    this.characters = this.dbzService.charactersList;
  }

  addCharacter(character: NewCharacter) {
    this.dbzService.addCharacter(character);
  }

  deleteCharacterById(id: string) {
    this.dbzService.deleteCharacter(id);
  }
}
