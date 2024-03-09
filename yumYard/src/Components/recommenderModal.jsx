import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { FaBrain } from "react-icons/fa6";
import { useState } from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";

export default function Sidebar() {
  const [selectedValues, setSelectedValues] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Gather selected values from each RadioGroup
    const dietaryPreferences = selectedValues.filter(
      (value) =>
        value === 'vegetarian' ||
        value === 'vegan' ||
        value === 'pescatarian' ||
        value === 'non-vegetarian'
    );

    const region = selectedValues.filter(
      (value) =>
        value === 'north' || value === 'south' || value === 'east' || value === 'west'
    );

    const mealCourse = selectedValues.filter(
      (value) =>
        value === 'appetizers' ||
        value === 'main_course' ||
        value === 'desserts' ||
        value === 'beverages'
    );

    const occasion = selectedValues.filter(
      (value) =>
        value === 'weekday_meal' ||
        value === 'weekend_indulgence' ||
        value === 'festive_dish' ||
        value === 'celebratory_meal'
    );

    // Log the selected values to the console
    console.log('Dietary Preferences:', dietaryPreferences);
    console.log('Region:', region);
    console.log('Meal Course:', mealCourse);
    console.log('Occasion:', occasion);
  };
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <React.Fragment>
      <FaBrain onClick={openDrawer} size={35} color="#7b3f00" />
      <Drawer
        open={open}
        placement="left"
        onClose={closeDrawer}
        className="p-4 z-20"
      >
        <div className="mb-6 flex items-center justify-between text-yellow-900">
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Dietary preferences
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              onChange={handleSubmit}
            >
              <FormControlLabel
                value="vegeterain"
                control={<Radio />}
                label="Vegetarian"
              />
              <FormControlLabel
                value="vegan"
                control={<Radio />}
                label="Vegan"
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

        <div className="mb-6 flex items-center justify-between text-yellow-900">
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Region
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              onChange={handleSubmit}
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
                label="East Indian"
              />
              <FormControlLabel
                value="west"
                control={<Radio />}
                label="West Indian"
              />
            </RadioGroup>
          </FormControl>
        </div>

        <div className="mb-6 flex items-center justify-between text-yellow-900">
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Meal course
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              onChange={handleSubmit}
            >
              <FormControlLabel
                value="appetizers"
                control={<Radio />}
                label="Appetizers"
              />
              <FormControlLabel
                value="main_course"
                control={<Radio />}
                label="Main Course"
              />
              <FormControlLabel
                value="desserts"
                control={<Radio />}
                label="Desserts"
              />
              <FormControlLabel
                value="beverages"
                control={<Radio />}
                label="Beverages
          "
              />
            </RadioGroup>
          </FormControl>
        </div>

        <div className="mb-6 flex items-center justify-between text-yellow-900">
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Occasion
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              onChange={handleSubmit}
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
                value="celebrity_meal"
                control={<Radio />}
                label="Celebratory Meal"
              />
            </RadioGroup>
          </FormControl>
        </div>
      </Drawer>
    </React.Fragment>
  );
}
