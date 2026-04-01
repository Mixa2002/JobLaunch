import { EmploymentType } from './common';
import type { UserProfile } from './profile';

// ---------------------------------------------------------------------------
// Fit Score
// ---------------------------------------------------------------------------

export interface FitScoreBreakdown {
  skills: number;
  education: number;
  experience: number;
  location: number;
  languages: number;
  certifications: number;
}

export interface FitScore {
  overall: number;
  breakdown: FitScoreBreakdown;
}

// ---------------------------------------------------------------------------
// Job Listing
// ---------------------------------------------------------------------------

export interface JobListing {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: EmploymentType | string; // enum when we can parse it, raw string otherwise
  snippet: string;
  fullDescription: string;
  link: string;
  source: string;
  postedDate: string;
  fitScore?: FitScore; // optional: may not be present before scoring
  matchedSkills: string[];
  missingSkills: string[];
  extractedKeywords: string[];
}

// ---------------------------------------------------------------------------
// Keyword Report & Tailored CV
// ---------------------------------------------------------------------------

export interface KeywordReportEntry {
  keyword: string;
  reason: string;
}

export interface KeywordReport {
  keywordsUsed: string[];
  keywordsFromOriginal: string[];
  keywordsSkipped: KeywordReportEntry[];
  keywordMatchRate: number;
}

export interface TailoredCV {
  jobId: string;
  jobTitle: string;
  company: string;
  /** Base64-encoded PDF content returned by the tailor-cv webhook */
  pdfBase64: string;
  /** Base64-encoded DOCX content returned by the tailor-cv webhook */
  docxBase64: string;
  keywordReport: KeywordReport;
}

// ---------------------------------------------------------------------------
// n8n Webhook API Contracts
// ---------------------------------------------------------------------------

/** POST /webhook/parse-cv — multipart/form-data with the CV file */
export interface ParseCvResponse {
  profile: UserProfile;
}

/** POST /webhook/search-jobs */
export interface SearchJobsRequest {
  profile: UserProfile;
  filters: {
    targetCity: string;
    searchRadius: string;
    employmentType: EmploymentType | '';
    workMode: string;
  };
}

export interface SearchJobsResponse {
  jobs: JobListing[];
  totalFound: number;
}

/** POST /webhook/fetch-job-details */
export interface FetchJobDetailsRequest {
  jobUrl: string;
}

export interface FetchJobDetailsResponse {
  fullDescription: string;
  extractedKeywords: string[];
}

/** POST /webhook/tailor-cv */
export interface TailorCvRequest {
  profile: UserProfile;
  rawCvText: string;
  job: JobListing;
}

export interface TailorCvResponse {
  tailoredCv: TailoredCV;
}

/** GET /webhook/health */
export interface HealthCheckResponse {
  status: 'ok' | 'error';
  version?: string;
}
