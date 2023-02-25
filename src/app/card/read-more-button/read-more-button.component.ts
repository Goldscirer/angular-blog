import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-read-more-button',
  templateUrl: './read-more-button.component.html',
  styleUrls: ['./read-more-button.component.scss']
})
export class ReadMoreButtonComponent {
  @Input() postId: number | undefined;
  
  constructor(
    private router: Router,
    private route: ActivatedRoute) {
}

  onReadMore() {
    this.router.navigate([`/post/${this.postId}`], {relativeTo: this.route});
  }
}
