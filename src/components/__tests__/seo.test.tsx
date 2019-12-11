import React from 'react'
import renderer from 'react-test-renderer'
import { PureSEO as SEO } from '../SEO'

describe('Layout', () => {
  it('renders correctly', () => {
    const data = {
      site: {
        siteMetadata: {
          title: 'Testing',
          description: 'Test description',
          author: 'Test Author',
        },
      },
    }
    const tree = renderer
      .create(
        <SEO
          lang={'en'}
          title={'Testing'}
          description={'This is just a test'}
          meta={[{ name: 'testing', content: 'true' }]}
          data={data}
        />
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
