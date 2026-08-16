import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-small text-muted-foreground text-center md:text-left">
          &copy; {currentYear} Akram Ouabel. All rights reserved.
        </p>
        <p className="text-small text-muted-foreground text-center md:text-right">
          Mobile Product Developer &bull; Flutter / Android / iOS
        </p>
      </div>
    </footer>
  );
}
