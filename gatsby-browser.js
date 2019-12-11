/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React, { useState, useEffect } from 'react'
import { silentAuth } from './src/utils/auth'

/**
 * We need to silently authenticate on every page,
 * so if the user refreshes or navigates away
 * we can still get their user profile and such.
 */
const SessionCheck = ({ children }) => {
  const [loading, setLoading] = useState(true)

  const handleCheckSession = () => {
    setLoading(false)
  }

  useEffect(() => {
    silentAuth(handleCheckSession)
  })

  return loading === false && <React.Fragment>{children}</React.Fragment>
}

/**
 * We have to do silent authntication on the root element.
 * Since gatsby abstracts away the root element;
 * we have to use this file to wrap it.
 */
export const wrapRootElement = ({ element }) => {
  return <SessionCheck>{element}</SessionCheck>
}
