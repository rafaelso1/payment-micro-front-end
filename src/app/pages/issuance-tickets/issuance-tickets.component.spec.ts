import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuanceTicketsComponent } from './issuance-tickets.component';

describe('IssuanceTicketsComponent', () => {
  let component: IssuanceTicketsComponent;
  let fixture: ComponentFixture<IssuanceTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssuanceTicketsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IssuanceTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
