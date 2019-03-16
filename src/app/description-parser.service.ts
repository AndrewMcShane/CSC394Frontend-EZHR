import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DescriptionParserService {

  private keywordListSingle: string[] = [
    "c#", "c++" , "java", "python", "ruby", "scala", "perl", "rust", "php", "html", "sql", "mysql", "erlang", "haskell", "fortran", "f", "f#", 
    "communication", "reporting", "flexible", "leadership", "excel", "adobe", "angular", "lua", "xml", "json", "frontend", "backend", "server"
  ];
  private keywordListPhrase: string[] = [
    "data analysis", "communication skills", "hard working", "machine learning", "flexible hours", "design patterns", "artificial intelligence", "negotiable pay",
    "microsoft office", "web development", "product testing", "quality assurance", "goal oriented", "schedule meeting", "sales", "product review"
  ]


  // purpose: to find keywords in a job description.
  constructor() { }

  parseDescription(description: string){
    // regex for finding currencies in tokenized chunks.
    let regex = new RegExp('^[+-]?[0-9]{1,3}(?:,?[0-9]{3})*(?:\.[0-9]{2})?$');
    let res = new Array<string>();
    let tokenized = description.split(" ").forEach( token => {
      // check the single list
      if(this.keywordListSingle.includes(token.toLowerCase())){
        res.push(token);
        
      } 
      // check the phrase list
      else if(this.keywordListPhrase.includes(token.toLowerCase())){
        res.push(token);
      }
      // try against a number regex for salary
      if(regex.test(token)){
        res.push("Salary: " + token);
      }
    });
    
    return res;
  }
}
