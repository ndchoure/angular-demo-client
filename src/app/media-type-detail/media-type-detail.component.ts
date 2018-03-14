import { Component, OnInit, Input } from '@angular/core';
import { MediaType } from '../media-type/media-type';

@Component({
  selector: 'app-media-type-detail',
  templateUrl: './media-type-detail.component.html',
  styleUrls: ['./media-type-detail.component.scss']
})

export class MediaTypeDetailComponent implements OnInit {
  @Input() mediaType: MediaType;

  constructor() { }

  ngOnInit() {
  }

}
