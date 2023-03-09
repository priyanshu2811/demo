import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapperPostEventsComponent } from './wrapper-post-events.component';

describe('WrapperPostEventsComponent', () => {
  let component: WrapperPostEventsComponent;
  let fixture: ComponentFixture<WrapperPostEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrapperPostEventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WrapperPostEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
