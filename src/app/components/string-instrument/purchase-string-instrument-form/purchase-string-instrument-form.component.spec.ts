import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseStringInstrumentFormComponent } from './purchase-string-instrument-form.component';

describe('PurchaseStringInstrumentFormComponent', () => {
  let component: PurchaseStringInstrumentFormComponent;
  let fixture: ComponentFixture<PurchaseStringInstrumentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseStringInstrumentFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseStringInstrumentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
