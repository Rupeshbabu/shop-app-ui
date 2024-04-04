import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribePostComponent } from './subscribe-post.component';

describe('SubscribePostComponent', () => {
  let component: SubscribePostComponent;
  let fixture: ComponentFixture<SubscribePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscribePostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscribePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
