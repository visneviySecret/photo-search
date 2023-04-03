import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import SearchBar from '@/components/share/SearchBar/SearchBar'
import ImageList from '@/components/share/ImageList/ImageList'
import { BlackFilter, Container, Wrapper } from './PhotoSearch.style'
import Loader from '@/components/share/Loader/Loader'
import { Color } from '@/utils/Conts'
import InfiniteScroll from 'react-infinite-scroll-component'
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

      <Container>
        {filter && <BlackFilter />}
        <Wrapper>
          <InfiniteScroll
            next={nextPage}
            hasMore={hasMore}
            loader={loading && <Loader />}
            dataLength={pictures.length}
            style={{ width: '100%' }}
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
          {loading && <Loader />}
        </Wrapper>
      </Container>
    </>
  )
}

export { PhotoSearch }
