import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HTTPcomponentComponent } from './httpcomponent.component';

describe('HTTPcomponentComponent', () => {
  let component: HTTPcomponentComponent;
  let fixture: ComponentFixture<HTTPcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HTTPcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HTTPcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
