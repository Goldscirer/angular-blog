import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() header: string = '';
  @Input() description: string = '';
  @Input() imageURL: string = '';
  @Input() postId: number | undefined;

  ngOnInit() {
    this.imageURL = 'http://localhost:1337' + this.imageURL;
    console.log(this.imageURL);
  }

}
