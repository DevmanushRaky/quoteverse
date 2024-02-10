// Navbar.jsx
import { NavLink } from "react-router-dom";
import { RiMenu3Line } from "react-icons/ri";
import { GoHome } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";


export const Navbar = () => {
    return (
        <nav className="navbar justify-content-between mx-2">
            {/* Left side */}
            <NavLink className=" nav-link navbar-brand" to="/">Quotverse</NavLink>

            {/* Middle with space between */}
            <div className="d-flex ">
                <NavLink className="nav-link nav-link1 " to="/listQuotes"><GoHome className="nav-icon"/></NavLink>
                <div className="mx-5"></div>
                <NavLink className="nav-link nav-link1 " to="/likedQuotes"><FaRegHeart className="nav-icon" /></NavLink>
            </div>

            {/* Right side */}
            <NavLink className="nav-link disabled "  ><RiMenu3Line className="nav-icon" /></NavLink>
        </nav>
    );
};
