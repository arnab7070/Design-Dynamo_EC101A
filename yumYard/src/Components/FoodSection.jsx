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
    price: "150/-",
    image: pic1,
    tag: ["All", "Veg"],
    features: ["South Indian", "Breakfast"],
  },
  {
    id: 1,
    title: "Rapid Reader",
    price: "220",
    image: pic2,
    tag: ["All", "Veg"],
    features: ["NextJS", "MongoDB", "Redis"],
  },
  {
    id: 2,
    title: "Syntax Valley Blog Website",
    price: "150",
    image: pic3,
    tag: ["All", "Veg"],
    features: ["NextJS", "MongoDB", "Tailwind CSS"],
  },
  {
    id: 3,
    title: "Idle",
    price: "140",
    image: pic4,
    tag: ["All", "Veg"],
    features: ["Flutter", "Firebase Authentication"],
  },
  {
    id: 4,
    title: "Idle",
    price: "120",
    image: pic5,
    tag: ["All", "Veg"],
    features: ["HUGO", "Markdown", "SEO Friendly"],
  },
  {
    id: 5,
    title: "Fafra",
    price: "100",
    image: pic6,
    tag: ["All", "Veg"],
    features: ["Flutter", "Firebase", "Scraping"],
  },
  {
    id: 6,
    title: "Bisi belebath",
    price: "300",
    image: pic7,
    tag: ["All", "Veg"],
    features: ["HTML, CSS, Javascript", "Codeforces API"],
  },
  {
    id: 7,
    title: "Paneer Butter Masala",
    price: "250",
    image: pic8,
    tag: ["All", "Veg"],
    features: ["NextJS", "TailwindCSS", "MongoDB"],
  },
  {
    id: 8,
    title: "Puri",
    price: "60",
    image: pic9,
    tag: ["All", "Veg"],
    features: ["Flutter", "Kontests API"],
  },
  {
    id: 9,
    title: "Samosa",
    price: "40",
    image: pic10,
    tag: ["All", "Veg"],
    features: ["Bootstrap", "HTML", "CSS"],
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
      <h2 className="text-center text-5xl font-bold text-orange-500 mt-4 mb-8 md:mb-12 pt-60">
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
      <ul ref={ref} className="grid md:grid-cols-4 gap-x-3 gap-y-8 md:gap-8 md:mx-10 mx-2">
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
              price={project.price}
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
