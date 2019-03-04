import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPageViewComponent } from './search-page-view.component';

describe('SearchPageViewComponent', () => {
  let component: SearchPageViewComponent;
  let fixture: ComponentFixture<SearchPageViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPageViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
