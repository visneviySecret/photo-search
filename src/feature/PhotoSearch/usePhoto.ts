import React, { useEffect, useState } from 'react'
import useMeasure from 'react-use-measure'
import { getPhotos } from '@/api/photo/getPhotos'

function usePhoto() {
  const [query, setQuery] = useState('')
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
      setTotalPages(searchedData.total)
      if (searchedData.total === 0) return setError('Попробуйте другой запрос')
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
    fetchPhotos(query)
  }

  const handleReset = () => {
    setPage(1)
    setPictures([])
  }

  const nextPage = () => {
    setPage((prev) => prev + 1)
    if (page >= totalPages) setHasMore(false)
  }

  useEffect(() => {
    setError('')
  }, [query])

  useEffect(() => {
    setDisplayPictures((prev) => [...prev, ...pictures])
    if (pictures.length === 0) {
      setDisplayPictures([])
    }
  }, [pictures])

  useEffect(() => {
    if (page > 1) fetchPhotos(query)
  }, [page])

  return {
    query,
    setQuery,
    pictures,
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
