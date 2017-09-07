import { Component } from '@angular/core';

@Component({
  selector: 'photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.css']
})
export class PhotoDetailsComponent {
  title = 'non sunt voluptatem placeat consequuntur rem incidunt';
  itemName = 'Name Item';
  itemDescription = 'Item description';
  url = 'http://placehold.it/150/8e973b';
  thumbnailUrl = '';

}