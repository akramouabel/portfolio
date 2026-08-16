import React from 'react';
import PageContainer from '@/components/layout/PageContainer';
import SectionContainer from '@/components/layout/SectionContainer';

export default function Home() {
  return (
    <PageContainer>
      <SectionContainer className="flex flex-col items-center justify-center min-h-[70vh] text-center">
        <h1 className="text-display text-foreground mb-4">
          Akram Ouabel
        </h1>
        <p className="text-h2 text-primary mb-8">
          Mobile / Flutter Developer
        </p>
        <div className="inline-block px-4 py-2 bg-muted border border-border rounded-md text-small text-muted-foreground font-mono">
          Sprint 01 Foundation
        </div>
      </SectionContainer>
    </PageContainer>
  );
}
