import { Link } from 'react-router-dom'
import styles from './ShipCard.module.scss'

export default function ShipCard({ ship }: any) {
   return (
      <Link to={`/ships/${ship.id}`} className={styles.cardLink}>
         {ship.image ? <img src={ship.image} alt={ship.name} className={styles.image}/> : <div className={styles.image}>No image</div>}
         <div className={styles.info}>
            <h2 className={styles.title}>{ship.name}</h2>
            
            {ship.active === true && <p className={styles.label}>Active</p>}
            {ship.active === false && <p className={styles.label}>Inactive</p>}
         </div>
      </Link>
   )
}