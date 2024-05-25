import { MonsterType } from '../utils/monster-utils';

export class Monster {
  id: number = 0;

  type: MonsterType = MonsterType.ELECTRIC;

  name: string = 'Monster';
  hp: number = 60;

  figure: string = './assets/img/fig_pik.png';
  figureCaption: string = 'N°000 Monster';

  attackName: string = 'Standard Attack';
  attackStrength: number = 10;
  attackDescription: string = 'This is a standard attack description...';

  copy(): Monster {
    return Object.assign(new Monster(), this);
  }
}
