'use client'

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";
import { textVariant } from "@/utils/motion";

import { Button } from "@/components/ui/button";
import Link from "next/link";
// Type for each experience item
interface Experience {
  title: string;
  company_name: string;
  icon?: string;  // Assuming you might use icons later
  iconBg: string;
  points: string[];
}

const experiences: Experience[] = [
  {
    title: "Web Development",
    company_name: "Maximilian Schwarzmüller",
    iconBg: "#E6DEDD",
    icon: '/code.png',
    points: [
     " Build high-performance, scalable, and responsive websites using React.js, Next.js, and Tailwind CSS.",
     " Implement server-side rendering (SSR) & static site generation (SSG) for improved SEO and performance.",
      " Integrate REST APIs & GraphQL to enhance web functionality."
      ] },
        {
    title: "AI Integration",
    company_name: "Javascript Mastery",
    iconBg: "#E6DEDD",
    icon: '/ai.png',
    points: [
      "Implement AI-driven features using OpenAI, TensorFlow.js, and AI APIs.",
      "Automate workflows with AI-powered chatbots & recommendation engines.",
      "Optimize user experience with predictive analytics and AI-enhanced UI elements."

    ],
  },
  {
    title: "E-commerce Solutions",
    company_name: "Meta",
    iconBg: "#E6DEDD",
    icon: '/ecommerce.png',
    points: [
        "Develop fast, secure, and scalable online stores using Next.js & Shopify API.",
        "Implement payment gateways, inventory management, and seamless checkout experiences.",
        "Optimize SEO and performance to drive more sales."
    ],
  },
  {
    title: "UI/UX design",
    company_name: "Meta",
    icon: '/ui-ux.png',
    iconBg: "#E6DEDD",
    points: [
      "Create modern, user-friendly, and responsive UI designs.",
      "Develop interactive prototypes with Figma & Adobe XD.",
      "Ensure accessibility & usability for all user types."
    ],
  },
  {
    title: " Performance Optimization & SEO",
    company_name: "Meta",
    icon: '/optimizing.png',
    iconBg: "#E6DEDD",
    points: [
      "Optimize website speed, loading times, and Core Web Vitals.",
      "Implement lazy loading, caching, and code splitting for improved performance.",
      "Enhance SEO strategies with structured data, metadata, and schema optimization."
    ],
  },
  {
    title: " Maintenance & Support",
    icon: '/high-performance.png',
    company_name: "Meta",
    iconBg: "#E6DEDD",
    points: [
      "Provide regular updates, security patches, and bug fixes.",
      "Ensure 24/7 uptime monitoring & performance checks.",
      "Offer long-term website maintenance and support plans."
    ],
  },
];

const ExperienceCard: React.FC<{ experience: Experience }> = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#34343465", color: "#9a9696" }}
      contentArrowStyle={{ borderRight: "6px solid #232631" }}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            className="w-[60%] h-[60%] object-cover"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white/90 text-[24px] font-bold">{experience.title}</h3>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li key={`experience-point-${index}`} className="text-white-100 text-[14px] pl-1 tracking-wider">
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Page: React.FC = () => {
  return (
    <section className="bg-[#000000] flex justify-center items-center">
      <div className="max-w-5xl mx-5 pt-24">
        <motion.div variants={textVariant(0.2)} className="max-w-3xl ml-12">
          <h2 className="text-white font-bold text-3xl">Empowering Your Digital Presence.</h2>
          <p className="text-white/70">Explore the services I offer, from web development to AI-powered solutions, ensuring high-performance, scalable, and future-proof digital experiences.</p>

        </motion.div>

        <div className="mt-20 flex flex-col">
          <VerticalTimeline lineColor="#cbc8cb7b" >

            {experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} />
            ))}
          </VerticalTimeline>
        </div>
        <div className="flex flex-col items-center gap-5 py-16">
          <h2 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-gray-300 via-white to-gray-300 text-transparent bg-clip-text text-center">
            Let's Build Something Amazing Together
          </h2>

          <Button className="bg-[#26bdee] text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-blue-500/20 transition-transform duration-300 hover:scale-105 hover:bg-[#1ca3d0]">
            <Link href="/Contact">
              Get in Touch
            </Link>
          </Button>
        </div>


      </div>
    </section>
  );
};


export default Page;
