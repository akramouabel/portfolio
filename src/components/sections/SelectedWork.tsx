// import React from "react";
// import Link from "next/link";
// import { ArrowUpRight } from "lucide-react";

// export default function SelectedWork() {
//   return (
//     <section
//       id="work"
//       aria-labelledby="work-heading"
//       className="relative overflow-hidden py-24 lg:py-32"
//       style={{
//         background: "linear-gradient(160deg, #0B0F17 0%, #0D1A18 55%, #0B0F17 100%)"
//       }}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//         {/* Section header */}
//         <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
//           <div className="flex flex-col gap-3">
//             <span className="text-xs font-mono font-semibold uppercase tracking-widest text-accent">
//               Selected Work
//             </span>
//             <h2
//               id="work-heading"
//               className="font-bold text-foreground leading-tight"
//               style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
//             >
//               Mobile products and technical projects.
//             </h2>
//           </div>
//           <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
//             A selection of mobile applications I&apos;ve designed and built.
//           </p>
//         </div>

//         {/* Project cards */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           {FEATURED_PROJECTS.map((project, index) => (
//             <article
//               key={project.slug}
//               className={`group relative flex flex-col rounded-2xl border border-border bg-card overflow-hidden hover:border-border/80 transition-all duration-300 hover:shadow-xl hover:shadow-black/20 hover:-translate-y-1 ${
//                 index === 0 ? "lg:col-span-2" : ""
//               }`}
//             >
//               {/* Visual area — replaceable image slot */}
//               <div
//                 className={`w-full overflow-hidden ${
//                   index === 0 ? "h-56 sm:h-72" : "h-44 sm:h-52"
//                 }`}
//                 aria-hidden="true"
//               >
//                 <div
//                   className="w-full h-full flex items-center justify-center relative"
//                   style={{
//                     background:
//                       index === 0
//                         ? "linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(6,182,212,0.08) 100%)"
//                         : index === 1
//                         ? "linear-gradient(135deg, rgba(6,182,212,0.12) 0%, rgba(99,102,241,0.06) 100%)"
//                         : "linear-gradient(135deg, rgba(16,185,129,0.12) 0%, rgba(99,102,241,0.06) 100%)",
//                   }}
//                 >
//                   {/* Placeholder grid pattern */}
//                   <div className="absolute inset-0 opacity-20" style={{
//                     backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",
//                     backgroundSize: "24px 24px",
//                   }} />
//                   {/* Centered label indicating replaceable slot */}
//                   <div className="relative flex flex-col items-center gap-2 text-center px-4">
//                     <div className="w-12 h-12 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center">
//                       <span className="text-lg font-bold text-white/30 font-mono">
//                         {project.title.charAt(0)}
//                       </span>
//                     </div>
//                     <span className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider">
//                       Image slot — Sprint 03
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="flex flex-col flex-1 p-6 gap-4">
//                 <div className="flex items-start justify-between gap-3">
//                   <div className="flex flex-col gap-1">
//                     <span className="text-xs font-mono font-semibold uppercase tracking-wider text-muted-foreground">
//                       {project.category}
//                     </span>
//                     <h3 className="text-lg font-bold text-foreground leading-snug">
//                       {project.title}
//                     </h3>
//                   </div>
//                   {project.github && (
//                     <a
//                       href={project.github}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       aria-label={`View ${project.title} on GitHub`}
//                       className="mt-0.5 p-2 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-border/80 transition-colors focus-visible:outline-none shrink-0"
//                     >
//                       <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
//                     </a>
//                   )}
//                 </div>

//                 <p className="text-sm text-muted-foreground leading-relaxed flex-1">
//                   {project.shortDescription}
//                 </p>

//                 {/* Technology tags */}
//                 <div className="flex flex-wrap gap-1.5">
//                   {project.technologies.map((tech) => (
//                     <span
//                       key={tech}
//                       className="px-2.5 py-0.5 rounded-md border border-border/60 bg-muted/40 text-xs font-mono text-muted-foreground"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>

//         {/* View all hint */}
//         <div className="mt-10 flex justify-center">
//           <Link
//             href="/projects"
//             className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none group"
//           >
//             View all projects
//             <ArrowUpRight
//               className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
//               aria-hidden="true"
//             />
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }
