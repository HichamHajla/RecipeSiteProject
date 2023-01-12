import { NavLink } from "react-router-dom";
import "../App.css"
import logo from "../assets/singe.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav1">
        <img style={{ width: "70px" }} className="logo" src={logo} alt="logo" />
        <h3 className="title">HD-Kitchen</h3>
        <p className="links">
          <NavLink style={{textDecoration:"none", color:"black"}} to="/">Home</NavLink>
          <NavLink style={{textDecoration:"none", color:"black"}} to="/ingredients">Inregients</NavLink>
          <NavLink style={{textDecoration:"none", color:"black"}} to="/diet">Diet</NavLink>
          <NavLink style={{textDecoration:"none", color:"black"}} to="/cuisine">Cuisine</NavLink>
        </p>
      </div>
      <div className="nav2">
      <p>
        <NavLink style={{textDecoration:"none", color:"black"}} to="/breakfast">Breakfast</NavLink>
        <NavLink style={{textDecoration:"none", color:"black"}} to="/appetizer">Appetizer/Salade</NavLink>
        <NavLink style={{textDecoration:"none", color:"black"}} to="/main">Main Course</NavLink>
        <NavLink style={{textDecoration:"none", color:"black"}} to="/dessert">Dessert</NavLink>
        <NavLink style={{textDecoration:"none", color:"black"}} to="/drink">Drink</NavLink>
      </p>
      </div>
    </div>
  );
};

export default Navbar;
