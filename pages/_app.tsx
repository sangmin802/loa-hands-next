import React from "react";
import { AppProps } from "next/app";
import { wrapper } from "store/index";
import { ThemeProvider } from "styled-components";
import GlobalStyle, { THEME } from "global-style";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      // suspense: true,
      useErrorBoundary: true,
      cacheTime: 1000 * 60 * 5,
      staleTime: 1000 * 60 * 3,
    },
  },
});

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={THEME}>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Component {...pageProps} />
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default wrapper.withRedux(App);
