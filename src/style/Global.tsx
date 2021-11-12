import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap/uikit/dist/theme'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Kanit', sans-serif;
  }
  body {
    background-color: #1f1750;
    img {
      height: auto;
      max-width: 100%;
    }
  }
  .iGEvSN {
      display: none !important;
  }

  .hwtEBz {
      display: none !important;
  }
  .cqgffe{
    display:none !important;
  }
  .KBVhn {
      display: none !important;
  }
  .kDoTmE{
    background: none !important;
  }
  .fpWLwd {
      display: none !important;
  }
  #buycryptosec {
      text-align: center;
      margin: 10px 0px 10px 0px;
  }

  .kJmatq a.sc-gzcbmu.erKMpr {
      position: relative;
  }
  nav.sc-flUlpA.kWuRsy {
      background-color: rgb(31 23 80) !important;
  }

  .kJmatq a.sc-gzcbmu.erKMpr::before {
    content: " ";
    position: absolute;
    background: url(/PG.png) no-repeat;
    left: 0px;
    z-index: 1;
    background-size: 100%;
    min-height: 57px;
    width: 150px;
  }

  .fpWLwd {
      display: none !important;
  }

  .jhNSym {margin-top: 0px !important;display: none !important;}

  @media screen and (max-width: 767px) {
    .kJmatq a.sc-gzcbmu.erKMpr::before {
      width: 85px;
      height: 70px;
      min-height: 70px;
      top: -15px;
      background: url(/PG.png) 0% 0% / contain no-repeat;
      background-repeat: no-repeat;
    }
    
  }
`

export default GlobalStyle
