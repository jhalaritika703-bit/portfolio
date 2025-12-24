import { useState } from "react";
import Background from "./components/layout/Background";
import NightSky from "./components/layout/NightSky";
import Sidebar from "./components/layout/Sidebar";
import Navbar from "./components/layout/Navbar";

import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Resume from "./components/sections/Resume";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Education from "./components/sections/Resume";

export default function App() {
  const [activeTab, setActiveTab] = useState("About");

  return (
    <div className="relative min-h-screen text-white">
      <Background />
      <NightSky />

      <div className="relative z-10 max-w-6xl mx-auto p-4 md:p-12 flex flex-col lg:flex-row gap-8">
        <Sidebar />

        <main className="flex-1  backdrop-blur-xl border border-[#383839] rounded-3xl relative">
          <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

          <div className="p-8 pt-24">
            {activeTab === "About" && <About />}
            {activeTab === "Skills" && <Skills />}
            {activeTab === "Education & Certificates" && <Education/>}
            {activeTab === "Projects" && <Projects />}
            {activeTab === "Contact" && <Contact />}
          </div>
        </main>
      </div>
    </div>
  );
}
