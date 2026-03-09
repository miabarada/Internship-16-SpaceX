import { NavLink } from "react-router-dom"
import { ROUTHES } from "../../router/routes"
import styles from "./Navbar.module.scss"

const Navbar = () => {
   return (
      <nav className={styles.nav}>
         <NavLink to={ROUTHES.Home}>Home</NavLink>
         <NavLink to={ROUTHES.Launches}>Launches</NavLink>
         <NavLink to={ROUTHES.Ships}>Ships</NavLink>
      </nav>
   );
};

export default Navbar;