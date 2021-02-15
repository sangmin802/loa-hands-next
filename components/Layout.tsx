import React, { ReactNode } from 'react'

import Head from 'next/head'
import HeaderContainer from './Root/Container/HeaderContainer'
import LoadingSpinner from './@Shared/LoadingSpinner'

interface Props {
  children?: ReactNode
  title? : String
  isLoading? : Boolean
}

const Layout : React.FC<Props> = ({
  children,
  title,
  isLoading,
}) => {
  const isLoadingStyle1 = isLoading ? 'height100vh' : null;
  const isLoadingStyle2 = isLoading ? 'loadingBg zIndex99' : 'displayNone';

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="google-site-verification" content="SWvP4IgjDhYd943otN_bOiXQ3UjJsOAh5FE6cpmrkXE" />
        <meta name="description" content="Lostark 유저 검색 앱" />
      </Head>
      <div className={`App ${isLoadingStyle1}`}>
        <LoadingSpinner isLoadingStyle={isLoadingStyle2}/>
        <div className="innerApp">
          <HeaderContainer />
          <div className="AppWrap">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout;