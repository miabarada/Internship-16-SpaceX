import Navbar from "../Navbar/Navbar"
import styles from './Layout.module.scss'

type LayoutProps = {
   children: React.ReactNode
}

export function Layout({children}: LayoutProps) {
   return (
      <div>
         <header>
            <h2>SpaceX</h2>
            <Navbar />
         </header>
         <main className={styles.main}>{children}</main>
      </div>
   )
}