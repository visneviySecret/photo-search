import { createGlobalStyle } from 'styled-components'
import localFont from 'next/font/local'
import { Color } from '@/utils/Conts'

export const SFProDisplay = localFont({
  src: [
    {
      path: '../../public/fonts/SF-Pro-Display-Regular.otf',
      weight: '400',
    },
  ],
})

export const GlobalStyle = createGlobalStyle`
    * {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
    }
    
    html,
    body, ::placeholder, button, input {
      font-family: ${SFProDisplay.style.fontFamily}, 'Inter';
      font-weight: 400;
      font-size: 16px;
    }
    body, ::placeholder, button {
      line-height: 19px;
    }
    
    body {
      color: ${Color.GREY};
      background: ${Color.WHITE}
    }
    
    a {
      color: inherit;
      text-decoration: none;
    }
`
