import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseSoundBoxFormComponent } from './purchase-sound-box-form.component';

describe('PurchaseSoundBoxFormComponent', () => {
  let component: PurchaseSoundBoxFormComponent;
  let fixture: ComponentFixture<PurchaseSoundBoxFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseSoundBoxFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseSoundBoxFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
