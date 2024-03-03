import React from "react";

const Food = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex items-center ">
        <div className="flex items-center justify-between w-full max-w-screen-lg overflow-x-auto">
          {/* Left arrow button */}
          <button
            className="bg-gray-200 rounded-full p-2"
            onClick={() => {
              document.getElementById("food-container").scrollLeft -= 300;
            }}
          >
            {"<"}
          </button>

          {/* Items container */}
          <div
            id="food-container"
            className="flex space-x-4 flex-no-wrap overflow-x-auto"
          >
            {/* Your item cards */}
            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className="lg:w-1/4 md:w-1/2 p-4"
                style={{ minWidth: "250px" }}
              >
                {/* Your item card */}
                <div className="h-64 bg-gray-200">Item {index + 1}</div>
              </div>
            ))}
          </div>

          {/* Right arrow button */}
          <button
            className="bg-gray-200 rounded-full p-2"
            onClick={() => {
              document.getElementById("food-container").scrollLeft += 300;
            }}
          >
            {">"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Food;
