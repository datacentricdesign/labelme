import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogJWTComponent } from './dialog-jwt.component';

describe('DialogJWTComponent', () => {
  let component: DialogJWTComponent;
  let fixture: ComponentFixture<DialogJWTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogJWTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogJWTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
