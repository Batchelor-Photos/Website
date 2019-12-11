import auth0, { Auth0Error, Auth0UserProfile, Auth0DecodedHash } from 'auth0-js'
import { navigate } from 'gatsby'
import { Tokens } from '../types'

const isBrowser = typeof window !== 'undefined'

const auth = isBrowser
  ? new auth0.WebAuth({
      domain: process.env.AUTH0_DOMAIN,
      clientID: process.env.AUTH0_CLIENTID,
      redirectUri: process.env.AUTH0_CALLBACK,
      responseType: 'token id_token',
      scope: 'openid profile email',
    })
  : null

const tokens: Tokens = {
  accessToken: '',
  idToken: '',
  expiresAt: null,
}

let user: Auth0UserProfile = {
  user_id: '',
  name: '',
  nickname: '',
  picture: '',
  sub: '',
  clientID: '',
  identities: [],
  created_at: '',
  updated_at: '',
}

export const login = (state: Object): void => {
  isBrowser && auth.authorize({ state: JSON.stringify(state) })
}

export const handleAuthentication = (): void => {
  isBrowser && auth.parseHash(setSession())
}

// Set's the "isLoggedIn" flag in localStorage
const setSession = (cb = () => {}) => (error: Auth0Error, authResult: Auth0DecodedHash): void => {
  if (error || (!authResult && !authResult.accessToken && !authResult.idToken)) {
    navigate('/')
    cb()
    return
  } else {
    const { accessToken, idToken, expiresIn, idTokenPayload } = authResult
    tokens.accessToken = accessToken
    tokens.idToken = idToken
    tokens.expiresAt = expiresIn * 1000 + new Date().getTime()
    user = idTokenPayload
    localStorage.setItem('isLoggedIn', 'true')

    // Parsing state during a silentAuth fails.
    try {
      navigate(JSON.parse(authResult.state).redirectUrl)
    } catch (e) {
      // Fail silently
    }

    cb()
  }
}

export const isAuthenticated = (): boolean => {
  return isBrowser ? localStorage.getItem('isLoggedIn') === 'true' : false
}

export const silentAuth = (callback: VoidFunction): void => {
  isAuthenticated() ? auth.checkSession({}, setSession(callback)) : callback()
}

export const logout = (): void => {
  localStorage.setItem('isLoggedIn', 'false')
  auth.logout({ returnTo: process.env.AUTH0_RETURNTO })
}

export const getProfile = (): Auth0UserProfile => {
  return user
}
