import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasePianoKeyboardFormComponent } from './purchase-piano-keyboard-form.component';

describe('PurchasePianoKeyboardFormComponent', () => {
  let component: PurchasePianoKeyboardFormComponent;
  let fixture: ComponentFixture<PurchasePianoKeyboardFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchasePianoKeyboardFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchasePianoKeyboardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
