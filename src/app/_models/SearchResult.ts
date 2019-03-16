export class SearchResult{
    company: string;
    jobTitle: string;
    jobLocation: string;
    description: string;
    applyLink: string;
    keywords?: Array<string>;
    companyID?:number;
    logoSrc?:string;
}