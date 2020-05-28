import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  Inject,
  PLATFORM_ID,
  OnChanges,
} from '@angular/core';
import { Gallery, GalleryRef } from '@ngx-gallery/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Component({
  selector: 'app-label-picture',
  templateUrl: './label-picture.component.html',
  styleUrls: ['./label-picture.component.css'],
})
export class LabelPictureComponent implements OnInit, OnChanges {
  @Input() property_values: any[];
  @Input() checked: boolean;
  @Input() property_dimensions: any[];

  selectedLabel: object = {};

  galleryId = 'imageGallery';
  galleryRef: GalleryRef = this.gallery.ref(this.galleryId);
  data: any[];
  img_index: number;

  date: Date;
  showData = false;
  ref = true;

  constructor(
    public gallery: Gallery,
    @Inject(PLATFORM_ID) private platformId: object // <-- if browser
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      // <-- if browser
      this.data = this.property_values;
      this.data.map((item) =>
        this.galleryRef.addImage({
          src: item[1],
          thumb: item[1],
        })
      );

      const gIndexObservable = this.galleryRef.indexChanged;
      gIndexObservable.subscribe((data) => {
        this.img_index = data.currIndex;
      });
    }
    if (isPlatformServer(this.platformId)) {
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.property_values || this.galleryRef.indexChanged) {
      this.data = changes.property_values.currentValue;
      if (this.checked) {
        this.show_realtime(this.data);
      } else {
        this.show_manual(this.data);
      }
    }
  }

  handleChange(e) {
    this.galleryRef.set(e.value);
    console.log('something change');
  }

  show_realtime(values: any[]) {
    if (values.length > 0) {
      this.showData = true;
    } else {
      this.showData = false;
    }
  }

  show_manual(values: any[]) {
    if (values.length > 0) {
      this.showData = true;
    } else {
      this.showData = false;
    }
  }

  retrieveLabel($event) {
    this.selectedLabel = $event;
    // this.galleryRef.addImage({ title: this.selectedLabel['name'] });
    console.log(this.img_index);
    console.log(this.data[this.img_index][2]);
    this.property_values[this.img_index][2] = this.selectedLabel['name'];
    console.log(this.property_values[this.img_index][2]);
    // this.data.map((item) => item[2].push(this.selectedLabel['name']));
    console.log('Selected Label: ' + this.selectedLabel['name']);
  }
}
