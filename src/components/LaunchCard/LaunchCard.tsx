import { Link } from "react-router-dom";
import styles from './LaunchCard.module.scss'

export default function LaunchCard({ launch }: any) {
   return (
      <Link to={`/launches/${launch.id}`} className={styles.cardLink}>
         <div className={styles.card}>
            <h2 className={styles.title}>{launch.name} <span className={styles.date}>| {new Date(launch.date_utc).toLocaleDateString()}</span></h2>
            
            {launch.success === true && <p className={styles.label}>Success</p>}
            {launch.success === false && <p className={styles.label}>Failed</p>}
            {launch.upcoming && <p className={styles.label}>Upcoming</p>}
         </div>
      </Link>
   )
}