import { Component, OnInit, ViewChild } from '@angular/core';
import { SearchResultComponent } from './search-result/search-result.component';
import { SearchResultPopupComponent } from './search-result-popup/search-result-popup.component';
import { NgForm, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-page-view',
  templateUrl: './search-page-view.component.html',
  styleUrls: ['./search-page-view.component.css']
})
export class SearchPageViewComponent implements OnInit {

  @ViewChild('viewListingPopup') viewListingOverlay: SearchResultPopupComponent;

  private activeSearchFilterTab = 0;
  private activeAnalyticTab = 0;
  private filterModel: any = {};
  private isDisplayingFilters = false;
  private isDisplayingAnalytics = false; 
  constructor() { }

  ngOnInit() {
  }
  
  activateListingPopup(listing : number){
    // TODO: inject an object or an ID to show the job listing in the popup. 
    this.viewListingOverlay.toggle();
  }

  setActiveSearchFilterTab(state:number){
    this.activeSearchFilterTab = state;
  }

  setActiveAnalyticTab(state:number){
    this.activeAnalyticTab = state;
  }

  filterSelection(){
    return;
    
  }
}
