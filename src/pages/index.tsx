import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h2>Frontend developer</h2>
    <p>
      Hi, my name is Jakub (you can call me Jacob), and I'm a self-taught Junior
      Frontend Developer from Poznań, Poland.
    </p>
    <p>
      My hobbies include playing challenging video games, listening to niche
      Japanese music and reading books, usually about philosophy or anything
      that helps me understand the world better.
    </p>
    <p>
      At personal development, I value compound growth, work ethics and
      achieving win-win scenarios.
    </p>
    <p>
      I'm willing to take a dev job with a high opportunity to grow. Preferably
      in Poznań, but I'm ready to move as well, especially to UK or Japan.
    </p>
    {/* <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    /> */}
    {/* <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p> */}
  </Layout>
)

export default IndexPage
