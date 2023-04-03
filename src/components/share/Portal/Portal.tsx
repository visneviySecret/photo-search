import React, { ReactNode, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'

interface PortalProps {
  children: ReactNode
}

const Overlay = styled.div`
  z-index: 1000;
  position: fixed;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
`

function Portal({ children }: PortalProps) {
  const ref = useRef<Element | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>('#portal')
    setMounted(true)
  }, [])

  if (!mounted || !ref.current) return null

  return createPortal(<Overlay>{children}</Overlay>, ref.current)
}

export default Portal
