import { Component, OnInit } from '@angular/core';
import { LabelsComponent } from '../components/labels/labels.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ts_0 = new Date().getTime() - 400000;
  ts_1 = new Date().getTime();

  // Images Property component variables
  // tslint:disable-next-line: member-ordering
  data_images_property = {
    id: 'my-images-property',
    name: 'images',
    type: 'IMAGES',
    class: [],
    values: [
      [this.ts_0, 'https://placeimg.com/640/480/animals', 'animal'],
      [this.ts_0 + 2000, 'https://placeimg.com/640/480/arch', 'architecture'],
      [this.ts_0 + 4000, 'https://placeimg.com/640/480/nature', 'nature'],
      [this.ts_0 + 6000, 'https://placeimg.com/640/480/people', 'people'],
      [this.ts_1, 'https://placeimg.com/640/480/tech', 'technology'],
      [this.ts_1 + 2000, 'https://placeimg.com/640/480/animals', 'animal_2'],
      [
        this.ts_1 + 4000,
        'https://placeimg.com/640/480/arch',
        ['architecture_2'],
      ],
      [this.ts_1 + 6000, 'https://placeimg.com/640/480/nature', ['nature_2']],
      [this.ts_1 + 8000, 'https://placeimg.com/640/480/people', ['people_2']],
    ],
    dimensions: [
      {
        name: 'label',
        description: '',
        unit: '',
      },
    ],
    entity_id: 'my-thing',
  };

  ngOnInit(): void {}
}
