import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
})
export class SearchBarComponent {
  @Input() search = 'Initial'; //  search "two-way binding" to the parent component
  @Output() searchChange = new EventEmitter<string>(); //  searchChamge "two-way binding" to the parent component

  updateSearch(value: string) {
    this.searchChange.emit(value);
  }

  @Output('submit') searchButtonClicked = new EventEmitter<void>();

  searchClick() {
    this.searchButtonClicked.emit();
  }
}
