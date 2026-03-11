import { useSearchParams } from "react-router-dom"
import { useLaunches } from "../../hooks/useLaunches"
import LaunchCard from "../../components/LaunchCard/LaunchCard"
import styles from './LaunchesPage.module.scss'
import Button from "../../components/Button/Button"
import SearchInput from "../../components/SearchInput/SearchInput"
import FilterSelect from "../../components/FilterSelect/FilterSelect"

export default function LaunchesPage() {
   const [params, setParams] = useSearchParams()

   const page = Number(params.get("page")) || 1
   const search = params.get("search") || ""
   const filter = params.get("filter") || ""

   const { data, loading } = useLaunches(page, search, filter)

   function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
      setParams({ search: e.target.value, filter, page: "1"})
   }

   function handleFilter(e: React.ChangeEvent<HTMLSelectElement>) {
      setParams({ search, filter: e.target.value, page: "1"})
   }

   function nextPage() {
      setParams({ search, filter, page: String(page + 1) })
   }

   function prevPage() {
      setParams({ search, filter, page: String(page - 1)})
   }

   if (loading) return <p>Loading...</p>

   return (
      <div className={styles.launchesPage}>
         <div className={styles.header}>
            <h1 className={styles.title}>Launches</h1>
            <div className={styles.filters}>
               <SearchInput placeholder="Search launch..." value={search} onChange={handleSearch}/>
               <FilterSelect 
                  value={filter} 
                  onChange={handleFilter} 
                  options={[
                     { label: "All", value: "" },
                     { label: "Success", value: "success" },
                     { label: "Failed", value: "failed" },
                     { label: "Upcoming", value: "upcoming" },
                  ]}
                  />
            </div>
         </div>

         <div>
            {data.docs.map((launch: any) => (<LaunchCard key={launch.id} launch={launch}/>))}
         </div>

         <div className={styles.pageButtons}>
            <Button disabled={page === 1} onClick={prevPage}>Previous</Button>
            <Button disabled={!data.hasNextPage} onClick={nextPage}>Next</Button>
         </div>
      </div>
   )
}