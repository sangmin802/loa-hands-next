import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle, { THEME } from "../src/global-style";
import { Provider } from "react-redux";
import { store } from "../src/store/index";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../src/index";
import { ReactQueryDevtools } from "react-query/devtools";
import "../src/style/fonts.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  Story => (
    <Provider store={store}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <ThemeProvider theme={THEME}>
          <GlobalStyle />
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            <Story />
          </QueryClientProvider>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  ),
];
