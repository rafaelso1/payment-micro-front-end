import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondWayTicketsComponent } from './second-way-tickets.component';

describe('SecondWayTicketsComponent', () => {
  let component: SecondWayTicketsComponent;
  let fixture: ComponentFixture<SecondWayTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondWayTicketsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondWayTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
