import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-result-popup',
  templateUrl: './search-result-popup.component.html',
  styleUrls: ['./search-result-popup.component.css']
})
export class SearchResultPopupComponent implements OnInit {

  private isDisplaying: boolean;

  outToLink = "http://www.google.com";

  
  constructor() { 
    this.isDisplaying = false;
  }

  ngOnInit() {
  }

  toggle(){
    this.isDisplaying = !this.isDisplaying;
  }

  goToApplyLink(){
    (window as any).open(this.outToLink, "_blank");
  }

}
