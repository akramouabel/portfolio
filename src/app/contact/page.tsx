import React from 'react';
import PageContainer from '@/components/layout/PageContainer';
import SectionContainer from '@/components/layout/SectionContainer';

export default function Contact() {
  return (
    <PageContainer>
      <SectionContainer className="min-h-[70vh]">
        <h1 className="text-h1 text-foreground mb-4">Contact Akram</h1>
        <p className="text-body text-muted-foreground mb-6">
          This is a placeholder for the Contact page. It will eventually house a professional inquiry form and links to professional platforms.
        </p>
        <span className="text-small text-accent font-mono block">/contact - Route Active</span>
      </SectionContainer>
    </PageContainer>
  );
}
