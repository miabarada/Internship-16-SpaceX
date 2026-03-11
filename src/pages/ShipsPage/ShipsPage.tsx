import { useSearchParams } from "react-router-dom";
import { useShips } from "../../hooks/useShips";
import { useCallback, useEffect, useRef } from "react";
import ShipCard from "../../components/ShipCard/Shipcard";
import SearchInput from "../../components/SearchInput/SearchInput";
import styles from './ShipsPage.module.scss'

export default function ShipsPage() {
   const [params, setParams] = useSearchParams()
   const search = params.get("search") || ""

   const { ships, loading, hasMore, fetchNext, resetShips } = useShips(search)

   const observer = useRef<IntersectionObserver | null>(null)
   const lastShipRef = useCallback((node: HTMLDivElement | null) => {
      if (loading) return
      if ( observer.current)
         observer.current.disconnect()

      observer.current = new IntersectionObserver(entries => {
         if (entries[0].isIntersecting && hasMore)
            fetchNext()
      })

      if(node)
         observer.current.observe(node)
   }, [loading, hasMore, fetchNext])

   useEffect(() => {
      resetShips()
   }, [search, resetShips])

   function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
      setParams({ search: e.target.value })
   }

   return (
      <div className={styles.shipsPage}>
         <div className={styles.header}>
            <h1 className={styles.title}>Ships</h1>
            <SearchInput placeholder="Search ship..." value={search} onChange={handleSearch}/>
         </div>

         <div className={styles.list}>
            {ships.map((ship, index) => {
               if (index === ships.length - 1) {
                  return <div ref={lastShipRef} key={ship.id}><ShipCard ship={ship}/></div>
               }
               return <ShipCard key={ship.id} ship={ship}/>
            })}
            {loading && <p className={styles.loading}>Loading...</p>}
         </div>
    </div>
   )
}