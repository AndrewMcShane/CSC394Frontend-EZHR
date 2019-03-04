import { Component, OnInit, ViewChild } from '@angular/core';
import { SearchResultPopupComponent } from '../search-page/search-page-view/search-result-popup/search-result-popup.component';

@Component({
  selector: 'app-company-page',
  templateUrl: './company-page.component.html',
  styleUrls: ['./company-page.component.css']
})
export class CompanyPageComponent implements OnInit {

  @ViewChild('viewListingPopup') viewListingOverlay: SearchResultPopupComponent;


  constructor() { }

  ngOnInit() {
  }
  
  activateListingPopup(listing : number){
    // TODO: inject an object or an ID to show the job listing in the popup. 
    this.viewListingOverlay.toggle();
  }

}
