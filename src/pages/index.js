import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import * as System from '../../design-system'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <System.Text type="Heading-1" />
    <br />
    <System.Button />
  </Layout>
)

export default IndexPage
