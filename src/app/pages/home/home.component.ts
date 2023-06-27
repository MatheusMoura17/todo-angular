import { Component, Input } from '@angular/core';
import Card from 'src/app/models/Card';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Input() cards: Card[] = [];

  constructor(private cardService: CardService) {
    this.cards = cardService.readAll();
  }

  createCard() {
    const card = this.cardService.create();
    this.cards.push(card);
  }

  removeCard(card: Card) {
    this.cardService.remove(card.id);
    const index = this.cards.indexOf(card);
    this.cards.splice(index, 1);
  }

  updateCard(card: Card) {
    this.cardService.update(card);
  }
}
