import { Component, OnInit, ViewChild } from '@angular/core';
import { SearchResultPopupComponent } from '../search-page/search-page-view/search-result-popup/search-result-popup.component';
import { SearchResult } from '../_models/SearchResult';

@Component({
  selector: 'app-company-page',
  templateUrl: './company-page.component.html',
  styleUrls: ['./company-page.component.css']
})
export class CompanyPageComponent implements OnInit {

  @ViewChild('viewListingPopup') viewListingOverlay: SearchResultPopupComponent;

  demoListing: SearchResult;

  constructor() { 
    this.demoListing = new SearchResult();
    this.demoListing.job_company="Google";
    this.demoListing.job_location="Chicago, IL"
    this.demoListing.job_summary="Software engineer wanted for the chicago google campus to work on our AI algorithms";
    this.demoListing.job_title="Intro Software Developer";
    this.demoListing.job_url="http://google.com";
  }

  ngOnInit() {
    
  }
  
  activateListingPopup(listing : number){
    // TODO: inject an object or an ID to show the job listing in the popup. 
    this.viewListingOverlay.toggle();
  }

}
