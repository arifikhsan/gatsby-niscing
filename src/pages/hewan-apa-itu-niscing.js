import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const HewanApa = () => (
  <Layout>
    <SEO
      title="Hewan apa itu niscing?"
      description="ini meta deskripsi. apakah ada yang penasaran hewan apa itu niscing? Baca tulisan berikut"
    />
    <h1>Hewan apa itu niscing?</h1>
    <p>Niscing adalah kucing</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default HewanApa
