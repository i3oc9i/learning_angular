import { CommonModule } from '@angular/common';
import {
  Component,
  signal,
  computed,
  effect,
  model,
  inject,
} from '@angular/core';

import { Monster } from './models/monster-model';
import { MonsterService } from './services/monster/monster.service';

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
  monsterService = inject(MonsterService);

  monsters = signal<Monster[]>([]);

  search = model('');
  filteredMonsters = computed(() => {
    return this.monsters().filter((monster) =>
      monster.name.includes(this.search())
    );
  });

  selectedMonsterIndex = signal(1);
  selectedMonster = computed(() => {
    return this.monsters()[this.selectedMonsterIndex()];
  });

  constructor() {
    effect(() => {
      console.log(this.selectedMonster());
    });

    this.monsters.set(this.monsterService.getAll());
  }

  addGenericMonster() {
    const monster = new Monster();
    this.monsterService.add(monster);
    this.monsters.set(this.monsterService.getAll());
  }

  toggleMonster() {
    this.selectedMonsterIndex.set(
      (this.selectedMonsterIndex() + 1) % this.monsters().length
    );
  }
}
