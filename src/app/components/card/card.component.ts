import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() id: string = "Card Id";
  @Input() title: string = "Card Title";
  @Input() content: string = "Card Content";

  onRemove() {
    console.log(this.id);
  }

  onTitleChanged(event: any) {
    this.title = event.target.innerText;
  }

  onContentChanged(event: any) {
    this.content = event.target.innerText;
  }
}
