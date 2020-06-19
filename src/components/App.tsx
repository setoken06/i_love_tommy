import React from "react";
import { Router } from "components/Router";
import { GlobalStyle } from "lib/style/global-style";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
};
