import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogEntryFooterFlushComponent } from './blog-entry-footer-flush.component';

describe('BlogEntryFooterFlushComponent', () => {
  let component: BlogEntryFooterFlushComponent;
  let fixture: ComponentFixture<BlogEntryFooterFlushComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogEntryFooterFlushComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogEntryFooterFlushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
