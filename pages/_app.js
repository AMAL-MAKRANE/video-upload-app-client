import { ApolloProvider } from '@apollo/client'
import Normalize from '../styles/Normalize'
import GlobalStyle from '../styles/GlobalStyle'

import { useApollo } from '../lib/apolloClient'

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps)

  const getLayout = Component.getLayout || ((page) => page)

  return (
    <>
      <ApolloProvider client={apolloClient}>
        <Normalize />
        <GlobalStyle />
        {getLayout(<Component {...pageProps} />)}
      </ApolloProvider>
    </>
  )
}

export default MyApp
