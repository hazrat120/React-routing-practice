import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            style={({ isActive, isPending, isTransitioning }) => {
              return {
                color: isActive ? "red" : "",
                fontWeight: isPending ? "bold" : "black",
                viewTransitionName: isTransitioning ? "slide" : "",
              };
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            style={({ isActive, isPending, isTransitioning }) => {
              return {
                color: isActive ? "red" : "",
                fontWeight: isPending ? "bold" : "black",
                viewTransitionName: isTransitioning ? "slide" : "",
              };
            }}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blogs"
            style={({ isActive, isPending, isTransitioning }) => {
              return {
                color: isActive ? "red" : "",
                fontWeight: isPending ? "bold" : "black",
                viewTransitionName: isTransitioning ? "slide" : "",
              };
            }}
          >
            Blogs
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/faq"
            style={({ isActive, isPending, isTransitioning }) => {
              return {
                color: isActive ? "red" : "",
                fontWeight: isPending ? "bold" : "black",
                viewTransitionName: isTransitioning ? "slide" : "",
              };
            }}
          >
            Faq
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            style={({ isActive, isPending, isTransitioning }) => {
              return {
                color: isActive ? "red" : "",
                fontWeight: isPending ? "bold" : "black",
                viewTransitionName: isTransitioning ? "slide" : "",
              };
            }}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/weare"
            style={({ isActive, isPending, isTransitioning }) => {
              return {
                color: isActive ? "red" : "",
                fontWeight: isPending ? "bold" : "black",
                viewTransitionName: isTransitioning ? "slide" : "",
              };
            }}
          >
            Our Tem
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/users"
            style={({ isActive, isPending, isTransitioning }) => {
              return {
                color: isActive ? "red" : "",
                fontWeight: isPending ? "bold" : "black",
                viewTransitionName: isTransitioning ? "slide" : "",
              };
            }}
          >
            Users
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
