import { useEffect, useState } from "react";
import { getLaunches } from "../api/spacexApi";

export function useLaunches (page: number, search: string, filter:string) {
   const [data, setData] = useState<any>(null)
   const [loading, setLoading] = useState(true)

   useEffect(() => {
      setLoading(true)

      getLaunches(page, search, filter).then((res) => {
         setData(res)
         setLoading(false)
      })
   }, [page, search, filter])

   return {data, loading}
}