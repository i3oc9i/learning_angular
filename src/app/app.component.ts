import { Component } from '@angular/core';
import { Monster } from './models/monster-model';
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
  monster1!: Monster;
  monster2!: Monster;

  count: number = 0;

  constructor() {
    this.monster1 = new Monster();
    this.monster1.name = 'Pik';
    this.monster1.hp = 40;
    this.monster1.figureCaption = 'N°002 Pik';

    this.monster2 = new Monster();
    this.monster2.name = 'Puk';
    this.monster2.hp = 45;
    this.monster2.figureCaption = 'N°002 Puk';
  }

  increaseCount() {
    this.count++;
  }
}
