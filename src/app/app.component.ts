import { CommonModule } from '@angular/common';
import { Component, signal, computed, effect, model } from '@angular/core';

import { Monster } from './models/monster-model';
import { MonsterType } from './utils/monster-utils';

import { PlayingCardComponent } from './components/playing-card/playing-card.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PlayingCardComponent, SearchBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  monsters!: Monster[];

  search = model('');
  filteredMonsters = computed(() => {
    return this.monsters.filter((monster) =>
      monster.name.includes(this.search())
    );
  });

  selectedMonsterIndex = signal(1);
  selectedMonster = computed(() => {
    return this.monsters[this.selectedMonsterIndex()];
  });

  constructor() {
    effect(() => {
      console.log(this.selectedMonster());
    });

    this.monsters = [];

    const monster1 = new Monster();
    monster1.type = MonsterType.FIRE;
    monster1.name = 'Hot';
    monster1.hp = 40;
    monster1.figure = './assets/img/fig_fire.png';
    monster1.figureCaption = 'N°001 Hot';
    monster1.attackName = 'Fire Attack';
    monster1.attackStrength = 25;
    monster1.attackDescription = 'This is a fire attack description...';
    this.monsters.push(monster1);

    const monster2 = new Monster();
    monster2.type = MonsterType.PLANT;
    monster2.name = 'Bulb';
    monster2.hp = 60;
    monster2.figure = './assets/img/fig_plant.png';
    monster2.figureCaption = 'N°002 Bulb';
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

    const monster4 = new Monster();
    monster4.type = MonsterType.ELECTRIC;
    monster4.name = 'Flash';
    monster4.hp = 40;
    monster4.figure = './assets/img/fig_electric.png';
    monster4.figureCaption = 'N°003 Flash';
    monster4.attackName = 'Electric Attack';
    monster4.attackStrength = 55;
    monster4.attackDescription = 'This is a electric attack description...';
    this.monsters.push(monster4);
  }

  toggleMonster() {
    this.selectedMonsterIndex.set(
      (this.selectedMonsterIndex() + 1) % this.monsters.length
    );
  }
}
