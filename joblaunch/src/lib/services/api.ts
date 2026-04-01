import type { UserProfile } from '@/lib/types/profile';
import type {
  JobListing,
  TailoredCV,
  FetchJobDetailsResponse,
} from '@/lib/types/job';
import { DegreeLevel, EmploymentType } from '@/lib/types/common';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// ---------------------------------------------------------------------------
// parseCV
// ---------------------------------------------------------------------------

/**
 * Sends the CV file to the n8n webhook and returns a parsed UserProfile.
 *
 * TODO: Replace mock with real webhook call:
 *   POST <n8n-base>/webhook/parse-cv  (multipart/form-data)
 */
export async function parseCV(_file: File): Promise<UserProfile> {
  await delay(3000);

  return {
    personal: {
      firstName: 'Marko',
      lastName: 'Jovanovic',
      email: 'marko.jovanovic@student.bg.ac.rs',
      phone: '+381 63 123 4567',
      city: 'Beograd',
      linkedinUrl: 'https://linkedin.com/in/markojovanovic',
      portfolioUrl: 'https://markojovanovic.dev',
    },
    education: {
      degreeLevel: DegreeLevel.Bachelor,
      fieldOfStudy: 'Racunarske nauke',
      university: 'Univerzitet u Beogradu — Elektrotehnicki fakultet',
      graduationYear: '2026',
      gpa: '8.75',
      relevantCoursework: [
        'Algoritmi i strukture podataka',
        'Baze podataka',
        'Web programiranje',
        'Vestacka inteligencija',
      ],
      thesisTopic: 'Primena NLP-a u automatskom parsiranju CV-jeva',
    },
    skills: {
      hardSkills: [
        'JavaScript',
        'TypeScript',
        'React',
        'Next.js',
        'Python',
        'Node.js',
        'PostgreSQL',
        'Git',
        'HTML/CSS',
        'Tailwind CSS',
      ],
      softSkills: [
        'Timski rad',
        'Resavanje problema',
        'Komunikacija',
        'Upravljanje vremenom',
      ],
      languages: [
        { name: 'Srpski', level: 'Maternji' },
        { name: 'Engleski', level: 'C1' },
      ],
      certifications: ['Meta Front-End Developer Certificate'],
    },
    experience: {
      internships: [
        {
          title: 'Frontend Developer Intern',
          company: 'Levi9 Technology Services',
          duration: '3 meseca (leto 2025)',
          description:
            'Razvoj React komponenti za interni dashboard. Pisanje unit testova sa Jest/RTL. Ucestvovanje u code review procesu.',
        },
      ],
      projects: [
        {
          name: 'StudentHub',
          description:
            'Full-stack platforma za razmenu beleski izmedju studenata. 500+ korisnika na ETF-u.',
          technologies: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
        },
        {
          name: 'WeatherApp',
          description:
            'PWA aplikacija za vremensku prognozu koristeci OpenWeather API sa offline podrskom.',
          technologies: ['Next.js', 'TypeScript', 'Service Workers'],
        },
      ],
      volunteerWork: ['Mentor na BEST Coding takmicenju 2024'],
      partTimeJobs: ['Privatni casovi iz matematike i programiranja'],
      totalMonthsExperience: 6,
    },
    preferences: {
      desiredRoles: ['Frontend Developer', 'Full-Stack Developer', 'React Developer'],
      industries: ['IT', 'Fintech', 'Gaming'],
      employmentType: EmploymentType.FullTime,
      workMode: '',
      targetCity: 'Beograd',
      searchRadius: '',
      salaryExpectation: '',
      willingToRelocate: false,
    },
    serbiaSpecific: {
      workRegistration: false,
      militaryServiceStatus: 'exempt',
      driverLicense: 'B',
    },
    rawCvText:
      'Marko Jovanovic — Frontend Developer. ETF Beograd, Racunarske nauke...',
  };
}

// ---------------------------------------------------------------------------
// searchJobs
// ---------------------------------------------------------------------------

/**
 * Searches for jobs matching the given profile and filters.
 *
 * TODO: Replace mock with real webhook call:
 *   POST <n8n-base>/webhook/search-jobs
 */
