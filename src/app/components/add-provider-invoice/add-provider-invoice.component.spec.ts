import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProviderInvoiceComponent } from './add-provider-invoice.component';

describe('AddProviderInvoiceComponent', () => {
  let component: AddProviderInvoiceComponent;
  let fixture: ComponentFixture<AddProviderInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProviderInvoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProviderInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
