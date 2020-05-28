import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddThingComponent } from './dialog-add-thing.component';

describe('DialogAddThingComponent', () => {
  let component: DialogAddThingComponent;
  let fixture: ComponentFixture<DialogAddThingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogAddThingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddThingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
