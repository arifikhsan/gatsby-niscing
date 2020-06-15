import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ApaNiscing = () => (
  <Layout>
    <SEO
      title="Apa Itu Niscing?"
      description="Apa itu niscing? Ini adalah halaman yang dibuat untuk menjadi kompetitornya blogspot."
    />
    <h1>Apa Itu Niscing?</h1>
    <p>
      Halaman ini adalah halaman kompetitornya blogspot. siapakah yang akan
      menduduki peringkat satu di google?
    </p>
    <Link to="/">Kembali ke homepage</Link>
  </Layout>
)

export default ApaNiscing
