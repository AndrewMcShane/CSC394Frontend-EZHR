import { Component, OnInit, ViewChild } from '@angular/core';
import { SearchResultComponent } from './search-result/search-result.component';
import { SearchResultPopupComponent } from './search-result-popup/search-result-popup.component';
import { NgForm, FormsModule } from '@angular/forms';
import { SearchResult } from '../../_models/SearchResult';
import { SearchService } from '../../search.service';
import { first } from 'rxjs/operators';

declare var tableau: any;

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
  private isDisplayingAnalytics = true; 

  private searchQuery:string;
  private results: SearchResult[];

  viz: any;
  constructor(
    private searchService: SearchService
  ) { }

  ngOnInit() {
    //this.displayTableau();
    
  }
  
  activateListingPopup(listing : SearchResult){
    // TODO: inject an object or an ID to show the job listing in the popup. 
    this.viewListingOverlay.initData(listing);
    this.viewListingOverlay.toggle();
  }

  setActiveSearchFilterTab(state:number){
    this.activeSearchFilterTab = state;
  }

  setActiveAnalyticTab(state:number){
    this.activeAnalyticTab = state;
  }

  searchForJobs(){
    if(this.searchQuery == ('' || undefined)){
      // TODO: broadcast message.
      console.log("invalid information input in search query");
    } else {
      this.searchService.getJobListings(this.searchQuery)
      .pipe(first()).subscribe(
        message => { 
          this.results = message.results;
          return;
        },
        error => {
          // TODO: broadcast message.
          this.searchQuery = "";
          console.log(error.error);
          return;
        }
      )
    }
  }

  filterSelection(){
    return;
  }

  displayTableau(){
    var placeholderDiv = document.getElementById('vizContainer');
    // Replace this url with the url of your Tableau dashboard
    var url = 'https://us-east-1.online.tableau.com/t/ezhr/views/ezhrBook1/JobCountbyjobtype?iframeSizedToWindow=true&:embed=y&:showAppBanner=false&:display_count=no&:showVizHome=no';
    var options = {
            hideTabs: true,
            width: "80%",
            height: "500px",
            onFirstInteractive: function() {
                  // The viz is now ready and can be safely used.
                  console.log("Run this code when the viz has finished     loading.");
            }
    };
    // Creating a viz object and embed it in the container div.
    this.viz = new tableau.Viz(placeholderDiv, url, options);
  }
}
