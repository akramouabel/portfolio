import React from 'react';
import PageContainer from '@/components/layout/PageContainer';
import SectionContainer from '@/components/layout/SectionContainer';

export default function About() {
  return (
    <PageContainer>
      <SectionContainer className="min-h-[70vh]">
        <h1 className="text-h1 text-foreground mb-4">About Akram</h1>
        <p className="text-body text-muted-foreground mb-6">
          This is a placeholder for the About page. The content here will detail the professional background, mobile development expertise, and product engineering approach of Akram Ouabel.
        </p>
        <span className="text-small text-accent font-mono block">/about - Route Active</span>
      </SectionContainer>
    </PageContainer>
  );
}
