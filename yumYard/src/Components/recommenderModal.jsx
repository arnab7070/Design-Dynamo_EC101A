import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { FaBrain } from "react-icons/fa6";
import { Drawer } from "@material-tailwind/react";
import Markdown from 'react-markdown'
import toast from 'react-hot-toast'
export default function Sidebar() {
  // State variables for each group of user selections
  const [dietaryPreference, setDietaryPreference] = useState("");
  const [region, setRegion] = useState("");
  const [mealCourse, setMealCourse] = useState("");
  const [occasion, setOccasion] = useState("");
  const [textResponse, setTextResponse] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create an object representing user selections
    const userSelections = {
      dietaryPreference,
      region,
      mealCourse,
      occasion,
    };
    const prompt = `Suggest me some ${mealCourse.toLowerCase()} dishes for ${occasion.toLowerCase()} in ${region.toLowerCase()} indian with ${dietaryPreference.toLowerCase()} dietary preference.`;
    // Log the object representing user selections
    console.log("Prompt: ", prompt);
    // Display a loading toast
    const loadingToast = toast.loading('Fetching AI recommendations...');
    try {
      // Call the API endpoint with the prompt and user selections
      const response = await fetch(
        "https://server-blond-pi.vercel.app/api/foodai",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt }),
        }
      );

      // Parse the response JSON
      const data = await response.json();
      setTextResponse(data);
      // Close the loading toast
      toast.dismiss(loadingToast);
      // Show a success toast
      toast.success('AI Recommendations generated.');
      // Log the API response
      // console.log('API Response:', data);

      // Handle the API response as needed
    } catch (error) {
      console.error("Error calling API:", error);
    }
  };

  const [open, setOpen] = useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <React.Fragment>
      <FaBrain onClick={openDrawer} size={35} color="#7b3f00" />
      {textResponse ? (
        <Drawer open={open}
          placement="left"
          onClose={closeDrawer}
          className="p-4 z-20 overflow-y-scroll text-black"
        >
          <Markdown className={"cursor-text"} children={textResponse.message} />
        </Drawer>
      ) : (
        <Drawer
          open={open}
          placement="left"
          onClose={closeDrawer}
          className="p-4 z-20 overflow-y-scroll"
        >
          <div className="mb-5 font-bold text-yellow-900 text-xl">
            What's On Your Mind
          </div>
          {/* Group 1: Dietary Preferences */}
          <div className="mb-6 flex items-center justify-between text-yellow-900">
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Dietary preferences
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={dietaryPreference}
                onChange={(e) => setDietaryPreference(e.target.value)}
              >
                <FormControlLabel
                  value="vegetarian"
                  control={<Radio />}
                  label="Vegetarian"
                />
                <FormControlLabel
                  value="chinesse"
                  control={<Radio />}
                  label="Chinesse Foods"
                />
                <FormControlLabel
                  value="pescatarian"
                  control={<Radio />}
                  label="Pescatarian"
                />
                <FormControlLabel
                  value="non-vegetarian"
                  control={<Radio />}
                  label="Non-Vegetarian"
                />
              </RadioGroup>
            </FormControl>
          </div>
          {/* Group 2: Region */}
          <div className="mb-6 flex items-center justify-between text-yellow-900">
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Region
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={region}
                onChange={(e) => setRegion(e.target.value)}
              >
                <FormControlLabel
                  value="north"
                  control={<Radio />}
                  label="North Indian"
                />
                <FormControlLabel
                  value="south"
                  control={<Radio />}
                  label="South Indian"
                />
                <FormControlLabel
                  value="east"
                  control={<Radio />}
                  label="East Indian Food"
                />
                <FormControlLabel
                  value="west"
                  control={<Radio />}
                  label="West Indian"
                />
              </RadioGroup>
            </FormControl>
          </div>
          {/* Group 3: Meal Course */}
          <div className="mb-6 flex items-center justify-between text-yellow-900">
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Meal course
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={mealCourse}
                onChange={(e) => setMealCourse(e.target.value)}
              >
                <FormControlLabel
                  value="appetizers"
                  control={<Radio />}
                  label="Appetizers Meals"
                />
                <FormControlLabel
                  value="main_course"
                  control={<Radio />}
                  label="Main Course"
                />
                <FormControlLabel
                  value="desserts"
                  control={<Radio />}
                  label="Dessert Items"
                />
                <FormControlLabel
                  value="beverages"
                  control={<Radio />}
                  label="Beverages"
                />
              </RadioGroup>
            </FormControl>
          </div>
          {/* Group 4: Occasion */}
          <div className="mb-6 flex items-center justify-between text-yellow-900">
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Occasion
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
              >
                <FormControlLabel
                  value="weekday_meal"
                  control={<Radio />}
                  label="Weekday Meal"
                />
                <FormControlLabel
                  value="weekend_indulgence"
                  control={<Radio />}
                  label="Weekend Indulgence"
                />
                <FormControlLabel
                  value="festive_dish"
                  control={<Radio />}
                  label="Festive Dish"
                />
                <FormControlLabel
                  value="celebratory_meal"
                  control={<Radio />}
                  label="Celebratory Meal"
                />
              </RadioGroup>
            </FormControl>
          </div>
          <button
            onClick={handleSubmit}
            className="bg-yellow-500 hover:scale-120  font-bold text-black transition all duration-500 hover:bg-yellow-400 border border-orange-500 px-6 py-3 rounded-md"
          >
            Submit
          </button>
        </Drawer>
      )}
    </React.Fragment>
  );
}
