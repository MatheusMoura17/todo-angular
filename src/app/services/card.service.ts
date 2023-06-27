import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from "uuid";
import Card from '../models/Card';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  create(): Card {
    const card = new Card()
    card.id = uuidv4();
    card.title = 'Cartão sem titulo';
    card.content = 'Insira o conteúdo do cartão aqui';
    localStorage.setItem(card.id, JSON.stringify(card));
    return card;
  }

  readAll(): Card[] {
    const cards: Card[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const id = localStorage.key(i)!;
      const cardRaw = localStorage.getItem(id)!;
      const cardContent = JSON.parse(cardRaw);
      const card = Object.assign(new Card(), cardContent);
      cards.push(card);
    }
    return cards;
  }

  remove(id: string) {
    localStorage.removeItem(id);
  }

  update(card: Card) {
    localStorage.setItem(card.id, JSON.stringify(card));
    return card;
  }
}
