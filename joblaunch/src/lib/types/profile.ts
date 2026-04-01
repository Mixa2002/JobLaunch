import { DegreeLevel, EmploymentType, WorkMode } from './common';

export interface PersonalInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  linkedinUrl: string;
  portfolioUrl: string;
}

export interface Education {
  degreeLevel: DegreeLevel | '';
  fieldOfStudy: string;
  university: string;
  graduationYear: string;
  gpa: string;
  relevantCoursework: string[];
  thesisTopic: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface Skills {
  hardSkills: string[];
  softSkills: string[];
  languages: Language[];
  certifications: string[];
}

export interface Internship {
  title: string;
  company: string;
  duration: string;
  description: string;
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
}

export interface Experience {
  internships: Internship[];
  projects: Project[];
  volunteerWork: string[];
  partTimeJobs: string[];
  totalMonthsExperience: number;
}

export interface Preferences {
  desiredRoles: string[];
  industries: string[];
  employmentType: EmploymentType | '';
  workMode: WorkMode | '';
  targetCity: string;
  searchRadius: string;
  salaryExpectation: string;
  willingToRelocate: boolean;
}

export interface SerbiaSpecific {
  workRegistration: boolean;
  militaryServiceStatus: string;
  driverLicense: string;
}

export interface UserProfile {
  personal: PersonalInfo;
  education: Education;
  skills: Skills;
  experience: Experience;
  preferences: Preferences;
  serbiaSpecific: SerbiaSpecific;
  rawCvText: string;
  rawCvFile: File | null;
}

export function createEmptyProfile(): UserProfile {
  return {
    personal: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      city: '',
      linkedinUrl: '',
      portfolioUrl: '',
    },
    education: {
      degreeLevel: '',
      fieldOfStudy: '',
      university: '',
      graduationYear: '',
      gpa: '',
      relevantCoursework: [],
      thesisTopic: '',
    },
    skills: {
      hardSkills: [],
      softSkills: [],
      languages: [],
      certifications: [],
    },
    experience: {
      internships: [],
      projects: [],
      volunteerWork: [],
      partTimeJobs: [],
      totalMonthsExperience: 0,
    },
    preferences: {
      desiredRoles: [],
      industries: [],
      employmentType: '',
      workMode: '',
      targetCity: '',
      searchRadius: '',
      salaryExpectation: '',
      willingToRelocate: false,
    },
    serbiaSpecific: {
      workRegistration: false,
      militaryServiceStatus: '',
      driverLicense: '',
    },
    rawCvText: '',
    rawCvFile: null,
  };
}
