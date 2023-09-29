import React from 'react'
import styles from './Topbar.module.css'
import { Link } from 'react-router-dom'

function Topbar() {
  return (
    <div className={styles.topBarContainer}>
                <Link className={styles.linkDecoration} to={"/view"}>

            View Your Cards
        </Link>
        {/*<Link className={styles.linkDecoration} to={"/edit"}>

         
            Edit Your Cards
 
  </Link>*/}
    </div>
  )
}

export default Topbar