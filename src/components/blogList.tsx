import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import LinkButton from "./linkButton"

import * as Styles from "../styles/blogList.module.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndo } from "@fortawesome/free-solid-svg-icons"

import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

const BlogList: React.VFC = () =>{ 

  const { allMicrocmsBlog } = useStaticQuery<GatsbyTypes.BlogListQuery>(
    graphql`
      query BlogList {
        allMicrocmsBlog {
          edges {
            node {
              title
              blogId
              body
              update(formatString: "YYYY年MM月DD日")
              date(formatString: "YYYY年MM月DD日")
              image {
                url
              }
            }
          }
        }
      }
    `
  )

  return (
    <section className={Styles.section}>
      <div className={Styles.wrapper}>
        <h2 className="sectionTitle">ブログ</h2>
        <ul className={Styles.blogList}>
          {allMicrocmsBlog.edges.map(({node}) => (
            <li
              key={node.blogId}
              className={Styles.listItem}
            >
              <div className={Styles.imgWrapper}>
                <img
                  src={node.image?.url}
                />
              </div>
              <div className={Styles.timeWrapper}>
                <time>
                  <FontAwesomeIcon icon={faUndo} /> {node.date}
                </time>
              </div>
              <Link
                to={`/blog/${node.blogId}/`}
              >
                {node.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <LinkButton
        link="/"
        text="more"
      />
    </section>
  )
}

export default BlogList
