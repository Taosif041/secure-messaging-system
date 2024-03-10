import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Showg1Component } from './showg1.component';

describe('Showg1Component', () => {
  let component: Showg1Component;
  let fixture: ComponentFixture<Showg1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Showg1Component]
    });
    fixture = TestBed.createComponent(Showg1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
