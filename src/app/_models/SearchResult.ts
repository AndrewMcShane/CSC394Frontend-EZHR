export class SearchResult{
    job_company: string;
    job_title: string;
    job_location: string;
    job_summary: string;
    job_url: string;
    keywords?: Array<string>;
    companyID?:number;
    logoSrc?:string;
}