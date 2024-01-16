import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseWindInstrumentFormComponent } from './purchase-wind-instrument-form.component';

describe('PurchaseWindInstrumentFormComponent', () => {
  let component: PurchaseWindInstrumentFormComponent;
  let fixture: ComponentFixture<PurchaseWindInstrumentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseWindInstrumentFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseWindInstrumentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
