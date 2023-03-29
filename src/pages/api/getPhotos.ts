import { api } from './api'
import { CLIENT_ID } from './config'

export const getPhotos = (query: string) =>
  api.get(`${api}/search/photos/lient_id=${CLIENT_ID}&query=${query}`)
