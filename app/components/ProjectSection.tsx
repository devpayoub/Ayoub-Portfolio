"use client";
import { useRef, useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { ProjectTag } from "./ProjectTag";
import { motion, useInView } from "motion/react";

export const ProjectSection = () => {
  const projectsData = [
    {
      id: 1,
      title: "FileDrive",
      description:
        "A modern, secure file management system built with Next.js, Convex, and Clerk authentication. Upload different format files (images, PDFs, text files, spreadsheets), add them to favorites, delete and recover files with a beautiful, responsive interface.",
      image: "/images/projects/filedrive.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/devpayoub/FileDrive",
      previewUrl: "",
    },
    {
      id: 2,
      title: "AI Recruiter Voice Agent",
      description:
        "AI Recruiter Voice Agent is a revolutionary recruitment platform that transforms the traditional hiring process through intelligent automation and voice-based AI interactions. Built with cutting-edge technologies like Next.js 15, Supabase, and advanced AI services, this platform offers a seamless, efficient, and bias-free interview experience for both recruiters and candidates.",
      image: "/images/projects/ai1.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/devpayoub/AI-Recruitment-Agent",
      previewUrl: "",
    },
    {
      id: 3,
      title: "Real Estate Platform",
      description:
        "A modern, full-stack real estate platform built with React, TypeScript, and Supabase. This application provides a comprehensive solution for real estate agents to showcase properties, manage blog content, and interact with clients",
      image: "/images/projects/real-estatee.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/devpayoub/real-estatee",
      previewUrl: "",
    },
    {
      id: 4,
      title: "InspireFlow",
      description:
        "InspireFlow is a beautiful, minimal Spring Boot + Thymeleaf web application that delivers random inspirational quotes with every visit or interaction. Experience the power of words that motivate and inspire.",
      image: "/images/projects/flow.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/devpayoub/inspireflow",
      previewUrl: "",
    },
    {
      id: 5,
      title: "AI Legal Assistant",
      description:
        "A modern, intelligent legal document generation and management system built with Next.js, React, and TypeScript. This application helps users create and modify legal documents using AI-powered assistance.",
      image: "/images/projects/ai-loyer.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/devpayoub/AI-Legal-Assistant",
      previewUrl: "",
    },
    {
      id: 6,
      title: "README GENERATOR",
      description:
        "README-GENERATOR is a developer tool that automatically generates README files, Simply provide a URL or path to your codebase, and a well-structured and detailed README will be generated.",
      image: "/images/projects/readme.jpeg",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/devpayoub/README-Generator",
      previewUrl: "",
    },
    {
      id: 7,
      title: "Login & Register System with Supabase+NextJS",
      description:
        "A modern authentication system built with Next.js 15, TypeScript, Tailwind CSS, and Supabase. This project provides a complete user authentication flow with registration, login, logout, and a protected dashboard.",
      image: "/images/projects/next.png",
      tag: ["All", "Mini-Projects"],
      gitUrl: "https://github.com/devpayoub/login-register-supabase",
      previewUrl: "",
    },
    {
      id: 8,
      title: "JWT Token Management with Supabase+NextJS",
      description:
        "A comprehensive guide and example project demonstrating how to create, manage, and secure JWT tokens with Next.js 15, TypeScript, and Supabase. This project shows various authentication patterns including token creation, validation, refresh, and secure storage.",
      image: "/images/projects/next.png",
      tag: ["All", "Mini-Projects"],
      gitUrl: "https://github.com/devpayoub/JWT-Token-Management-with-Supabase",
      previewUrl: "",
    },
    {
      id: 9,
      title: "CRUD Test with Supabase+NextJS",
      description:
        "A simple CRUD (Create, Read, Update, Delete) application built with Next.js 15, TypeScript, Tailwind CSS, and Supabase. This project demonstrates basic database operations with a clean, modern interface.",
      image: "/images/projects/next.png",
      tag: ["All", "Mini-Projects"],
      gitUrl: "https://github.com/devpayoub/CRUD-supabase",
      previewUrl: "",
    },
    {
      id: 10,
      title: "API Integration with Supabase+NextJS",
      description:
        "A comprehensive guide and example project demonstrating how to create, integrate, and use APIs with Next.js 15, TypeScript, and Supabase. This project shows various API patterns including REST APIs, Server Actions, and real-time subscriptions.",
      image: "/images/projects/next.png",
      tag: ["All", "Mini-Projects"],
      gitUrl: "https://github.com/devpayoub/Next.js-API-Integration-with-Supabase",
      previewUrl: "",
    },
    {
      id: 11,
      title: "Certificate Generator",
      description:
        "Certificate Generator ,A Online Application That Can Help You To Generator Udemy and Linkedin Generator. Built with HTML, CSS and JavaScript",
      image: "/images/projects/gg.png",
      tag: ["All", "Mini-Projects"],
      gitUrl: "https://github.com/devpayoub/Certificate-Generator",
      previewUrl: "",
    },
    {
      id: 12,
      title: "Keycloak Spring Boot Authentication Microservice",
      description:
        "A complete Spring Boot microservice demonstrating Keycloak integration for authentication and authorization with role-based access control, user management, and password reset functionality.",
      image: "/images/projects/keycloak.png",
      tag: ["All", "Mini-Projects"],
      gitUrl: "https://github.com/devpayoub/Keycloak-with-Spring-Boot-Authentication-System",
      previewUrl: "",
    },
    {
      id: 13,
      title: "TV Themed Promotional Website",
      description:
        "This project is a promotional website designed with a nostalgic TV aesthetic. The design features a vintage television interface with smooth carousel animations, YouTube video integration, and a modern responsive layout.",
      image: "/images/projects/jid.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/devpayoub/TV-Themed-Promotional",
      previewUrl: "",
    },
  ];

  const [tag, setTag] = useState("Web");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" ref={ref}>
      <h2 className="text-center text-2xl lg:text-4xl font-bold text-white mt-4 mb-2 md:mb-4">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          name="All"
          isSelected={tag === "All"}
          onClick={() => setTag("All")}
        />
        <ProjectTag
          name="Web"
          isSelected={tag === "Web"}
          onClick={() => setTag("Web")}
        />
        <ProjectTag
          name="Mini-Projects"
          isSelected={tag === "Mini-Projects"}
          onClick={() => setTag("Mini-Projects")}
        />
      </div>
      <ul className="grid md:grid-cols-2 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: project.id * 0.3 }}
          >
            <ProjectCard
              title={project.title}
              imgUrl={project.image}
              description={project.description}
              gitHubUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};
