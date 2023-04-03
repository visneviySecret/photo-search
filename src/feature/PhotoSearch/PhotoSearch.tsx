import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import SearchBar from '@/components/share/SearchBar/SearchBar'
import ImageList from '@/components/share/ImageList/ImageList'
import {
  BlackFilter,
  Wrapper,
  LoaderWrapper,
  Container,
} from './PhotoSearch.style'
import Loader from '@/components/share/Loader/Loader'
import InfiniteScroll from 'react-infinite-scroller'
import { Color } from '@/utils/Conts'
import usePhoto from './usePhoto'

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
    handleSearch,
    handleReset,
    nextPage,
  } = usePhoto()

  return (
    <>
      <Head>
        <title> Производство и внедрение инновационных</title>
        <meta
          name="description"
          content="Производство и внедрение инновационных технологий"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <SearchBar
          value={query}
          onChange={setQuery}
          handleSearch={handleSearch}
          errorMessage={error}
          handleReset={handleReset}
          isLoaded={!!pictures.length || loading}
        />
      </Container>
      <Wrapper>
        {filter && <BlackFilter />}
        <Container>
          {!!pictures.length && (
            <InfiniteScroll
              pageStart={0}
              loadMore={nextPage}
              hasMore={hasMore}
              loader={<div>loding...</div>}
              useWindow={true}
            >
              <ImageList>
                {displayPictures.map((picture: any, index: number) => (
                  <Image
                    ref={ref}
                    key={index}
                    src={picture.url}
                    alt={picture.alt || 'image by request'}
                    width={204}
                    height={204}
                    style={{
                      objectFit: 'cover',
                      width: '100%',
                      height: width,
                      borderRadius: '4px',
                      border: `1px solid ${Color.LIGHT_GREY}`,
                    }}
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
        </Container>
      </Wrapper>
    </>
  )
}

export { PhotoSearch }
