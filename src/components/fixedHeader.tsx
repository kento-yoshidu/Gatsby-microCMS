import * as React from "react"

import { Link } from "gatsby"

import * as Styles from "../styles/fixedHeader.module.scss"

const FixedHeader: React.VFC = () => {
  return (
    <header className={Styles.fixedHeader}>
      <h1>
        <Link to="/">
          Gatsby-microCMS-Site
        </Link>
      </h1>
    </header>
  )
}

export default FixedHeader