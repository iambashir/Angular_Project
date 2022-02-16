import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pages3Component } from './pages3.component';

describe('Pages3Component', () => {
  let component: Pages3Component;
  let fixture: ComponentFixture<Pages3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pages3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pages3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
