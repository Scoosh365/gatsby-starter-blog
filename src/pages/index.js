import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from '../components/Header'

const IndexPage = () => (
  <Layout>
    <Seo title="Homepage" />
    <Header />
    <section>
      <h2>Welcome to the Homepage</h2>
      <p>This is the content of the homepage.</p>
    </section>
  </Layout>
)

export default IndexPage
