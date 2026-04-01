export type Language = 'sr' | 'en';

export const translations = {
  // Navigation & Common
  appName: {
    sr: 'JobLaunch',
    en: 'JobLaunch',
  },
  tagline: {
    sr: 'Pronađi svoj prvi posao',
    en: 'Find your first job',
  },
  continue: {
    sr: 'Nastavi',
    en: 'Continue',
  },
  back: {
    sr: 'Nazad',
    en: 'Back',
  },
  download: {
    sr: 'Preuzmi',
    en: 'Download',
  },
  cancel: {
    sr: 'Otkaži',
    en: 'Cancel',
  },
  save: {
    sr: 'Sačuvaj',
    en: 'Save',
  },
  close: {
    sr: 'Zatvori',
    en: 'Close',
  },
  tryAgain: {
    sr: 'Pokušaj ponovo',
    en: 'Try Again',
  },
  loading: {
    sr: 'Učitavanje...',
    en: 'Loading...',
  },
  settings: {
    sr: 'Podešavanja',
    en: 'Settings',
  },
  demoModeBanner: {
    sr: 'Demo režim — Poveži n8n u podešavanjima za pravu pretragu',
    en: 'Demo Mode — Configure n8n in settings to use real data',
  },

  // Step names
  stepUpload: {
    sr: 'Otpremi CV',
    en: 'Upload CV',
  },
  stepProfile: {
    sr: 'Tvoj profil',
    en: 'Your Profile',
  },
  stepSearch: {
    sr: 'Pretraži poslove',
    en: 'Search Jobs',
  },
  stepResults: {
    sr: 'Rezultati',
    en: 'Results',
  },
  stepTailored: {
    sr: 'Prilagođeni CV-jevi',
    en: 'Tailored CVs',
  },

  // Step 0: CV Upload
  uploadTitle: {
    sr: 'Otpremi svoj CV',
    en: 'Upload your CV',
  },
  uploadDescription: {
    sr: 'Prevuci i pusti svoj CV ovde, ili klikni da izabereš fajl',
    en: 'Drag and drop your CV here, or click to browse',
  },
  uploadDragActive: {
    sr: 'Pusti fajl ovde...',
    en: 'Drop the file here...',
  },
  uploadFileTypes: {
    sr: 'Podržani formati: PDF, DOCX (max 5MB)',
    en: 'Supported formats: PDF, DOCX (max 5MB)',
  },
  uploadAnalyze: {
    sr: 'Analiziraj CV',
    en: 'Analyze CV',
  },
  uploadAnalyzing: {
    sr: 'Analiziram tvoj CV...',
    en: 'Analyzing your CV...',
  },
  uploadReadingAchievements: {
    sr: 'Čitam tvoja dostignuća...',
    en: 'Reading your achievements...',
  },
  uploadExtractingSkills: {
    sr: 'Pronalazim tvoje veštine...',
    en: 'Extracting your skills...',
  },
  uploadBuildingProfile: {
    sr: 'Kreiram tvoj profil...',
    en: 'Building your profile...',
  },
  uploadErrorWrongType: {
    sr: 'Nepodržan format. Molim te otpremi PDF ili DOCX fajl.',
    en: 'Unsupported format. Please upload a PDF or DOCX file.',
  },
  uploadErrorTooLarge: {
    sr: 'Fajl je prevelik. Maksimalna veličina je 5MB.',
    en: 'File is too large. Maximum size is 5MB.',
  },
  uploadErrorFailed: {
    sr: 'Greška pri otpremanju. Pokušaj ponovo.',
    en: 'Upload failed. Please try again.',
  },

  // Step 1: Profile Review
  profileTitle: {
    sr: 'Proveri i dopuni svoj profil',
    en: 'Review and complete your profile',
  },
  profileAiExtracted: {
    sr: 'AI izvučeno',
    en: 'AI extracted',
  },
  profilePleaseFillin: {
    sr: 'Popuni ovo polje',
    en: 'Please fill in',
  },

  // Profile sections
  sectionPersonalInfo: {
    sr: 'Lični podaci',
    en: 'Personal Info',
  },
  sectionEducation: {
    sr: 'Obrazovanje',
    en: 'Education',
  },
  sectionSkills: {
    sr: 'Veštine i jezici',
    en: 'Skills & Languages',
  },
  sectionExperience: {
    sr: 'Iskustvo',
    en: 'Experience',
  },
  sectionPreferences: {
    sr: 'Preferencije za posao',
    en: 'Job Preferences',
  },
  sectionSerbiaSpecific: {
    sr: 'Specifično za Srbiju',
    en: 'Serbia-Specific',
  },

  // Personal info fields
  fieldFirstName: {
    sr: 'Ime',
    en: 'First Name',
  },
  fieldLastName: {
    sr: 'Prezime',
    en: 'Last Name',
  },
  fieldEmail: {
    sr: 'Email',
    en: 'Email',
  },
  fieldPhone: {
    sr: 'Telefon',
    en: 'Phone',
  },
  fieldCity: {
    sr: 'Grad',
    en: 'City',
  },
  fieldLinkedin: {
    sr: 'LinkedIn profil',
    en: 'LinkedIn URL',
  },
  fieldPortfolio: {
    sr: 'Portfolio sajt',
    en: 'Portfolio URL',
  },

  // Education fields
  fieldDegreeLevel: {
    sr: 'Nivo obrazovanja',
    en: 'Degree Level',
  },
  fieldFieldOfStudy: {
    sr: 'Oblast studija',
    en: 'Field of Study',
  },
  fieldUniversity: {
    sr: 'Univerzitet',
    en: 'University',
  },
  fieldGraduationYear: {
    sr: 'Godina diplomiranja',
    en: 'Graduation Year',
  },
  fieldGpa: {
    sr: 'Prosek',
    en: 'GPA',
  },
  fieldCoursework: {
    sr: 'Relevantni predmeti',
    en: 'Relevant Coursework',
  },
  fieldThesis: {
    sr: 'Tema rada',
    en: 'Thesis Topic',
  },

  // Degree levels
  degreeHighSchool: {
    sr: 'Srednja škola',
    en: 'High School',
  },
  degreeBachelor: {
    sr: 'Osnovne studije',
    en: "Bachelor's Degree",
  },
  degreeMaster: {
    sr: 'Master studije',
    en: "Master's Degree",
  },
  degreePhd: {
    sr: 'Doktorat',
    en: 'PhD',
  },

  // Skills fields
  fieldHardSkills: {
    sr: 'Tehničke veštine',
    en: 'Technical Skills',
  },
  fieldSoftSkills: {
    sr: 'Meke veštine',
    en: 'Soft Skills',
  },
  fieldLanguages: {
    sr: 'Jezici',
    en: 'Languages',
  },
  fieldCertifications: {
    sr: 'Sertifikati',
    en: 'Certifications',
  },
  fieldLanguageName: {
    sr: 'Jezik',
    en: 'Language',
  },
  fieldLanguageLevel: {
    sr: 'Nivo',
    en: 'Level',
  },

  // Experience fields
  fieldInternships: {
    sr: 'Prakse',
    en: 'Internships',
  },
  fieldProjects: {
    sr: 'Projekti',
    en: 'Projects',
  },
  fieldVolunteerWork: {
    sr: 'Volontiranje',
    en: 'Volunteer Work',
  },
  fieldPartTimeJobs: {
    sr: 'Honorarni poslovi',
    en: 'Part-time Jobs',
  },
  fieldTitle: {
    sr: 'Pozicija',
    en: 'Title',
  },
  fieldCompany: {
    sr: 'Kompanija',
    en: 'Company',
  },
  fieldDuration: {
    sr: 'Trajanje',
    en: 'Duration',
  },
  fieldDescription: {
    sr: 'Opis',
    en: 'Description',
  },
  fieldProjectName: {
    sr: 'Naziv projekta',
    en: 'Project Name',
  },
  fieldTechnologies: {
    sr: 'Tehnologije',
    en: 'Technologies',
  },
  addEntry: {
    sr: 'Dodaj',
    en: 'Add',
  },
  removeEntry: {
    sr: 'Ukloni',
    en: 'Remove',
  },

  // Preferences fields
  fieldDesiredRoles: {
    sr: 'Željene pozicije',
    en: 'Desired Roles',
  },
  fieldIndustries: {
    sr: 'Industrije',
    en: 'Industries',
  },
  fieldEmploymentType: {
    sr: 'Tip zaposlenja',
    en: 'Employment Type',
  },
  fieldWorkMode: {
    sr: 'Način rada',
    en: 'Work Mode',
  },
  fieldSalaryExpectation: {
    sr: 'Očekivana plata',
    en: 'Salary Expectation',
  },
  fieldWillingToRelocate: {
    sr: 'Spreman/na za preseljenje',
    en: 'Willing to Relocate',
  },
  salaryUnit: {
    sr: 'RSD/mesec',
    en: 'RSD/month',
  },

  // Employment types
  employmentFullTime: {
    sr: 'Puno radno vreme',
    en: 'Full-time',
  },
  employmentPartTime: {
    sr: 'Nepuno radno vreme',
    en: 'Part-time',
  },
  employmentInternship: {
    sr: 'Praksa',
    en: 'Internship',
  },
  employmentContract: {
    sr: 'Ugovor',
    en: 'Contract',
  },

  // Work modes
  workOnsite: {
    sr: 'Na licu mesta',
    en: 'Onsite',
  },
  workRemote: {
    sr: 'Daljinski',
    en: 'Remote',
  },
  workHybrid: {
    sr: 'Hibridni',
    en: 'Hybrid',
  },

  // Serbia-specific fields
  fieldWorkRegistration: {
    sr: 'Prijava na rad',
    en: 'Work Registration (Prijava)',
  },
  fieldMilitaryService: {
    sr: 'Vojna obaveza',
    en: 'Military Service',
  },
  fieldDriverLicense: {
    sr: 'Vozačka dozvola',
    en: "Driver's License",
  },
  militaryCompleted: {
    sr: 'Odslužena',
    en: 'Completed',
  },
  militaryExempt: {
    sr: 'Oslobođen',
    en: 'Exempt',
  },
  militaryPending: {
    sr: 'Na čekanju',
    en: 'Pending',
  },
  militaryNotApplicable: {
    sr: 'Nije primenjivo',
    en: 'Not Applicable',
  },

  // Step 2: Job Search
  searchTitle: {
    sr: 'Podesi pretragu',
    en: 'Configure your search',
  },
  searchTargetCity: {
    sr: 'Ciljani grad',
    en: 'Target City',
  },
  searchRadius: {
    sr: 'Radijus pretrage',
    en: 'Search Radius',
  },
  searchRadiusExact: {
    sr: 'Tačan grad',
    en: 'Exact city',
  },
  searchRadiusAnywhere: {
    sr: 'Bilo gde u Srbiji',
    en: 'Anywhere in Serbia',
  },
  searchActiveFilters: {
    sr: 'Aktivni filteri za pretragu',
    en: 'Active Search Parameters',
  },
  searchFiltersCount: {
    sr: 'od',
    en: 'of',
  },
  searchFiltersActive: {
    sr: 'filtera aktivno',
    en: 'filters active',
  },
  searchButton: {
    sr: 'Pretraži poslove',
    en: 'Search Jobs',
  },
  searchSearching: {
    sr: 'Pretražujem poslove...',
    en: 'Searching for jobs...',
  },
  searchProfileSummary: {
    sr: 'Tvoj profil za pretragu',
    en: 'Your search profile',
  },

  // Step 3: Results
  resultsTitle: {
    sr: 'Pronađeni poslovi',
    en: 'Job Matches',
  },
  resultsFound: {
    sr: 'Pronađeno poslova koji odgovaraju tvom profilu',
    en: 'jobs matching your profile',
  },
  resultsNoResults: {
    sr: 'Nema rezultata. Pokušaj da proširiš filtere.',
    en: 'No results found. Try broadening your filters.',
  },
  resultsSortByScore: {
    sr: 'Po poklapanju',
    en: 'By fit score',
  },
  resultsSortByDate: {
    sr: 'Po datumu',
    en: 'By date',
  },
  resultsSortBySalary: {
    sr: 'Po plati',
    en: 'By salary',
  },
  resultsShowSelected: {
    sr: 'Prikaži izabrane',
    en: 'Show selected',
  },
  resultsShowAll: {
    sr: 'Prikaži sve',
    en: 'Show all',
  },
  resultsFitScore: {
    sr: 'Poklapanje',
    en: 'Fit Score',
  },
  resultsSkillsMatch: {
    sr: 'Veštine',
    en: 'Skills',
  },
  resultsEducationMatch: {
    sr: 'Obrazovanje',
    en: 'Education',
  },
  resultsExperienceMatch: {
    sr: 'Iskustvo',
    en: 'Experience',
  },
  resultsLocationMatch: {
    sr: 'Lokacija',
    en: 'Location',
  },
  resultsLanguagesMatch: {
    sr: 'Jezici',
    en: 'Languages',
  },
  resultsCertificationsMatch: {
    sr: 'Sertifikati',
    en: 'Certifications',
  },
  resultsMatchedSkills: {
    sr: 'Poklopljene veštine',
    en: 'Matched skills',
  },
  resultsMissingSkills: {
    sr: 'Nedostajuće veštine',
    en: 'Missing skills',
  },
  resultsMissingSkillTip: {
    sr: 'Razmisli o učenju ovoga',
    en: 'Consider learning this',
  },
  resultsViewOriginal: {
    sr: 'Pogledaj originalni oglas',
    en: 'View Original Posting',
  },
  resultsSelect: {
    sr: 'Izaberi',
    en: 'Select',
  },
  resultsGenerateButton: {
    sr: 'Generiši prilagođene CV-jeve za izabrane poslove',
    en: 'Generate Tailored CVs for selected jobs',
  },
  resultsGenerateWarning: {
    sr: 'Generisanje više CV-jeva može potrajati nekoliko minuta',
    en: 'Generating many CVs may take a few minutes',
  },
  resultsDaysAgo: {
    sr: 'pre {count} dana',
    en: '{count} days ago',
  },

  // Step 4: Tailored CVs
  tailorTitle: {
    sr: 'Tvoji prilagođeni CV-jevi',
    en: 'Your Tailored CVs',
  },
  tailorStatusQueued: {
    sr: 'Na čekanju',
    en: 'Queued',
  },
  tailorStatusAnalyzing: {
    sr: 'Analiziram opis posla...',
    en: 'Analyzing job description...',
  },
  tailorStatusExtracting: {
    sr: 'Pronalazim ključne reči...',
    en: 'Extracting keywords...',
  },
  tailorStatusTailoring: {
    sr: 'Prilagođavam tvoj CV...',
    en: 'Tailoring your CV...',
  },
  tailorStatusGenerating: {
    sr: 'Generišem fajlove...',
    en: 'Generating files...',
  },
  tailorStatusReady: {
    sr: 'Spremno!',
    en: 'Ready!',
  },
  tailorDownloadPdf: {
    sr: 'Preuzmi PDF',
    en: 'Download PDF',
  },
  tailorDownloadDocx: {
    sr: 'Preuzmi DOCX',
    en: 'Download DOCX',
  },
  tailorDownloadAll: {
    sr: 'Preuzmi sve kao ZIP',
    en: 'Download All as ZIP',
  },
  tailorKeywordReport: {
    sr: 'Izveštaj o ključnim rečima',
    en: 'Keyword Report',
  },
  tailorKeywordsMatched: {
    sr: 'Poklopljene ključne reči',
    en: 'Total keywords matched',
  },
  tailorKeywordsAdded: {
    sr: 'Dodate ključne reči',
    en: 'Keywords added to CV',
  },
  tailorKeywordsOriginal: {
    sr: 'Ključne reči iz originalnog CV-ja',
    en: 'Keywords from original CV',
  },
  tailorKeywordsSkipped: {
    sr: 'Preskočene ključne reči',
    en: 'Keywords NOT added',
  },
  tailorAtsNote: {
    sr: 'Tvoj CV je optimizovan za ATS (sistem za praćenje prijava) skeniranje',
    en: 'Your CV was optimized for ATS (Applicant Tracking Systems) keyword scanning',
  },
  tailorStartOver: {
    sr: 'Počni ispočetka',
    en: 'Start Over',
  },
  tailorGoodLuck: {
    sr: 'Srećno sa prijavama!',
    en: 'Good luck with your applications!',
  },

  // Tips modal
  tipsTitle: {
    sr: 'Saveti za prijave',
    en: 'Tips for your applications',
  },
  tip1: {
    sr: 'Uvek prilagodi i propratno pismo',
    en: 'Always customize your cover letter too',
  },
  tip2: {
    sr: 'Istraži kompaniju pre nego što se prijaviš',
    en: 'Research the company before applying',
  },
  tip3: {
    sr: 'Pošalji podsetnik nakon nedelju dana ako nema odgovora',
    en: 'Follow up after 1 week if no response',
  },
  tip4: {
    sr: 'Tvoj prilagođeni CV već sadrži relevantne ključne reči — pošalji ga kakav jeste',
    en: 'Your tailored CV includes relevant keywords — submit it as-is, don\'t modify the formatting',
  },

  // Settings modal
  settingsTitle: {
    sr: 'Podešavanja',
    en: 'Settings',
  },
  settingsN8nUrl: {
    sr: 'n8n Webhook URL',
    en: 'n8n Webhook URL',
  },
  settingsN8nUrlPlaceholder: {
    sr: 'https://tvoj-n8n.example.com',
    en: 'https://your-n8n.example.com',
  },
  settingsTestConnection: {
    sr: 'Testiraj konekciju',
    en: 'Test Connection',
  },
  settingsConnected: {
    sr: 'Povezano',
    en: 'Connected',
  },
  settingsNotConfigured: {
    sr: 'Nije konfigurisano',
    en: 'Not configured',
  },
  settingsConnectionFailed: {
    sr: 'Konekcija neuspešna',
    en: 'Connection failed',
  },

  // Validation
  validationRequired: {
    sr: 'Ovo polje je obavezno',
    en: 'This field is required',
  },
  validationEmail: {
    sr: 'Unesi ispravnu email adresu',
    en: 'Please enter a valid email address',
  },
  validationMinSkills: {
    sr: 'Dodaj bar jednu veštinu',
    en: 'Add at least one skill',
  },
  validationMinRole: {
    sr: 'Dodaj bar jednu željenu poziciju',
    en: 'Add at least one desired role',
  },
  validationSelectCity: {
    sr: 'Izaberi grad',
    en: 'Please select a city',
  },
  validationSelectJob: {
    sr: 'Izaberi bar jedan posao',
    en: 'Select at least one job',
  },

  // Tag input
  tagInputPlaceholder: {
    sr: 'Kucaj i pritisni Enter...',
    en: 'Type and press Enter...',
  },

  // Misc
  yes: {
    sr: 'Da',
    en: 'Yes',
  },
  no: {
    sr: 'Ne',
    en: 'No',
  },
  none: {
    sr: 'Nema',
    en: 'None',
  },
  selectOption: {
    sr: 'Izaberi...',
    en: 'Select...',
  },
} as const;

export type TranslationKey = keyof typeof translations;
