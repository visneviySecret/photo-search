import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import SearchBar from '@/components/share/SearchBar/SearchBar'
import ImageList from '@/components/share/ImageList/ImageList'
import {
  BlackFilter,
  Container,
  LoaderWrapper,
  Wrapper,
} from './PhotoSearch.style'
import Loader from '@/components/share/Loader/Loader'
import InfiniteScroll from 'react-infinite-scroller'
import { Color } from '@/utils/Conts'
import usePhoto from './usePhoto'
import ModalImage from '@/components/Modal/ModalImage/ModalImage'

function PhotoSearch() {
  const {
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
  } = usePhoto()

  return (
    <>
      <Head>
        <title>Photo search</title>
        <meta name="description" content="Photo search by Unsplash api" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Wrapper>
          <SearchBar
            value={query}
            onChange={setQuery}
            handleSearch={handleSearch}
            errorMessage={error}
            handleReset={handleReset}
            isLoaded={!!pictures.length || loading}
          />
        </Wrapper>
      </Container>
      <Container>
        {filter && <BlackFilter />}
        <Wrapper>
          {!!pictures.length && (
            <InfiniteScroll
              pageStart={0}
              loadMore={nextPage}
              hasMore={hasMore}
              useWindow={true}
            >
              <ImageList>
                {displayPictures.map((picture: any, index: number) => (
                  <Image
                    ref={ref}
                    key={index}
                    src={picture.urlSmall}
                    alt={picture.alt || 'image by request'}
                    width={204}
                    height={204}
                    style={{
                      objectFit: 'cover',
                      width: '100%',
                      height: width,
                      borderRadius: '4px',
                      border: `1px solid ${Color.LIGHT_GREY}`,
                      cursor: 'pointer',
                    }}
                    onClick={() => setDisplayedImageIndex(index)}
                  />
                ))}
              </ImageList>
            </InfiniteScroll>
          )}
          {loading && (
            <LoaderWrapper>
              <Loader />
            </LoaderWrapper>
          )}
        </Wrapper>
      </Container>
      {modalImageUrl && (
        <ModalImage
          url={modalImageUrl}
          setDisplayedImageIndex={setDisplayedImageIndex}
          displayNextImage={displayNextImage}
        />
      )}
    </>
  )
}

export { PhotoSearch }
