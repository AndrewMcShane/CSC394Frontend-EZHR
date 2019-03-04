import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultPopupComponent } from './search-result-popup.component';

describe('SearchResultPopupComponent', () => {
  let component: SearchResultPopupComponent;
  let fixture: ComponentFixture<SearchResultPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
