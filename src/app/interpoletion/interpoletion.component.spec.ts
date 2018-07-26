import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpoletionComponent } from './interpoletion.component';

describe('InterpoletionComponent', () => {
  let component: InterpoletionComponent;
  let fixture: ComponentFixture<InterpoletionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterpoletionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterpoletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
