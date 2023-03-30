import { api } from '../api'
import { CLIENT_ID } from '../config'

export const getPhotos = (query: string, page: number) =>
  api.get(
    `/search/photos?client_id=${CLIENT_ID}&per_page=30&page=${page}&query=${query}`,
  )
