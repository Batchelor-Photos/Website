import { Auth0DecodedHash } from 'auth0-js'

export interface Tokens extends Auth0DecodedHash {
  expiresAt: number
}
