//Author:Supratik De//
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import HighlightText from "./Highlighttext";
import CTAButton from "./Button";
const LearningGridArray = [
  {
    order: -1,
    heading: "One-stop shop for exploring the",
    highlightText: " culinary delights of your city",
    description:
      "We're passionate about connecting food lovers with the best restaurants and making it easier than ever to discover, order, and enjoy delicious meals.",
    BtnText: "Learn More",
    BtnLink: "/SignUp",
  },
  {
    order: 1,
    heading: "Extensive Restaurant Directory",
    description:
      "Search from a vast selection of restaurants, categorized by cuisine type, location, price range, dietary restrictions, and more.",
  },
  {
    order: 2,
    heading: "Detailed Restaurant Information",
    description:
      "Get accurate menus, high-quality photos, user reviews, and ratings to make informed decisions.",
  },
  {
    order: 3,
    heading: "Seamless Ordering",
    description:
      "Order directly from your favorite restaurants and enjoy hassle-free delivery (if available in your location).",
  },
  {
    order: 4,
    heading: "Personalized Experience",
    description:
      "Create an account to manage your preferences, track past orders, and discover personalized recommendations based on your food interests.",
  },
  {
    order: 5,
    heading: "Our Commitment",
    description:
      "YumYard is dedicated to providing a user-friendly platform, accurate information, and a positive experience for both users and restaurants. We strive to continuously improve our service and support the ever-evolving restaurant industry.",
  },
];

const LearningGrid = () => {
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 400,
      easing: "ease-in-back",
    });
  }, []);

  return (
    <div className="grid  grid-col-1 lg:grid-cols-4 mb-10 p-5 lg:w-fit">
      {LearningGridArray.map((card, index) => {
        return (
          <div
            key={index}
            data-aos='fade-down'
            className={`${index === 0 && "lg:col-span-2 lg:h-[280px] p-5"}
                ${
                  card.order % 2 === 1
                    ? "bg-orange-300 lg:h-[280px] p-5"
                    : "bg-primary-body lg:h-[280px] p-5"
                }
                ${card.order === 3 && "lg:col-start-2"}
                ${card.order < 0 && "bg-transparent"}
                `}
          >
            {card.order < 0 ? (
              <div className="lg:w-[90%] flex flex-col pb-5 gap-3">
                <div className="text-4xl font-semibold text-black">
                  {card.heading}
                  <HighlightText text={card.highlightText} />
                </div>
                <p className="font-medium text-black text-xl ">
                  {card.description}
                </p>
                <div className="w-fit mt-4">
                  <CTAButton active={true} linkto={card.BtnLink}>
                    {card.BtnText}
                  </CTAButton>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-8 p-7">
                <h1 className="text-black text-lg font-extrabold">
                  {card.heading}
                </h1>
                <p className="text-black font-bold text-[15px]">
                  {card.description}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default LearningGrid;
