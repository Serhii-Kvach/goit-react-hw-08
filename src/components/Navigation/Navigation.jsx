import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

const biuldLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav className={css.nav}>
      <NavLink className={biuldLinkClass} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={biuldLinkClass} to="/contacts">
          Phonebook
        </NavLink>
      )}
    </nav>
  );
}
