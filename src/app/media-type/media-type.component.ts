import { Component, OnInit } from '@angular/core';
import { MediaType } from './media-type';
import { MediaTypeService } from './media-type.service';

@Component({
  selector: 'app-media-type',
  templateUrl: './media-type.component.html',
  styleUrls: ['./media-type.component.scss']
})

export class MediaTypeComponent implements OnInit {
  mediaTypes: MediaType[];
  title = 'Media Types';
  selectedMediaType: MediaType;

  constructor(private mediaTypeService: MediaTypeService) { }

  ngOnInit() {
    this.getMediaTypes();
  }

  getMediaTypes(): void {
    this.mediaTypeService.getMediaTypes()
    .subscribe(mediaTypes => this.mediaTypes = mediaTypes);
  }

  onSelect(mediaType: MediaType): void {
    this.selectedMediaType = mediaType;
  }

}
