"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useMemo } from "react";
import { TypeAnimation } from "react-type-animation";
import ParticlesBackground from "../components/ParticlesBackground";
import WaveDivider from "../components/WaveDivider";
import HeroBootSequence from '../components/HeroBootSequence';
import TimelineDNA from '../components/TimelineDNA';
import SkillTree from '../components/SkillTree';
import ProjectCaseStudy from '../components/ProjectCaseStudy';
import LeadershipDashboard from '../components/LeadershipDashboard';
import FeatsTrophyShelf from '../components/FeatsTrophyShelf';
import ContactCLI from '../components/ContactCLI';

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [darkMode, setDarkMode] = useState(true);
  const [hoveredSection, setHoveredSection] = useState(null);

  const sections = useMemo(
    () => [
      "home",
      "about",
      "skills",
      "experience",
      "projects-preview",
      "contact",
    ],
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.body.classList.add("dark");
      document.body.style.backgroundColor = "#111827"; // dark gray-900
    } else {
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("dark");
      document.body.style.backgroundColor = "#ffffff"; // white
    }
  }, [darkMode]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <HeroBootSequence />
      <TimelineDNA />
      <SkillTree />
      <ProjectCaseStudy />
      <LeadershipDashboard />
      <FeatsTrophyShelf />
      <ContactCLI />
    </>
  );
}
