import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  width: 100%;
`

export const Wrapper = styled.div`
  max-width: 1265px;
  padding-inline: clamp(16px, 5vw, 80px);
  padding-top: clamp(10px, 2vw, 40px);
  margin: 0 auto;
  overflow: auto;
`

export const BlackFilter = styled.div`
  position: absolute;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.4);
  min-height: 100%;
  width: 100%;
  top: 0;
  translate: 0% 0%;

  @media (max-width: 1265px) {
    left: 0vw;
  }
`

export const LoaderWrapper = styled.div`
  position: fixed;
  left: calc(50% - 18px);
  top: calc(50% - 15px);
`
