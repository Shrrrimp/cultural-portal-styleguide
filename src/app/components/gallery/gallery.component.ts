import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  images: any;
  conf: any;

  constructor() { }

  ngOnInit(): void {
    this.conf = {
      imageOffset: '0px',
      showDeleteControl: false,
      showImageTitle: false,
    };
  }

}
