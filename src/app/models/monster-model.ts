import { MonsterType } from '../utils/monster-utils';

export class Monster {
  type: MonsterType = MonsterType.ELECTRIC;
  name: string = 'Monster';
  hp: number = 60;

  figure: string = './assets/img/fig_pik.png';
  figureCaption: string = 'N°001 Monster';

  attackName: string = 'Standard Attack';
  attackStrength: number = 10;
  attackDescription: string = 'This is an attack description...';
}
