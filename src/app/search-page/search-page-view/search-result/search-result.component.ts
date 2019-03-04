import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  @Output() viewListingEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  viewListing(){
    if(!this.viewListingEvent) return;
    this.viewListingEvent.next(0);
  }

}
