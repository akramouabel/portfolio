import React from 'react';
import PageContainer from '@/components/layout/PageContainer';
import SectionContainer from '@/components/layout/SectionContainer';

export default function Projects() {
  return (
    <PageContainer>
      <SectionContainer className="min-h-[70vh]">
        <h1 className="text-h1 text-foreground mb-4">Projects Portfolio</h1>
        <p className="text-body text-muted-foreground mb-6">
          This is a placeholder for the Projects page. In future sprints, this will display interactive cards and detailed case studies of mobile applications.
        </p>
        <span className="text-small text-accent font-mono block">/projects - Route Active</span>
      </SectionContainer>
    </PageContainer>
  );
}
