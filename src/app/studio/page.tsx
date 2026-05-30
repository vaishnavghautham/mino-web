// src/app/studio/[[...tool]]/page.tsx
'use client'

import { NextStudio } from 'next-sanity/studio'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from '@/schemaTypes'

const studioConfig = defineConfig({
  projectId: '2t35dhp6', // Matches your Project ID from the screenshot
  dataset: 'production',
  basePath: '/studio', // Mounts everything securely under /studio
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
})

export default function StudioPage() {
  return <NextStudio config={studioConfig} />
}