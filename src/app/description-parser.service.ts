import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DescriptionParserService {

  private keywordListSingle: string[] = [
    "c#", "c++" , "java", "python", "ruby", "scala", "perl", "rust", "php", "html", "sql", "mysql", "erlang", "haskell", "fortran", "f#", 
    "communication", "reporting", "flexible", "leadership", "excel ", "adobe", "angular", "lua", "xml", "json", "frontend", "backend", "server", "angularjs", "reactjs", "phd",
    "numpy"
  ];
  private keywordListPhrase: string[] = [
    "data analysis", "communication skills", "hard working","machine learning", "flexible hours", "design patterns", "artificial intelligence", "negotiable pay",
    "microsoft office", "web development", "product testing", "quality assurance", "goal oriented", "schedule meeting", "sales", "product review", "full time", "full-time", "part-time", "part time"
  ]


  // purpose: to find keywords in a job description.
  constructor() { }

  parseDescription(description: string){
    // regex for finding currencies in tokenized chunks.
   
    description = description.toLowerCase();
    let res = new Array<string>();

    for(let w in this.keywordListSingle){
      if(description.includes(this.keywordListSingle[w])){
        
        res.push(this.keywordListSingle[w]);
      }
    }
    for(let w in this.keywordListPhrase){
      if(description.includes(this.keywordListPhrase[w])){
        
        res.push(this.keywordListPhrase[w]);
      }
    }

   
    
    return res;
  }
}
