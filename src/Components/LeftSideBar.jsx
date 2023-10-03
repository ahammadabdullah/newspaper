import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideBar = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <h3>All Category</h3>
      <ul className="text-center space-y-3">
        {categories.map((category) => (
          <li key={category.id}>
            <NavLink to={`/category/${category.id}`}>{category.name}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftSideBar;
