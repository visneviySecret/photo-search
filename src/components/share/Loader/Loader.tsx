import React from 'react'
import { RotatingLines } from 'react-loader-spinner'
import styled from 'styled-components'

const LoaderWrapper = styled.div`
  margin: 0 auto;
  width: 36px;
  padding-top: calc(50vh - 50px);
`

function Loader() {
  return (
    <LoaderWrapper>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="2.5"
        animationDuration="0.75"
        width="36"
        visible={true}
      />
    </LoaderWrapper>
  )
}

export default Loader
