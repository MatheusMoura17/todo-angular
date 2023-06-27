import { Component, EventEmitter, Input, Output } from '@angular/core';
import Card from 'src/app/models/Card';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  constructor() { }
  @Input() card = new Card();
  @Output() onCardRemove = new EventEmitter<Card>();
  @Output() onCardChange = new EventEmitter<Card>();

  onRemove() {
    this.onCardRemove.emit(this.card);
  }

  onTitleChanged(event: any) {
    const updated = new Card();
    updated.id = this.card.id;
    updated.title = event.target.innerText;
    updated.content = this.card.content;
    this.onCardChange.emit(updated);
  }

  onContentChanged(event: any) {
    const updated = new Card();
    updated.id = this.card.id;
    updated.title = this.card.title;
    updated.content = event.target.innerText;
    this.onCardChange.emit(updated);
  }
}
