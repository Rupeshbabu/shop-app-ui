import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorLogoPostComponent } from './vendor-logo-post.component';

describe('VendorLogoPostComponent', () => {
  let component: VendorLogoPostComponent;
  let fixture: ComponentFixture<VendorLogoPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorLogoPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorLogoPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
