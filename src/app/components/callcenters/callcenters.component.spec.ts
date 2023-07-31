import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallcentersComponent } from './callcenters.component';

describe('CallcentersComponent', () => {
  let component: CallcentersComponent;
  let fixture: ComponentFixture<CallcentersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CallcentersComponent]
    });
    fixture = TestBed.createComponent(CallcentersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
