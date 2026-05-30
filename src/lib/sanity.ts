// lib/sanity.ts
import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: '2t35dhp6', 
  dataset: 'production',
  apiVersion: '2026-05-28',
  useCdn: false,
})