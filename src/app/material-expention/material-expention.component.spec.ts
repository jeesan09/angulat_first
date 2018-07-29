import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialExpentionComponent } from './material-expention.component';

describe('MaterialExpentionComponent', () => {
  let component: MaterialExpentionComponent;
  let fixture: ComponentFixture<MaterialExpentionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialExpentionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialExpentionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
