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
import pic11 from "../Images/non veg/pic1.jpg"
import pic12 from "../Images/non veg/pic2.jpg"
import pic13 from "../Images/non veg/pic3.jpg"
import pic14 from "../Images/non veg/pic4.jpg"
import pic15 from "../Images/non veg/pic5.jpg"
import pic16 from "../Images/non veg/pic6.jpg"
import pic17 from "../Images/non veg/pic7.jpg"
import pic18 from "../Images/non veg/pic8.jpg"
import pic19 from "../Images/non veg/pic9.jpg"
import pic20 from "../Images/non veg/pic10.jpg"

const projectsData = [
  {
    id: 1,
    title: "Matar Paneer",
    price: "220",
    image: pic2,
    tag: ["All", "Veg"],
    features: ["North Indian", "Gravy"],
  },
  {
    id: 2,
    title: "Peas Kachodi",
    price: "150",
    image: pic3,
    tag: ["All", "Veg"],
    features: ["Starter"],
  },
  {
    id: 0,
    title: "Special Masala Dosa",
    price: "150",
    image: pic1,
    tag: ["All", "Veg"],
    features: ["South Indian", "Breakfast"],
  },
  {
    id: 3,
    title: "Idli",
    price: "140",
    image: pic4,
    tag: ["All", "Veg"],
    features: ["South Indian", "Breakfast"],
  },

  {
    id: 5,
    title: "Fafda",
    price: "100",
    image: pic6,
    tag: ["All", "Veg"],
    features: ["Gujrati", "Breakfast"],
  },
  {
    id: 6,
    title: "Bisi belebath",
    price: "300",
    image: pic7,
    tag: ["All", "Veg"],
    features: ["South Indian", "Breakfast"],
  },
  {
    id: 7,
    title: "Paneer Butter Masala",
    price: "250",
    image: pic8,
    tag: ["All", "Veg"],
    features: ["North Indian", "Gravy"],
  },
  {
    id: 8,
    title: "Puri",
    price: "60",
    image: pic9,
    tag: ["All", "Veg"],
    features: ["Breakfast"],
  },
  {
    id: 4,
    title: "Dhokla",
    price: "120",
    image: pic5,
    tag: ["All", "Veg"],
    features: ["Gujrati", "Breakfast"],
  },

  {
    id: 10,
    title: "Mutton Kosha",
    price: "340",
    image: pic11,
    tag: ["All", "Non-Veg"],
    features: ["Non Veg", "Gravy"],
  },
  {
    id: 11,
    title: "Fish Kalia",
    price: "150",
    image: pic12,
    tag: ["All", "Non-Veg"],
    features: ["Non Veg", "Main Course"],
  },
  {
    id: 9,
    title: "Samosa",
    price: "40",
    image: pic10,
    tag: ["All", "Veg"],
    features: ["Snacks"],
  },
  {
    id: 12,
    title: "Chicken Rogan Josh",
    price: "180",
    image: pic13,
    tag: ["All", "Non-Veg"],
    features: ["Non Veg", "Main Course"],
  },

  {
    id: 14,
    title: "Hyderabadi Chicken Biryani",
    price: "450",
    image: pic15,
    tag: ["All", "Non-Veg"],
    features: ["Non Veg", "Main Course"],
  },
  {
    id: 15,
    title: "Mutton Rogan Josh",
    price: "400",
    image: pic16,
    tag: ["All", "Non-Veg"],
    features: ["Non Veg", "Main Course"],
  },
  {
    id: 13,
    title: "Pomplete Fish Roast",
    price: "350",
    image: pic14,
    tag: ["All", "Non-Veg"],
    features: ["Non Veg", "Main Course"],
  },
  {
    id: 16,
    title: "Chicken Munchurian",
    price: "330",
    image: pic17,
    tag: ["All", "Non-Veg"],
    features: ["Non Veg", "Main Course"],
  },
  {
    id: 17,
    title: "Egg Curry",
    price: "300",
    image: pic18,
    tag: ["All", "Non-Veg"],
    features: ["Non Veg", "Main Course", "Gravy"],
  },
  {
    id: 18,
    title: "Baked pork chops",
    price: "200",
    image: pic19,
    tag: ["All", "Non-Veg"],
    features: ["Non Veg", "Starter"],
  },
  {
    id: 19,
    title: "Chicken Cutlet",
    price: "130",
    image: pic20,
    tag: ["All", "Non-Veg"],
    features: ["Non Veg", "Starter"],
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
      <h2 id='menu' className="text-center text-5xl font-bold text-orange-500 mt-4 mb-8 md:mb-12 pt-10">
        What's On your Mind
      </h2>
      <div className="text-black flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Non-Veg"
          isSelected={tag === "Non-Veg"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Veg"
          isSelected={tag === "Veg"}
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
