import "../../../css/ourprojects.css";
import { useEffect, useState } from "react";
import { fetchCategories } from "../../../lib/fetchAPI";

export function OurProjectsDropdown({ setChosenCategory }) {
  const [categories, setCategories] = useState([]);

  useEffect(async () => {
    setCategories(await fetchCategories());
  }, []);

  function handleChange(e) {
    const val = e.target.value;
    setChosenCategory(val);
  }

  /* Component letting user filter non-profit projects based on category in a dropdown */
  return (
    <div>
      <div className="our-projects-dd-wrapper">
        <div className="our-projects-dd-list">
          <select
            className={"dropdown"}
            onChange={(e) => {
              handleChange(e);
            }}
          >
            <option className={"our-projects-dd-option"} value="All categories">
              All categories
            </option>
            {categories.map((category) => (
              <option
                className={"our-projects-dd-option"}
                key={category.category_id}
                value={category.category_id}
              >
                {category.category_name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
