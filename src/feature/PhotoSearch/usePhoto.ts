import { useEffect, useState } from 'react'
import useMeasure from 'react-use-measure'
import { getPhotos } from '@/api/photo/getPhotos'

function usePhoto() {
  const [query, setQuery] = useState('')
  const [prevQuery, setPrevQuery] = useState('')
  const [filter, setFilter] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [pictures, setPictures] = useState([])
  const [displayPictures, setDisplayPictures] = useState([])
  const [ref, { width }] = useMeasure()
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const [totalPages, setTotalPages] = useState(0)

  const fetchPhotos = async (query: string) => {
    try {
      setLoading(true)
      const searchedData = await getPhotos(query, page).then(
        (response) => response.data,
      )
      setTotalPages(searchedData.total_pages)
      if (searchedData.total_pages === 0) {
        setError('Попробуйте другой запрос')
        setLoading(false)
        return
      }
      const result = searchedData.results.map((picture: any) => ({
        id: picture.id,
        url: picture.urls.small,
        alt: picture.alt_description,
      }))
      setPictures(result)
      setLoading(false)
    } catch (e) {
      setError('Поиск преван, попробуйте другой запрос')
      setLoading(false)
    }
  }

  const handleSearch = () => {
    if (!query) return setError('Напишите запрос для поиска.')
    handleReset()
    setPrevQuery(query)
    // fetchPhotos(query)
  }

  const handleReset = () => {
    setPrevQuery('')
    setFilter(false)
    setPage(1)
    setPictures([])
    setDisplayPictures([])
  }

  const nextPage = () => {
    setPage((prev) => prev + 1)
    if (page >= totalPages) setHasMore(false)
  }

  useEffect(() => {
    setError('')
    if (pictures.length && prevQuery && query !== prevQuery) setFilter(true)
  }, [query])

  useEffect(() => {
    setDisplayPictures((prev) => [...prev, ...pictures])
    if (pictures.length === 0) {
      setDisplayPictures([])
    }
  }, [pictures])

  useEffect(() => {
    // if (page > 1) fetchPhotos(query)
  }, [page])

  return {
    query,
    setQuery,
    pictures,
    filter,
    error,
    loading,
    displayPictures,
    ref,
    width,
    hasMore,
    handleSearch,
    handleReset,
    nextPage,
  }
}

export default usePhoto
