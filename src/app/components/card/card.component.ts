import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() title: string = "Card Title";
  @Input() content: string = "Card Content";

  onRemove() {
    console.log("CardComponent.onRemove()");
  }

  onTitleChanged(event: any) {
    this.title = event.target.innerHTML;
  }

  onContentChanged(event: any) {
    this.content = event.target.innerHTML;
  }
}
