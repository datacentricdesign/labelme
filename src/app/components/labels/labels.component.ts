import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-labels',
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.css'],
})
export class LabelsComponent implements OnInit {
  data_class_property = {
    id: 'my-labels-property',
    name: 'class',
    type: 'CLASSS',
    class: [],
    values: [
      { id: 0, name: 'seating' },
      { id: 1, name: 'standing' },
      { id: 2, name: 'moving forward' },
      { id: 3, name: 'moving back' },
      { id: 4, name: 'moving left' },
      { id: 5, name: 'moving right' },
      { id: 6, name: 'turn left' },
      { id: 7, name: 'turn right' },
      { id: 8, name: 'running' },
      { id: 9, name: 'rotating' },
      { id: 10, name: 'inclining back' },
      { id: 11, name: 'inclining right' },
      { id: 12, name: 'inclining left' },
      { id: 13, name: 'inclining front' },
      { id: 14, name: 'getting up' },
    ],
    dimensions: [
      {
        name: 'class',
        description: 'Class Labels for Machine Learning Training',
        unit: '',
      },
    ],
    entity_id: 'my-thing',
  };

  form: FormGroup;
  labels = [];
  newLabel: string;
  @Output() labelClickEvent = new EventEmitter<object>();

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      label: [''],
      id: [],
    });

    this.labels = this.data_class_property.values;
  }

  ngOnInit(): void {}

  addLabel() {
    console.log(this.newLabel);
    this.labels.push({ id: 15, name: this.newLabel });
    this.newLabel = '';
  }

  onLabelClicked(classLabel: object) {
    console.log(classLabel);
    this.labelClickEvent.emit(classLabel);
  }
}
