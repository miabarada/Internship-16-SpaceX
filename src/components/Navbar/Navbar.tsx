import { NavLink } from "react-router-dom"
import { ROUTES } from "../../router/routes"
import styles from "./Navbar.module.scss"

const Navbar = () => {
   return (
      <nav className={styles.nav}>
         <NavLink to={ROUTES.Home}>Home</NavLink>
         <NavLink to={ROUTES.Launches}>Launches</NavLink>
         <NavLink to={ROUTES.Ships}>Ships</NavLink>
      </nav>
   );
};

export default Navbar;