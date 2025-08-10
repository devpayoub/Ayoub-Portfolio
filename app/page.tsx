import { Toaster } from "react-hot-toast";
import { AboutSection } from "./components/AboutSection";
import { EmailSection } from "./components/EmailSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { HeroSection } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";
import { ProjectSection } from "./components/ProjectSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#121212]">
      <Toaster position="top-center" />
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <ExperienceSection />
        <EmailSection />
      </div>
    </main>
  );
}
