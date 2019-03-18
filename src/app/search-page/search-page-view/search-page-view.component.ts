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

  private searchQuery:any = {};
  private results: Array<SearchResult>;

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
    if(this.searchQuery.query == ('' || undefined)){
      // TODO: broadcast message.
      console.log(this.searchQuery.query);
      console.log("invalid information input in search query");
    } else {
      console.log("Sending Query: '" + this.searchQuery.query + "'");
      this.searchService.getJobListings(this.searchQuery.query)
      .pipe(first()).subscribe(
        message => { 
           
          this.results = new Array<SearchResult>();

          let res = JSON.parse(message);

          for(let rawResult in res){
            this.results.push(this.parseResult(res[rawResult]));
          }
          
        },
        error => {
          // TODO: broadcast message.
          
          console.log(error.error);
          return;
        }
      )
    }
  }

  filterSelection(){
   if(this.filterModel.location == ('' || undefined)){
     return;
   }

   let filters = this.filterModel.location.split(",");
   for(let filter in filters){
    filters[filter] = filters[filter].trim();
    this.results = this.results.filter(element => 
      {return element.job_summary.toLowerCase().includes(filters[filter].toLowerCase())}
    );
  }
   
   
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


  private parseResult(raw:string){
    // Parse out the strings, make it nice and neat, return a SearchResult Object or append it to the results array
    let res = new SearchResult();
    // removes the superflorus bit from the link at the end.
    raw = raw.substring(1, raw.length-2);
    
    let fields = raw.split("), 'job");
    
          for(let field in fields){
            // [field: fieldData]
            let fieldSplit:string[] = fields[field].split("':");
            // compare the field names and then assign them if they match.
            //console.log(fields[field]);
            let fieldData = fieldSplit[1].substring(13, fieldSplit[1].length-1);
            if(field == '0'){
              res.job_title = fieldData;
            } else if(field == '1'){
              res.job_company = fieldData;
            } else if(field =='2'){
              res.job_location = fieldData;
            } else if(field =='3'){
              res.job_summary = fieldData;
            } else if(field=='4'){
              res.job_url = fieldData;
            }
            
          }

    return res;
  }
}
