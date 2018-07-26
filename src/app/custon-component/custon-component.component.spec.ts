import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustonComponentComponent } from './custon-component.component';

describe('CustonComponentComponent', () => {
  let component: CustonComponentComponent;
  let fixture: ComponentFixture<CustonComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustonComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustonComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
