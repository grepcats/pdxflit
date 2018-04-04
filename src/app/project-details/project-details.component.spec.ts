import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { projectDetailsComponent } from './project-details.component';

describe('projectDetailsComponent', () => {
  let component: projectDetailsComponent;
  let fixture: ComponentFixture<projectDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ projectDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(projectDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
