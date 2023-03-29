import Cross from '@/Assets/Icons/cross'
import Lens from '@/Assets/Icons/lents'
import React from 'react'
import {
  CrossWrapper,
  Error,
  Input,
  LensWrapper,
  Wrapper,
} from './TextField.style'

interface TextFieldProps {
  value: string
  onChange: (value: string) => void
  onReset: () => void
  errorMessage?: string
}

function TextField({ value, onChange, onReset, errorMessage }: TextFieldProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    onChange(value)
  }

  const handleReset = () => {
    onChange('')
    onReset()
  }
  return (
    <Wrapper>
      <Input
        onChange={handleChange}
        placeholder="Телефоны, яблоки, груши..."
        value={value}
      />
      <LensWrapper>
        <Lens />
      </LensWrapper>
      <CrossWrapper onClick={handleReset}>
        <Cross />
      </CrossWrapper>
      {errorMessage && <Error>{errorMessage}</Error>}
    </Wrapper>
  )
}

export default TextField
