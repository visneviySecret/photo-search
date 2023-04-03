import Portal from '@/components/share/Portal/Portal'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

const ImageWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
`

function ModalPhoto({
  url,
  handleModal,
}: {
  url: string
  handleModal: (value: string) => void
}) {
  return (
    <Portal>
      <ImageWrapper>
        <Image
          src={url}
          alt={'image by request'}
          width={204}
          height={204}
          style={{
            objectFit: 'fill',
            width: 'clamp(250px, 70vw, 500px)',
            height: 'auto',
            margin: '0 auto',
          }}
          onClick={() => handleModal('')}
        />
      </ImageWrapper>
    </Portal>
  )
}

export default ModalPhoto
