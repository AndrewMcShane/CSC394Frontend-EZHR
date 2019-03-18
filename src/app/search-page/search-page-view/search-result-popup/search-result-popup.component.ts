import { Component, OnInit } from '@angular/core';
import { SearchResult } from '../../../_models/SearchResult';

@Component({
  selector: 'app-search-result-popup',
  templateUrl: './search-result-popup.component.html',
  styleUrls: ['./search-result-popup.component.css']
})
export class SearchResultPopupComponent implements OnInit {

  private isDisplaying: boolean;
  private jobData: SearchResult;
  private keywords: Array<string>;

  outToLink = "http://www.google.com";

  
  constructor() { 
    this.isDisplaying = false;
  }

  ngOnInit() {
  }

  initData(listingData: SearchResult){
    this.jobData = listingData;
    if(listingData.keywords){
      this.keywords = listingData.keywords;
    }
    this.outToLink = listingData.job_url;
  }

  toggle(){
    this.isDisplaying = !this.isDisplaying;
  }

  goToApplyLink(){
    (window as any).open(this.outToLink, "_blank");
  }

  goToCompanyPage(){
    // TODO:
    return;
  }

}
