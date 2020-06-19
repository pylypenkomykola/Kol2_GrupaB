import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MPForumComponent } from './mp-forum.component';

describe('MPForumComponent', () => {
  let component: MPForumComponent;
  let fixture: ComponentFixture<MPForumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MPForumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MPForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
