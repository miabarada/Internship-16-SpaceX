import { useParams } from 'react-router-dom'
import styles from './ShipDetailPage.module.scss'
import { useEffect, useState } from 'react'
import { getShip } from '../../api/spacexApi'
import { NotFoundPage } from '../NotFoundPage/NotFoundPage'

export default function ShipDetailPage() {
   const { id } = useParams<{ id: string }>()
   const [ship, setShip] = useState<any>(null)
   const [loading, setLoading] = useState(true)

   useEffect(() => {
      if (!id) return

      async function fetchData() {
         setLoading(true)
         const shipData = await getShip(id!)
         setShip(shipData)

         setLoading(false)
      }

      fetchData()
   }, [id])

   if (loading) return <p>Loading ship details...</p>
   if (!ship) return <NotFoundPage />

   return (
      <div className={styles.shipPage}>
         {ship.image && (
            <img src={ship.image} alt={ship.name} className={styles.patch}/>
         )}

         <div className={styles.info}>
            <h1 className={styles.title}>{ship.name}</h1>
            <p>Active: {ship.active ? "Yes" : "No"}</p>

            {ship.type && (
               <p>Type: {ship.type}</p>
            )}

            {ship.imo && (
               <p>IMO: {ship.imp}</p>
            )}

            {ship.year_built && (
               <p>Year built: {ship.year_built}</p>
            )}

            {ship.home_port && (
               <p>Home port: {ship.home_port}</p>
            )}

            {ship.weight && (
               <p>Weight: {ship.weight}</p>
            )}
         </div>
      </div>
   )
}