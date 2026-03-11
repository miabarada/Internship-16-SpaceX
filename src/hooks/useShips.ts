import { useCallback, useEffect, useState } from "react"
import { getShips } from "../api/spacexApi"

export function useShips(search: string) {
   const [ships, setShips] = useState<any[]>([])
   const [page, setPage] = useState(1)
   const [hasMore, setHasMore] = useState(true)
   const [loading, setLoading] = useState(true)

   const resetShips = useCallback(() => {
      setShips([])
      setPage(1)
      setHasMore(true)
   }, [])

   useEffect(() => {
      setLoading(true)
      getShips(page, search).then(res => {
         setShips(prev => page === 1 ? res.docs : [...prev, ...res.docs])
         setHasMore(res.hasNextPage)
         setLoading(false)
      })
   }, [page, search])

   const fetchNext = useCallback(() => {
      if (hasMore) setPage (prev => prev+1)
   }, [hasMore])

   return { ships, loading, hasMore, fetchNext, resetShips}
}