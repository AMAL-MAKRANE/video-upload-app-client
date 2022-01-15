import Normalize from '../styles/Normalize'
import GlobalStyle from '../styles/GlobalStyle'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Normalize />
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
