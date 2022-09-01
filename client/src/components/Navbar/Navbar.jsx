import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div>Budget app</div>
      <nav>
        <ul>
          <li>
            <NavLink exact={true} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/operations">Operations</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
