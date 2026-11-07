import { CaseStudy } from "@/types/case-study";

export function calculateCaseStudyReadingTime(caseStudy?: CaseStudy): number {
  if (!caseStudy) return 1;

  const textSegments: string[] = [];

  // Hero Section
  if (caseStudy.hero?.headline) textSegments.push(caseStudy.hero.headline);
  if (caseStudy.hero?.description) textSegments.push(caseStudy.hero.description);

  // Brief (Problem, Approach, Outcome)
  if (caseStudy.brief?.problem) textSegments.push(caseStudy.brief.problem);
  if (caseStudy.brief?.approach) textSegments.push(caseStudy.brief.approach);
  if (caseStudy.brief?.outcome) textSegments.push(caseStudy.brief.outcome);

  // Features
  if (caseStudy.features) {
    caseStudy.features.forEach((feat: { name: string; description: string; }) => {
      if (feat.name) textSegments.push(feat.name);
      if (feat.description) textSegments.push(feat.description);
    });
  }

  // Product Experience / Screens
  if (caseStudy.productExperience) {
    caseStudy.productExperience.forEach((screen: { label: string; description: string; }) => {
      if (screen.label) textSegments.push(screen.label);
      if (screen.description) textSegments.push(screen.description);
    });
  }

  // Challenges & Learnings
  if (caseStudy.challenges) textSegments.push(...caseStudy.challenges);
  if (caseStudy.learnings) textSegments.push(...caseStudy.learnings);

  // Calculate total word count
  const fullText = textSegments.join(" ");
  const wordCount = fullText.trim().split(/\s+/).filter(Boolean).length;

  // Average reading speed: 200 words per minute (minimum 1 minute)
  const wordsPerMinute = 200;
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
}