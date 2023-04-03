import React from 'react'
import styled from 'styled-components'
import Button from '../../UI/Button/Button'
import TextField from '../../UI/TextField/TextField'

const Container = styled.div`
  display: flex;
`

const Wrapper = styled.div<{ isLoaded: boolean }>`
  display: flex;
  gap: 8px;
  margin: 0 ${({ isLoaded }) => !isLoaded && 'auto'};
  margin-top: ${({ isLoaded }) => !isLoaded && 'clamp(223px, 10vw, 276px)'};
  margin-bottom: clamp(16px, 5vw, 32px);
  transition: all 0.2s ease-in-out;
`

interface SearchProps {
  value: string
  onChange: (value: string) => void
  // handleSearch: () => void
  handleReset: () => void
  isLoaded: boolean
  errorMessage?: string
}

function SearchBar({
  value,
  onChange,
  // handleSearch,
  handleReset,
  isLoaded,
  errorMessage,
}: SearchProps) {
  return (
    <Container>
      <Wrapper isLoaded={isLoaded}>
        <TextField
          onChange={onChange}
          onReset={handleReset}
          value={value}
          errorMessage={errorMessage}
          // handleSearch={handleSearch}
        />
        {/* <Button onClick={handleSearch} /> */}
      </Wrapper>
    </Container>
  )
}

export default SearchBar
