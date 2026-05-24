import React, { useState } from "react";
import { ThemeProvider } from "../context/ThemeContext";
import { OBootSequence } from "../components/organisms/OBootSequence";
import { OHeroSection } from "../components/organisms/OHeroSection";
import { OAboutSection } from "../components/organisms/OAboutSection";
import { OSkillsSection } from "../components/organisms/OSkillsSection";
import { OProjectsSection } from "../components/organisms/OProjectsSection";
import { OContactSection } from "../components/organisms/OContactSection";
import { TPageLayout } from "../components/templates/TPageLayout";

export default function PortfolioPage() {
  const [booted, setBooted] = useState(false);
  const [section, setSection] = useState("HOME");
  const [themeId, setThemeId] = useState("ROSE");

  const handleThemeChange = (id: string) => {
    setThemeId(id);
    setBooted(false);
  };

  if (!booted) {
    return <OBootSequence onDone={() => setBooted(true)} themeId={themeId} />;
  }

  const SECTION_MAP: Record<string, React.ReactNode> = {
    HOME: <OHeroSection onNav={setSection} />,
    ABOUT: <OAboutSection />,
    SKILLS: <OSkillsSection />,
    PROJECTS: <OProjectsSection />,
    CONTACT: <OContactSection />,
  };

  return (
    <ThemeProvider themeId={themeId}>
      <div key={themeId} className="animate-theme-in bg-black">
        <TPageLayout
          activeSection={section}
          onNav={s => { setSection(s); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          themeId={themeId}
          onThemeChange={handleThemeChange}
        >
          {SECTION_MAP[section]}
        </TPageLayout>
      </div>
    </ThemeProvider>
  );
}