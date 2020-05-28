import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddPemComponent } from './dialog-add-pem.component';

describe('DialogAddPemComponent', () => {
  let component: DialogAddPemComponent;
  let fixture: ComponentFixture<DialogAddPemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogAddPemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddPemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
