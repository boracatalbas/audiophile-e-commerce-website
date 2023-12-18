import "./navbar.scss";
import logo from "../../assets/shared/desktop/logo.svg";
import cart from "../../assets/shared/desktop/icon-cart.svg";
import { Routes, Route, Link } from "react-router-dom";

import Home from "../../Components/Home/home";
import Headphones from "../../Components/Headphones/headphones";
import Speakers from "../../Components/Speakers/speakers";
import Earphones from "../../Components/Earphones/earphones";

const Navbar = () => {
  return (
    <div className="nav">
      <img src={logo} alt="logo" />
      <div className="links">
        <Link to="/">HOME</Link>
        <Link to="/headphones">HEADPHONES</Link>
        <Link to="/speakers">SPEAKERS</Link>
        <Link to="/earphones">EARPHONES</Link>
      </div>

      <img src={cart} alt="cart" className="cart" />
    </div>
  );
};

export default Navbar;
