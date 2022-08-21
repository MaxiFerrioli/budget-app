import { Toolbar } from "../Toolbar/Toolbar";
import { NavLink } from "react-router-dom";

const Navbar = ({ children }) => {
  return (
    <div>
      <Toolbar>
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
      </Toolbar>
      <div>{children}</div>
    </div>
  );
};

export default Navbar;
