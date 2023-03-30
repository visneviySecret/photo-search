import React from 'react'
import { RotatingLines } from 'react-loader-spinner'
import styled from 'styled-components'

const LoaderWrapper = styled.div`
  position: fixed;
  left: calc(50% - 18px);
  top: calc(50% - 15px);
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
