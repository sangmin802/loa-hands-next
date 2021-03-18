import "style/App.css";
import "style/index.css";
import "style/UserInfo.css";
import React from "react";
import { AppProps } from "next/app";
import { wrapper } from "store/index";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(App);
