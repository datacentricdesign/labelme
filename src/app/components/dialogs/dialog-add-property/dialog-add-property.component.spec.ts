import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddPropertyComponent } from './dialog-add-property.component';

describe('DialogAddPropertyComponent', () => {
  let component: DialogAddPropertyComponent;
  let fixture: ComponentFixture<DialogAddPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogAddPropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
