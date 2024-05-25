import { Injectable } from '@angular/core';

import { Monster } from '../../models/monster-model';
import { MonsterType } from '../../utils/monster-utils';

@Injectable({
  providedIn: 'root',
})
export class MonsterService {
  private monsters: Monster[] = [];
  private currentId: number = 1;

  constructor() {
    this.load();
  }

  private save() {
    localStorage.setItem('monsters', JSON.stringify(this.monsters));
  }

  private load() {
    const monstersData = localStorage.getItem('monsters');
    if (monstersData) {
      this.monsters = JSON.parse(monstersData).map((monsterJson: any) =>
        Object.assign(new Monster(), monsterJson)
      );
      this.currentId =
        Math.max(...this.monsters.map((monster) => monster.id)) + 1;
    } else {
      this.init();
      this.save();
    }
  }

  private figureCaption(id: number, name: string): string {
    return 'N° ' + id.toString().padStart(3, '0') + ' ' + name;
  }

  private init() {
    this.monsters = [];

    let monster;

    monster = new Monster();
    monster.id = this.currentId++;
    monster.type = MonsterType.FIRE;
    monster.name = 'Hot';
    monster.hp = 40;
    monster.figure = './assets/img/fig_fire.png';
    monster.figureCaption = this.figureCaption(monster.id, monster.name);
    monster.attackName = 'Fire Attack';
    monster.attackStrength = 25;
    monster.attackDescription = 'This is a fire attack description...';
    this.monsters.push(monster);

    monster = new Monster();
    monster.id = this.currentId++;
    monster.type = MonsterType.PLANT;
    monster.name = 'Bulb';
    monster.hp = 60;
    monster.figure = './assets/img/fig_plant.png';
    monster.figureCaption = this.figureCaption(monster.id, monster.name);
    monster.attackName = 'Plant Attack';
    monster.attackStrength = 35;
    monster.attackDescription = 'This is a plant attack description...';
    this.monsters.push(monster);

    monster = new Monster();
    monster.id = this.currentId++;
    monster.type = MonsterType.WATER;
    monster.name = 'Splash';
    monster.hp = 45;
    monster.figure = './assets/img/fig_water.png';
    monster.figureCaption = this.figureCaption(monster.id, monster.name);
    monster.attackName = 'Water Attack';
    monster.attackStrength = 15;
    monster.attackDescription = 'This is a water attack description...';
    this.monsters.push(monster);

    monster = new Monster();
    monster.id = this.currentId++;
    monster.type = MonsterType.ELECTRIC;
    monster.name = 'Flash';
    monster.hp = 40;
    monster.figure = './assets/img/fig_electric.png';
    monster.figureCaption = this.figureCaption(monster.id, monster.name);
    monster.attackName = 'Electric Attack';
    monster.attackStrength = 55;
    monster.attackDescription = 'This is a electric attack description...';
    this.monsters.push(monster);
  }

  getAll(): Monster[] {
    return this.monsters.map((monster) => monster.copy());
  }

  get(id: number): Monster | undefined {
    const monster = this.monsters.find((monster) => monster.id === id);
    return monster ? monster.copy() : undefined;
  }

  add(monster: Monster): Monster {
    const monsterCopy = monster.copy();

    monsterCopy.id = this.currentId++;
    monsterCopy.figureCaption = this.figureCaption(
      monsterCopy.id,
      monsterCopy.name
    );
    this.monsters.push(monsterCopy.copy());

    return monsterCopy;
  }

  update(monster: Monster): Monster {
    const monsterCopy = monster.copy();

    const monsterIndex = this.monsters.findIndex(
      (monster) => monster.id === monsterCopy.id
    );
    if (monsterIndex !== -1) {
      this.monsters[monsterIndex] = monsterCopy.copy();
    }

    return monsterCopy;
  }

  delete(id: number) {
    const monsterIndex = this.monsters.findIndex(
      (monster) => monster.id === id
    );
    if (monsterIndex !== -1) {
      this.monsters.splice(monsterIndex, 1);
    }
  }
}
