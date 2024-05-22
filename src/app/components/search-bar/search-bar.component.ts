import { Component, model, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
})
export class SearchBarComponent {
  search = model('Pikaciu'); //  search "two-way binding" to the parent component

  searchButtonClicked = output<void>({ alias: 'submit' });

  searchClick() {
    this.searchButtonClicked.emit();
  }
}
