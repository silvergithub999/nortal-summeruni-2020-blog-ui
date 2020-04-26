import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogpostIntroComponent } from './blogpost-intro.component';

describe('BlogpostIntroComponent', () => {
  let component: BlogpostIntroComponent;
  let fixture: ComponentFixture<BlogpostIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogpostIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogpostIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
