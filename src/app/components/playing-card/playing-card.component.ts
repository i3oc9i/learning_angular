import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Monster } from '../../models//monster-model';

@Component({
  selector: 'app-playing-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './playing-card.component.html',
  styleUrl: './playing-card.component.css',
})
export class PlayingCardComponent {
  @Input({
    required: true,
    alias: 'my.monster',
    transform: (value: Monster) => {
      value.hp = Math.round(value.hp / 2);
      return value;
    },
  })
  monster: Monster = new Monster();
}
