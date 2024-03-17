import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroes: string[] = [
    'Spiderman',
    'Ironman',
    'Hulk',
    'Thor',
    'Capitan America',
  ]
  public deletedHero?: string

  deleteLastHero(): void {
    this.deletedHero = this.heroes.pop();
  }

  resetHeroes(): void {
    this.heroes = [
      'Spiderman',
      'Ironman',
      'Hulk',
      'Thor',
      'Capitan America',
    ];
  }
}
