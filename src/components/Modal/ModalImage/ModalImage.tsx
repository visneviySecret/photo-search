import Portal from '@/components/share/Portal/Portal'
import { useOutsideClick } from '@/hooks/useOutsideClick'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

const ImageWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
`

function ModalImage({
  url,
  setDisplayedImageIndex,
  displayNextImage,
}: {
  url: string
  setDisplayedImageIndex: (value: null | number) => void
  displayNextImage: () => void
}) {
  const handleClickOutside = () => {
    setDisplayedImageIndex(null)
  }
  const ref = useOutsideClick(handleClickOutside)

  return (
    <Portal>
      <ImageWrapper>
        <Image
          ref={ref}
          src={url}
          alt={'image by request'}
          width={2004}
          height={2004}
          style={{
            objectFit: 'fill',
            width: 'auto',
            maxHeight: 'clamp(500px, 70vw, 1200px)',
            margin: '0 auto',
          }}
          onClick={displayNextImage}
        />
      </ImageWrapper>
    </Portal>
  )
}

export default ModalImage
