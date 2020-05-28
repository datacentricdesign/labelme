import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelPictureComponent } from './label-picture.component';

describe('LabelPictureComponent', () => {
  let component: LabelPictureComponent;
  let fixture: ComponentFixture<LabelPictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelPictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
