import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { SearchResult } from '../../../_models/SearchResult';
import { DescriptionParserService } from '../../../description-parser.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  @Output() viewListingEvent = new EventEmitter<SearchResult>();

  @Input() resultData:SearchResult;
  

  constructor(private descriptionParser:DescriptionParserService) { }

  ngOnInit() {
    this.initListing();
  }

  viewListing(){
    if(!this.viewListingEvent) return;
    this.viewListingEvent.next(this.resultData);
  }

  initListing(){
    if(this.resultData != undefined){
      this.resultData.keywords = this.descriptionParser.parseDescription(this.resultData.description);
    }
  }

  routeToCompany(){
    return;
  }

}
