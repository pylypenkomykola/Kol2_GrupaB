import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MPForumDetailsComponent } from './mp-forum-details.component';

describe('MPForumDetailsComponent', () => {
  let component: MPForumDetailsComponent;
  let fixture: ComponentFixture<MPForumDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MPForumDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MPForumDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
