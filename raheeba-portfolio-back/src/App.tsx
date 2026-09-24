import React from 'react';
import { Navbar } from './components/Navbar';
import { CustomCursor } from './components/CustomCursor';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { TechMarquee } from './sections/TechMarquee';
import { Projects } from './sections/Projects';
import { ProjectDetail } from './sections/ProjectDetail';
import { Experience } from './sections/Experience';
import { EngineeringNotes } from './sections/EngineeringNotes';
import { NoteDetail } from './sections/NoteDetail';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';
import { RouterProvider, useRouter } from './utils/router';

const AppContent: React.FC = () => {
  const { path } = useRouter();

  // Route matching
  const isProjectDetail = path.startsWith('/projects/');
  const isNoteDetail = path.startsWith('/notes/');

  return (
    <div className="relative min-h-screen bg-background text-text-primary selection:bg-accent-emerald/20 selection:text-accent-emerald">
      {/* Custom follower cursor (desktop only, disabled on touch/reduced motion) */}
      <CustomCursor />

      {/* Global Background Grid & Ambience */}
      <div className="fixed inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-20" />
      <div className="fixed inset-0 bg-mesh-dark pointer-events-none -z-10" />

      {/* Sticky Navigation Header */}
      <Navbar />

      {/* Main Content Resolution */}
      <main>
        {isProjectDetail ? (
          <ProjectDetail />
        ) : isNoteDetail ? (
          <NoteDetail />
        ) : (
          <>
            <Hero />
            <About />
            <TechMarquee />
            <Projects />
            <Experience />
            <EngineeringNotes />
            <Contact />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
};

export default App;
