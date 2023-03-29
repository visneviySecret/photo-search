import React from 'react'
import { Component, Wrapper } from './Button.style'

interface ButtonProps {
  onClick: () => void
  text?: string
}

function Button({ onClick, text = 'Искать' }: ButtonProps) {
  const handleClick = () => {
    onClick()
  }

  return (
    <Wrapper>
      <Component onClick={handleClick}>{text}</Component>
    </Wrapper>
  )
}

export default Button
