import { Timeline } from "./Timeline";

export interface ExperienceItemsProps {
  id: number;
  title: string;
  location: string;
  description: string[];
  date: string;
  logo: string;
}

export const ExperienceSection = () => {
  const items: ExperienceItemsProps[] = [
    {
      id: 1,
      title: "BTP - Support in Management IT",
      location: "Institut Maghrébin des Sciences Economique et de Technologie",
      date: "Jul 2023",
      description: [
        "Institut Maghrébin des Sciences Economique et de Technologie",
      ],
      logo: "/images/experience/imset.jpg",
    },
    {
      id: 2,
      title: "BTS - Development on the Internet",
      location: "Institut Maghrébin des Sciences Economique et de Technologie",
      date: "Jul 2025",
      description: [
        "Institut Maghrébin des Sciences Economique et de Technologie",
      ],
      logo: "/images/experience/imset.jpg",
    },
    {
      id: 3,
      title: "Web Developer",
      location: "Tekno Island",
      date: "Sep 2024",
      description: [
        "Developed a responsive and user-friendly website for a local business using Next.js and Tailwind CSS.",
        "Implemented SEO best practices to improve search engine visibility and user engagement.",
      ],
      logo: "/images/experience/teknoisland.jpg",
    },
    {
      id: 4,
      title: "Web Developer",
      location: "Think Trend",
      date: "Jun 2025",
      description: [
        "Built full-stack components for a resume builder web app using Next.js, Express.js, and MongoDB and Other frameworks Java Springboot.",
        "Developed intuitive UI components for Anwar Market (Nabeul), a SaaS platform for pet care services, using Next.js, Tailwind CSS, and Ant Design.",
        "Utilized Git, GitHub, and Bitbucket for effective version control and collaborative development workflows.",      ],
      logo: "/images/experience/thinktrend.jpg",
    },
    
  ];

  return (
    <section id="experience">
      <Timeline data={items} />
    </section>
  );
};
