import { NavLink } from "react-router-dom"
import { ROUTHES } from "../../router/routes"
import styles from "./Navbar.module.scss"
import { useTheme } from "../../context/ThemeContext"

const Navbar = () => {
   const { theme, toggleTheme } = useTheme()
   return (
      <nav className={styles.nav}>
         <NavLink to={ROUTHES.Home} className={styles.navlink}>Home</NavLink>
         <NavLink to={ROUTHES.Launches} className={styles.navlink}>Launches</NavLink>
         <NavLink to={ROUTHES.Ships} className={styles.navlink}>Ships</NavLink>
         <button onClick={toggleTheme} className={styles.navlink}>
            {theme === "light" ? "Dark" : "Light"} Mode
         </button>
      </nav>
   );
};

export default Navbar;