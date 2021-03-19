import React from "react";
import Head from "next/head";
import LoadingToggleHooks from "hooks/loadingToggleHooks";
import Header from "components/_header/index";
import LoadingSpinner from "components/_loading-spinner/index";
import Dialog from "components/_dialog/index";

function Layout({ children, title = "Loa-Hands" }) {
  const { isLoading } = LoadingToggleHooks();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="google-site-verification"
          content="SWvP4IgjDhYd943otN_bOiXQ3UjJsOAh5FE6cpmrkXE"
        />
        <meta name="description" content="Lostark 유저 검색 앱" />
      </Head>
      <div className={`App ${isLoading ? "height100vh" : ""}`}>
        <LoadingSpinner
          style={isLoading ? "loadingBg zIndex99" : "displayNone"}
        />
        <Dialog />
        <div className="innerApp">
          <Header />
          <div className="AppWrap">{children}</div>
        </div>
      </div>
    </>
  );
}

export default Layout;
