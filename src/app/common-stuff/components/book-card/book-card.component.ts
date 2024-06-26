import { Component, Input } from '@angular/core';
import { Book } from 'src/app/interfaces/book';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.css'
})
export class BookCardComponent {
  @Input() book: Book | undefined;
}
