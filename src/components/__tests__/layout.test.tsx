import React from 'react'
import renderer from 'react-test-renderer'
import { PureLayout as Layout } from '../layout'

describe('Layout', () => {
  it('renders correctly', () => {
    const data = {
      site: {
        siteMetadata: {
          title: 'Test Title',
        },
      },
    }

    const tree = renderer
      .create(
        <Layout data={data}>
          <p>Testing 123</p>
        </Layout>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
