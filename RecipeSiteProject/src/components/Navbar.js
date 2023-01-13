import { NavLink, Link } from "react-router-dom";
import "../App.css"
import './Navbar.css'

const Navbar = () => {
  return (
    <>
    <div className="navbar">
      <div className="nav1">
        <Link to="/"><img style={{ width: "70px" }} className="logo" src='https://t4.ftcdn.net/jpg/00/95/92/63/360_F_95926359_sWnajmdTAkNJUBPTMNaIxcR130DMbauK.jpg' alt="logo" /></Link>
        <Link style={{textDecoration:"none", color:"black"}} to="/"><h3 className="title">HD Kitchen</h3></Link>
        <ul className="links">
          <NavLink className="nlink"  to="/">Home</NavLink>
          <NavLink className="nlink"  to="/diet">Diet</NavLink>
          <NavLink className="nlink"  to="/ingredients">Ingredients</NavLink>
        </ul>
      </div>
      <div className="nav2">
      <ul className="links">

        <NavLink style={{textDecoration:"none", color:"black"}} to="/breakfast">Breakfast</NavLink>
        <NavLink style={{textDecoration:"none", color:"black"}} to="/appetizer">Appetizer/Salade</NavLink>
        <NavLink style={{textDecoration:"none", color:"black"}} to="/main">Main Course</NavLink>
        <NavLink style={{textDecoration:"none", color:"black"}} to="/dessert">Dessert</NavLink>
        <NavLink style={{textDecoration:"none", color:"black"}} to="/drink">Drink</NavLink>
        </ul>

      </div>
    </div>
    </>
  );
};

export default Navbar;
