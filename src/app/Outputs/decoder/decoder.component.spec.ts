import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoderComponent } from './decoder.component';

describe('DecoderComponent', () => {
  let component: DecoderComponent;
  let fixture: ComponentFixture<DecoderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DecoderComponent]
    });
    fixture = TestBed.createComponent(DecoderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
