"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./FoodCard";
import ProjectTag from "./FoodTag";
import { motion, useInView } from "framer-motion";
import pic1 from "../Images/veg/pic1.jpg"
import pic2 from "../Images/veg/pic2.jpg"
import pic3 from "../Images/veg/pic3.jpg"
import pic4 from "../Images/veg/pic4.jpg"
import pic5 from "../Images/veg/pic5.jpg"
import pic6 from "../Images/veg/pic6.jpg"
import pic7 from "../Images/veg/pic7.jpg"
import pic8 from "../Images/veg/pic8.jpg"
import pic9 from "../Images/veg/pic9.jpg"
import pic10 from "../Images/veg/pic10.jpg"

const projectsData = [
  {
    id: 0,
    title: "Special Masala Dosa",
    description: "Course Management Website having Spam Detection & auto Quiz Generator System using ML",
    image: pic1,
    tag: ["All", "Veg"],
    features: ["South Indian", "Breakfast", "Vegetarian"],
  },
  {
    id: 1,
    title: "Rapid Reader",
    description: "News & Books Summarizer website using Next JS, Redis, OpenAI and Gemini API",
    image: pic2,
    tag: ["All", "Veg"],
    features: ["NextJS", "MongoDB", "Redis", "ML", "GeminiAI"],
  },
  {
    id: 2,
    title: "Syntax Valley Blog Website",
    description: "A content management system using Next JS & MongoDB as backend",
    image: pic3,
    tag: ["All", "Veg"],
    features: ["NextJS", "MongoDB", "Tailwind CSS", "AOS"],
  },
  {
    id: 3,
    title: "Dream Tracker using Flutter & Firebase",
    description: "Application that empowers you to achieve your goals, & make smart investments",
    image: pic4,
    tag: ["All", "Veg"],
    features: ["Flutter", "Firebase Authentication", "Firestore"],
  },
  {
    id: 4,
    title: "Code World using HUGO framework",
    description: "Coding blog website having lots of DSA concepts and solution of DSA problems",
    image: pic5,
    tag: ["All", "Veg"],
    features: ["HUGO", "Markdown", "SEO Friendly"],
  },
  {
    id: 5,
    title: "Rhythm using Flutter",
    description: "Open-Source Music App and MP3 player for your entertainment",
    image: pic6,
    tag: ["All", "Veg"],
    features: ["Flutter", "Firebase", "Scraping", "User Friendly UI"],
  },
  {
    id: 6,
    title: "Codeforces 2.0",
    description: "Better UI implementation for codeforces website using HTML, bootstrap css and Codeforces API",
    image: pic7,
    tag: ["All", "Veg"],
    features: ["HTML, CSS, Javascript", "Codeforces API", "Bootstrap"],
  },
  {
    id: 7,
    title: "URL Shortener",
    description: "Short URL generator website using Next JS and MongoDB for storing URL stats",
    image: pic8,
    tag: ["All", "Veg"],
    features: ["NextJS", "TailwindCSS", "MongoDB", "Rest API"],
  },
  {
    id: 8,
    title: "Contest Calendar",
    description: "Mobile appliaction using Flutter that can track all upcoming Contests using API",
    image: pic9,
    tag: ["All", "Veg"],
    features: ["Flutter", "Kontests API", "Minimal UI Design"],
  },
  {
    id: 9,
    title: "Portfolio Website: 1",
    description: "Professional Portfolio Website Utilizing Bootstrap CSS",
    image: pic10,
    tag: ["All", "Veg"],
    features: ["Bootstrap", "HTML", "CSS", "Javascript"],
  },
];

const FoodSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-black mt-4 mb-8 md:mb-12">
        Our Menu
      </h2>
      <div className="text-black flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Veg"
          isSelected={tag === "Veg"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Non-Veg"
          isSelected={tag === "Non-Veg"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-x-3 gap-y-8 md:gap-8 md:mx-10 mx-2">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              features={project.features}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default FoodSection;