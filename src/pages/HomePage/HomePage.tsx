import { useEffect, useState } from "react"
import { getCompanyInfo, getNextLaunch } from "../../api/spacexApi"
import { getCountdown } from "../../utils/countdown"

function HomePage() {
   const [launch, setLaunch] = useState<any>(null)
   const [company, setCompany] = useState<any>(null)
   const [countdown, setCountdown] = useState<any>(null)

   useEffect(() => {
      getNextLaunch().then(setLaunch)
      getCompanyInfo().then(setCompany)
   }, [])

   useEffect(() => {
      if (!launch) return
      const interval = setInterval(()=> {
         setCountdown(getCountdown(launch.date_utc))
      }, 1000)

      return () => clearInterval(interval)
   }, [launch])

   if (!launch || !company) {
      return <p>Loading...</p>
   }

   return (
      <div>
         <section>
            <h1>Next launch</h1>

            {countdown && (
               <h2>{countdown.days}d {countdown.hours}h {countdown.minutes}m {countdown.seconds}s</h2>
            )}

            <p>{launch.name}</p>
         </section>

         <section>
            <h1>About SpaceX</h1>
            <p>{company.summary}</p>
            <div>
               <p>Founded: {company.founded}</p>
               <p>Founder: {company.founder}</p>
               <p>Employees: {company.employees}</p>
            </div>
         </section>
      </div>
   )
}

export default HomePage
