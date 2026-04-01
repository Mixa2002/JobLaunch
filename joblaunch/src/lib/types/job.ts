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

export interface JobListing {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  snippet: string;
  fullDescription: string;
  link: string;
  source: string;
  postedDate: string;
  fitScore: FitScore;
  matchedSkills: string[];
  missingSkills: string[];
  extractedKeywords: string[];
}

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
  pdfUrl: string;
  docxUrl: string;
  keywordReport: KeywordReport;
}
