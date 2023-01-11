import { NavLink } from "react-router-dom";
import logo from "../assets/singe.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav1">
        <img style={{ width: "70px" }} className="logo" src={logo} alt="logo" />
        <h3 className="title">HD'Recipes</h3>
        <p className="links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/ingredients">Inregients</NavLink>
          <NavLink to="/diet">Diet</NavLink>
          <NavLink to="/cuisine">Cuisine</NavLink>
        </p>
      </div>
      <div className="nav2">
        <NavLink to="/breakfast">Breakfast</NavLink>
        <NavLink to="/appetizer">Appetizer/Salade</NavLink>
        <NavLink to="/main">Main Course</NavLink>
        <NavLink to="/dessert">Dessert</NavLink>
        <NavLink to="/drink">Drink</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
