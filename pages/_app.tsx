import '../styles/App.css'
import '../styles/Header.css'
import '../styles/index.css'
import '../styles/UserInfo.css'
import React from 'react';
import { AppProps } from 'next/app'
import { wrapper } from '../store'

const App : React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(App)
