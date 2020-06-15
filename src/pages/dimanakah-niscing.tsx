// If you don't want to use TypeScript you can delete this file!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

type DataProps = {
  site: {
    buildTime: string
  }
}

const DimanaNiscing: React.FunctionComponent<PageProps<DataProps>> = ({
  data,
  path,
}) => (
  <Layout>
    <SEO
      title="Dimanakah Niscing?"
      description="Dimanakah niscing berada? Dimana kita dapat menemukannya? Pada halaman ini kami akan membahas bagaimana cara yang tepat untuk menemukan niscing."
    />
    <h1>Dimanakah Niscing? Haruskah Kita Mencarinya?</h1>
    <p>
      Niscing bisa ditemukan di tempat tidur, kursi, atau tempat tempat yang
      tidak pernah terpikirkan oleh siapapun.
    </p>
    <p>
      Anda sedang berada di halaman "{path}" yang dibuat dalam waktu{" "}
      {data.site.buildTime}.
    </p>
    <p>
      To learn more, head over to our{" "}
      <a href="https://www.gatsbyjs.org/docs/typescript/">
        documentation about TypeScript
      </a>
      .
    </p>
    <Link to="/">Kembali ke Niscing</Link>
  </Layout>
)

export default DimanaNiscing

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
