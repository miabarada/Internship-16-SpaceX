import { NavLink } from "react-router-dom"
import { ROUTHES } from "../../router/routes"
import styles from "./Navbar.module.scss"

const Navbar = () => {
   return (
      <nav className={styles.nav}>
         <NavLink to={ROUTHES.Home} className={styles.navlink}>Home</NavLink>
         <NavLink to={ROUTHES.Launches} className={styles.navlink}>Launches</NavLink>
         <NavLink to={ROUTHES.Ships} className={styles.navlink}>Ships</NavLink>
      </nav>
   );
};

export default Navbar;