import React from "react";

const Food = () => {

  const foods = [
    'https://i.pinimg.com/564x/50/01/0f/50010f51c84e814f5459e0cc57163c2b.jpg',
    'https://i.pinimg.com/564x/0f/46/8d/0f468d2470c535b267c33e785bc14705.jpg',
    'https://i.pinimg.com/564x/e3/ac/a4/e3aca4310acc6d2a0712baf724e64041.jpg',
    'https://i.pinimg.com/564x/65/f3/61/65f36115c796d9b788114c91edb6567a.jpg',
    'https://i.pinimg.com/736x/09/d6/9e/09d69e0d304b590ba97ce2e7b4b68d46.jpg',
    'https://i.pinimg.com/564x/31/9f/59/319f5908f05f1007ca101fc58891260e.jpg',
    'https://i.pinimg.com/564x/fa/eb/74/faeb74269582f19e56242c832ae78faa.jpg',
    'https://i.pinimg.com/564x/8a/a7/e1/8aa7e1031ee43685b9a7d8de1568c583.jpg',
  ]

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex items-center">
        <div className="flex items-center justify-between w-full overflow-x-auto">
          <button
            className="bg-gray-200 rounded-full p-2"
            onClick={() => {
              document.getElementById("food-container").scrollLeft -= 300;
            }}
          >
            {"<"}
          </button>
          <div
            id="food-container"
            className="flex space-x-4 flex-no-wrap overflow-x-auto"
          >
            {foods.map((_, index) => (
              <div
                key={foods[index]}
                className="lg:w-1/4 md:w-1/2 p-4"
                style={{ minWidth: "250px" }}
              >
                <div className="h-64 bg-gray-200">
                  <img src={_} alt="" className="h-64 w-auto"/>
                </div>
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
