import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MPForumItemComponent } from './mp-forum-item.component';

describe('MPForumItemComponent', () => {
  let component: MPForumItemComponent;
  let fixture: ComponentFixture<MPForumItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MPForumItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MPForumItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
