import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParichayComponent } from './parichay.component';

describe('ParichayComponent', () => {
  let component: ParichayComponent;
  let fixture: ComponentFixture<ParichayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParichayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParichayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
