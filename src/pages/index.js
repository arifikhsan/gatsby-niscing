import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Halo niscing disini"
      description="Niscing adalah nama kucing peliharaan. Ketika namanya dipanggil, dia akan menoleh dan mengatakan meong"
    />
    <h1>Hai Niscing Disini</h1>
    <p>Niscing adalah nama hewan.</p>
    <p>
      Website ini dibuat untuk mengetes SEO dengan memanfaatkan keyword
      'niscing'. Karena 'niscing' tidak ada yang menjadi kompetitior sehingga
      masuk ke halaman pertama google akan mudah.
    </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Halaman kedua</Link> <br />
    <Link to="/using-typescript/">Typescript</Link>
  </Layout>
)

export default IndexPage
