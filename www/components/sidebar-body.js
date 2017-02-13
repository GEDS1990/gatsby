import React from "react"
import Link from "gatsby-link"

import typography, { rhythm } from "../utils/typography"
import menu from "../pages/docs/doc-links.yaml"
console.log(menu)

class SidebarBody extends React.Component {
  render () {
    return (
      <div>
        {menu.map((section) => {
          return (
            <div
              key={section.title}
            >
              <h3>{section.title}</h3>
              <ul
                css={{
                  fontFamily: typography.options.headerFontFamily.join(`,`),
                }}
              >
                {Object.keys(section.links).map((title) => {
                  return (
                    <li key={section.links[title]}>
                      <Link to={section.links[title]}>
                        {title}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>
    )
  }
}

export default SidebarBody
