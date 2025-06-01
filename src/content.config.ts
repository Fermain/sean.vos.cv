import { defineCollection, z } from 'astro:content';

const personalCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    address: z.string(),
    email: z.string().email(),
    phone: z.string(),
    passport: z.string(),
    dateOfBirth: z.string(),
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
    issueDate: z.string().optional(),
    expiryDate: z.string().optional(),
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
    startDate: z.string(),
    endDate: z.string().optional(),
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
    yearCompleted: z.string(),
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