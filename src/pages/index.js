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
    <h1>Halo Niscing Disini</h1>
    <p>Niscing adalah nama hewan.</p>
    <h2>Halo Niscing Disini Judul HaDua</h2>
    <p>
      Website ini dibuat untuk mengetes SEO dengan memanfaatkan keyword
      'niscing'. Karena 'niscing' tidak ada yang menjadi kompetitior sehingga
      masuk ke halaman pertama google akan mudah.
    </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/hewan-apa-itu-niscing/">Hewan apa itu niscing?</Link> <br />
    <Link to="/apa-itu-niscing/">Apa itu niscing?</Link> <br />
    <Link to="/dimanakah-niscing/">Dimanakah Niscing</Link>
  </Layout>
)

export default IndexPage
