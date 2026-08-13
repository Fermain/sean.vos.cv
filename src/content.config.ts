import { defineCollection, z } from 'astro:content';

/**
 * Parse dates in multiple formats to handle both DD/MM/YYYY and YYYY-MM-DD
 * This ensures backward compatibility while migrating to the new format
 */
function parseDate(dateValue: string | Date | undefined | null): Date | undefined {
  if (!dateValue) return undefined;
  
  // Already a Date object
  if (dateValue instanceof Date) {
    return isNaN(dateValue.getTime()) ? undefined : dateValue;
  }
  
  // Handle string dates
  const dateStr = String(dateValue).trim();
  if (!dateStr || dateStr === '') return undefined;
  
  // Try DD/MM/YYYY format first (UK/European format)
  const ddmmyyyyPattern = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
  const ddmmyyyyMatch = dateStr.match(ddmmyyyyPattern);
  if (ddmmyyyyMatch) {
    const [, day, month, year] = ddmmyyyyMatch;
    const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    return isNaN(date.getTime()) ? undefined : date;
  }
  
  // Try YYYY-MM-DD format (ISO format)
  const isoPattern = /^(\d{4})-(\d{2})-(\d{2})$/;
  const isoMatch = dateStr.match(isoPattern);
  if (isoMatch) {
    const [, year, month, day] = isoMatch;
    const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    return isNaN(date.getTime()) ? undefined : date;
  }
  
  // Fallback to native Date parsing (last resort)
  const date = new Date(dateStr);
  return isNaN(date.getTime()) ? undefined : date;
}

const personalCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    address: z.string(),
    email: z.string().email(),
    phone: z.string(),
    passport: z.string(),
    dateOfBirth: z.preprocess((val) => parseDate(val as string | Date), z.date().optional()),
    nationality: z.string(),
    sex: z.enum(['Male', 'Female']),
    maritalStatus: z.enum(['Single', 'Married', 'Divorced', 'Widowed']),
    dependants: z.string(),
    languages: z.string(),
    health: z.string(),
    photo: z.string().optional(),
  }),
});

const qualificationsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    issuer: z.string(),
    issueDate: z.preprocess((val) => parseDate(val as string | Date), z.date().optional()),
    expiryDate: z.preprocess((val) => parseDate(val as string | Date), z.date().optional()),
    description: z.string().optional(),
    certificateNumber: z.string().optional(),
    category: z.enum(['Medical', 'Safety', 'Commercial Diving', 'Training', 'Other']),
    isActive: z.boolean().default(true),
  }),
});

const employmentCollection = defineCollection({
  type: 'content',
  schema: z.object({
    company: z.string(),
    position: z.string(),
    client: z.string().optional(),
    department: z.string().optional(),
    location: z.string(),
    startDate: z.preprocess((val) => parseDate(val as string | Date), z.date().optional()),
    endDate: z.preprocess((val) => parseDate(val as string | Date), z.date().optional()),
    current: z.boolean().default(false),
    description: z.string(),
    achievements: z.array(z.string()).optional(),
    skills: z.array(z.string()).optional(),
  }),
});

const educationCollection = defineCollection({
  type: 'content',
  schema: z.object({
    institution: z.string(),
    qualification: z.string(),
    level: z.string(),
    yearCompleted: z.preprocess((val) => parseDate(val as string | Date), z.date().optional()),
    location: z.string().optional(),
    description: z.string().optional(),
  }),
});

const settingsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    displayCertificates: z.boolean().default(true),
    galleryTitle: z.string().default('Professional Certificates'),
    certificateImages: z.array(z.object({
      image: z.string(),
      title: z.string(),
      description: z.string().optional(),
      category: z.enum(['Safety', 'Medical', 'Professional', 'Diving', 'Marine', 'Identification', 'Other']).default('Professional'),
      order: z.number().default(1),
      expiryDate: z.preprocess((val) => parseDate(val as string | Date), z.date().optional()),
    })).default([]),
  }),
});

export const collections = {
  personal: personalCollection,
  qualifications: qualificationsCollection,
  employment: employmentCollection,
  education: educationCollection,
  settings: settingsCollection,
}; 