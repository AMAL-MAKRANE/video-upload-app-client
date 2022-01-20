import Normalize from '../styles/Normalize'
import GlobalStyle from '../styles/GlobalStyle'

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <>
      <Normalize />
      <GlobalStyle />
      {getLayout(<Component {...pageProps} />)}
    </>
  )
}

export default MyApp
