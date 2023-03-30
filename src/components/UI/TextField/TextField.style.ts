import { Color } from '@/utils/Conts'
import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  flex-wrap: 1;
`
export const LensWrapper = styled.div`
  position: absolute;
  top: 14px;
  left: 10px;
`

export const CrossWrapper = styled.div`
  position: absolute;
  top: 14px;
  right: 10px;
  cursor: pointer;
`

export const Input = styled.input`
  width: clamp(205px, 70vw, 420px);
  padding-block: 14.5px;
  padding-inline: 36px 10.5px;
  border-radius: 12px;
  border: none;
  color: ${Color.BLACK};
  background-color: ${Color.LIGHT_GREY};

  &::placeholder {
    color: ${Color.GREY};
  }
  &:focus-within {
    outline: none;
  }
`
export const Error = styled.span`
  position: absolute;
  color: ${Color.RED};
  bottom: -25px;
  left: 20px;
`
