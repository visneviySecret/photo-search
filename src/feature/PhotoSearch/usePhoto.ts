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
  const [totalPages, setTotalPages] = useState(1)
  const [modalImageUrl, setModalImageUrl] = useState('')
  const [displayedImageIndex, setDisplayedImageIndex] = useState<null | number>(
    null,
  )

  const fetchPhotos = async (query: string) => {
    try {
      setLoading(true)
      const searchedData = await getPhotos(query, page).then(
        (response) => response.data,
      )
      setTotalPages(searchedData.total_pages)
      if (searchedData.total_pages === 0) {
        setError('Ничего не найдено')
        setLoading(false)
        return
      }
      const result = searchedData.results.map((picture: any) => ({
        id: picture.id,
        urlSmall: picture.urls.small,
        urlRegular: picture.urls.regular,
        alt: picture.alt_description,
      }))
      setPage((prev) => prev + 1)
      setPictures(result)
      setLoading(false)
    } catch (e) {
      setError('Попробуйте другой запрос')
      setLoading(false)
    }
  }

  const handleSearch = () => {
    if (!query) return setError('Напишите запрос для поиска.')
    handleReset()
    setPrevQuery(query)
    fetchPhotos(query)
  }

  const handleReset = () => {
    setPrevQuery('')
    setFilter(false)
    setPage(1)
    setPictures([])
    setDisplayPictures([])
  }

  const nextPage = () => {
    fetchPhotos(query)
    if (page >= totalPages) {
      setHasMore(false)
    }
  }

  const setModalImage = (value: null | number) => {
    let url: string = ''
    displayPictures.forEach((picture: any, index) => {
      if (index === value) {
        url = picture.urlRegular
      }
    })
    setModalImageUrl(url)
  }

  const displayNextImage = () => {
    setDisplayedImageIndex((prev) => {
      if (prev !== null) return (prev += 1)
      return null
    })
  }

  useEffect(() => {
    setModalImage(displayedImageIndex)
  }, [displayedImageIndex])

  useEffect(() => {
    setError('')
    if (!!pictures.length && prevQuery && query !== prevQuery) setFilter(true)
  }, [query])

  useEffect(() => {
    setDisplayPictures((prev) => [...prev, ...pictures])
    if (pictures.length === 0) {
      setDisplayPictures([])
    }
  }, [pictures])

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
    setDisplayedImageIndex,
    handleSearch,
    handleReset,
    nextPage,
    modalImageUrl,
    displayNextImage,
  }
}

export default usePhoto
