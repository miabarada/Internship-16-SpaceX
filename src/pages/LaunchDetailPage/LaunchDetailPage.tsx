import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getLaunch, getRocket } from "../../api/spacexApi";
import styles from './LaunchDetailPage.module.scss'
import Button from "../../components/Button/Button";
import { NotFoundPage } from "../NotFoundPage/NotFoundPage";

export default function LaunchDetailPage() {
   const { id } = useParams<{ id: string }>()
   const [launch, setLaunch] = useState<any>(null)
   const [rocket, setRocket] = useState<any>(null)
   const [loading, setLoading] = useState(true)

   useEffect(() => {
      if (!id) return

      async function fetchData() {
         setLoading(true)
         const launchData = await getLaunch(id!)
         setLaunch(launchData)

         if (launchData.rocket) {
            const rocketData = await getRocket(launchData.rocket)
            setRocket(rocketData)
         }

         setLoading(false)
      }

      fetchData()
   }, [id])

   if (loading) return <p>Loading..</p>
   if (!launch) return <NotFoundPage />

   return (
      <div className={styles.launchPage}>
         {launch.links?.patch?.large && (
            <img src={launch.links.patch.large} alt={launch.name} className={styles.patch}/>
         )}

         <div className={styles.info}>
            <h1 className={styles.title}>{launch.name}</h1>
            <p>Date: {new Date(launch.date_utc).toLocaleDateString()}</p>

            {rocket && (
               <p>Rocket: {rocket.name}</p>
            )}

            {launch.details && (
               <p>Details: {launch.details}</p>
            )}

            {launch.failures && launch.failures.length > 0 && (
               <div>
                  <p>Failures:</p>
                  <ul className={styles.failures}>
                     {launch.failures.map((f: any, index: number) => (
                        <li key={index}>
                           {f.reason} at {f.time} s
                        </li>
                     ))}
                  </ul>
               </div>
            )}

            {launch.links?.webcast && (
                  <Button href={launch.links.webcast} target="_blank" rel="noreferrer">Watch video</Button>
            )}
         </div>
      </div>
   )
}