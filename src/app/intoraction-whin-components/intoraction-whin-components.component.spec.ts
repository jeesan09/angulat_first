import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntoractionWhinComponentsComponent } from './intoraction-whin-components.component';

describe('IntoractionWhinComponentsComponent', () => {
  let component: IntoractionWhinComponentsComponent;
  let fixture: ComponentFixture<IntoractionWhinComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntoractionWhinComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntoractionWhinComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
