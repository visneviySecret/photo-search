import { breakPoints } from '@/utils/Conts'
import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface ListProps {
  children: ReactNode
}

const Component = styled.div`
  z-index: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(204px, 1fr));
  grid-gap: 8px;

  @media (max-width: ${breakPoints.Touch}) {
    grid-template-columns: repeat(3, 1fr);
  }
`

function ImageList({ children }: ListProps) {
  return <Component>{children}</Component>
}

export default ImageList
