import { Component } from '@angular/core';

import { Monster } from './models/monster-model';
import { MonsterType } from './utils/monster-utils';

import { PlayingCardComponent } from './components/playing-card/playing-card.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PlayingCardComponent, SearchBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  monsters!: Monster[];
  selectedMonsterIndex = 0;

  constructor() {
    this.monsters = [];

    const monster1 = new Monster();
    monster1.type = MonsterType.FIRE;
    monster1.name = 'Pik';
    monster1.hp = 40;
    monster1.figure = './assets/img/fig_fire.png';
    monster1.figureCaption = 'N°001 Pik';
    monster1.attackName = 'Fire Attack';
    monster1.attackStrength = 25;
    monster1.attackDescription = 'This is a fire attack description...';
    this.monsters.push(monster1);

    const monster2 = new Monster();
    monster2.type = MonsterType.PLANT;
    monster2.name = 'Car';
    monster2.hp = 60;
    monster2.figure = './assets/img/fig_plant.png';
    monster2.figureCaption = 'N°002 Car';
    monster2.attackName = 'Plant Attack';
    monster2.attackStrength = 35;
    monster2.attackDescription = 'This is a plant attack description...';
    this.monsters.push(monster2);

    const monster3 = new Monster();
    monster3.type = MonsterType.WATER;
    monster3.name = 'Splash';
    monster3.hp = 45;
    monster3.figure = './assets/img/fig_water.png';
    monster3.figureCaption = 'N°003 Splash';
    monster3.attackName = 'Water Attack';
    monster3.attackStrength = 15;
    monster3.attackDescription = 'This is a water attack description...';
    this.monsters.push(monster3);
  }

  toggleMonster() {
    this.selectedMonsterIndex =
      (this.selectedMonsterIndex + 1) % this.monsters.length;
  }
}
