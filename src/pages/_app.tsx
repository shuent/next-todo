import type { AppProps } from 'next/app'
import React from 'react'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { blue } from '@material-ui/core/colors'
import { Provider } from 'react-redux'
import { store } from '../ducks/store'
import Layout from '../components/layout'

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
