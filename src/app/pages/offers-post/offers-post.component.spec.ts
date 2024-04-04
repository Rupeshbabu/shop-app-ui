import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersPostComponent } from './offers-post.component';

describe('OffersPostComponent', () => {
  let component: OffersPostComponent;
  let fixture: ComponentFixture<OffersPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffersPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffersPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
