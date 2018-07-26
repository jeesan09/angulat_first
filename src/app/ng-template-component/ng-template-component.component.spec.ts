import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NGTemplateComponentComponent } from './ng-template-component.component';

describe('NGTemplateComponentComponent', () => {
  let component: NGTemplateComponentComponent;
  let fixture: ComponentFixture<NGTemplateComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NGTemplateComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NGTemplateComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