export async function searchJobs(
  _profile: UserProfile,
  _filters: { employmentType: string; workMode: string },
  _city: string,
): Promise<JobListing[]> {
  await delay(2000);

  const companies = [
    { company: 'Nordeus', location: 'Beograd' },
    { company: 'Levi9 Technology Services', location: 'Novi Sad' },
    { company: 'Vega IT', location: 'Novi Sad' },
    { company: 'FishingBooker', location: 'Novi Sad' },
    { company: 'Quantox Technology', location: 'Nis' },
    { company: 'Seven Bridges Genomics', location: 'Beograd' },
    { company: 'Endava Belgrade', location: 'Beograd' },
    { company: 'Hooloovoo', location: 'Beograd' },
    { company: 'Comtrade Gaming', location: 'Beograd' },
    { company: 'Infostud', location: 'Subotica' },
  ];

  const titles = [
    'Junior Frontend Developer',
    'React Developer',
    'Full-Stack JavaScript Developer',
    'Junior Software Engineer',
    'Frontend Engineer (React/TS)',
    'Web Developer',
    'Junior Full-Stack Developer',
    'UI Engineer',
    'Frontend Developer',
    'Software Developer Intern',
  ];

  return companies.map((c, i) => {
    const overall = Math.round(60 + Math.random() * 35);
    return {
      id: `job-${i + 1}`,
      title: titles[i % titles.length],
      company: c.company,
      location: c.location,
      salary: i % 3 === 0 ? '' : `${80 + i * 10}.000 - ${110 + i * 10}.000 RSD`,
      type: i % 4 === 0 ? EmploymentType.Internship : EmploymentType.FullTime,
      snippet: `Trazimo motivisanog ${titles[i % titles.length]} za nas tim u ${c.location}.`,
      fullDescription: '',
      link: `https://example.com/jobs/${i + 1}`,
      source: i % 2 === 0 ? 'HelloWorld.rs' : 'Infostud',
      postedDate: `${Math.floor(1 + Math.random() * 14)} days ago`,
      fitScore: {
        overall,
        breakdown: {
          skills: Math.round(50 + Math.random() * 50),
          education: Math.round(60 + Math.random() * 40),
          experience: Math.round(40 + Math.random() * 50),
          location: c.location === 'Beograd' ? 100 : Math.round(40 + Math.random() * 40),
          languages: Math.round(70 + Math.random() * 30),
          certifications: Math.round(30 + Math.random() * 50),
        },
      },
      matchedSkills: ['JavaScript', 'React', 'TypeScript', 'Git'].slice(0, 2 + (i % 3)),
      missingSkills: ['Docker', 'AWS', 'GraphQL', 'CI/CD'].slice(0, 1 + (i % 3)),
      extractedKeywords: ['React', 'frontend', 'TypeScript', 'REST API'],
    };
  });
}

// ---------------------------------------------------------------------------
// fetchJobDetails
// ---------------------------------------------------------------------------

/**
 * Fetches the full description and keywords for a specific job listing.
 *
 * TODO: Replace mock with real webhook call:
 *   POST <n8n-base>/webhook/fetch-job-details
 */
export async function fetchJobDetails(
  _jobUrl: string,
): Promise<FetchJobDetailsResponse> {
  await delay(1500);

  return {
    fullDescription:
      'We are looking for a motivated Junior Frontend Developer to join our product team. ' +
      'You will work on our React-based platform, implement new features, write tests, ' +
      'and collaborate with designers and backend engineers. Experience with TypeScript ' +
      'and modern CSS is a plus.',
    extractedKeywords: [
      'React',
      'TypeScript',
      'CSS',
      'frontend',
      'testing',
      'collaboration',
    ],
  };
}

// ---------------------------------------------------------------------------
// tailorCV
// ---------------------------------------------------------------------------

/**
 * Sends profile + CV text + target job to the tailor-cv webhook.
 * Returns a tailored CV with keyword report.
 *
 * TODO: Replace mock with real webhook call:
 *   POST <n8n-base>/webhook/tailor-cv
 */
export async function tailorCV(
  _profile: UserProfile,
  _cvText: string,
  job: JobListing,
): Promise<TailoredCV> {
  await delay(3000);

  return {
    jobId: job.id,
    jobTitle: job.title,
    company: job.company,
    pdfBase64: '',
    docxBase64: '',
    keywordReport: {
      keywordsUsed: ['React', 'TypeScript', 'frontend', 'testing', 'REST API'],
      keywordsFromOriginal: ['React', 'TypeScript', 'frontend'],
      keywordsSkipped: [
        { keyword: 'Kubernetes', reason: 'Not relevant to candidate profile' },
      ],
      keywordMatchRate: 0.83,
    },
  };
}
