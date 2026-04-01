export enum DegreeLevel {
  HighSchool = 'high_school',
  Bachelor = 'bachelor',
  Master = 'master',
  PhD = 'phd',
}

export enum EmploymentType {
  FullTime = 'fullTime',
  PartTime = 'partTime',
  Internship = 'internship',
  Contract = 'contract',
}

export enum WorkMode {
  Onsite = 'onsite',
  Remote = 'remote',
  Hybrid = 'hybrid',
}

export const SERBIAN_CITIES = [
  'Beograd',
  'Novi Sad',
  'Niš',
  'Kragujevac',
  'Subotica',
  'Zrenjanin',
  'Pančevo',
  'Čačak',
  'Novi Pazar',
  'Kraljevo',
  'Smederevo',
  'Leskovac',
  'Užice',
  'Valjevo',
  'Kruševac',
  'Vranje',
  'Šabac',
  'Sombor',
  'Požarevac',
  'Pirot',
  'Zaječar',
  'Kikinda',
  'Sremska Mitrovica',
  'Jagodina',
] as const;

export type SerbianCity = (typeof SERBIAN_CITIES)[number];
