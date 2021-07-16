import React, { cloneElement } from "react";
import Head from "next/head";
import {
  SearchLoading,
  Header,
  AsyncBoundary,
  ErrorFallback,
} from "components/";
import * as Styled from "./index.style";

function App({ children, title = "Loa-Hands" }) {
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
      <Styled.Container>
        <AsyncBoundary
          suspenseFallback={<SearchLoading />}
          errorFallback={<HeaderLayout children={<ErrorFallback />} />}
        >
          <HeaderLayout>
            <Styled.Main>{children}</Styled.Main>
          </HeaderLayout>
        </AsyncBoundary>
      </Styled.Container>
    </>
  );
}

export function HeaderLayout({ children, ...props }) {
  return (
    <Styled.InnerContainer>
      <Styled.HeaderContainer>
        <Header {...props} />
      </Styled.HeaderContainer>
      {cloneElement(children, { ...props })}
    </Styled.InnerContainer>
  );
}

export default React.memo(App, () => true);
