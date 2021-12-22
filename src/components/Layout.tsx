import { PageProps } from "gatsby";
import React, { FC } from "react";
import { Reset } from "../styled/base";
import FontStyles from "../styled/fonts";
import { LayoutStyled } from "../styled/layout";
import Head from "./Head";
import Header from "./header/Header.container";

const Layout: FC<PageProps> = (props) => {
  const { children } = props;

  return (
    <LayoutStyled>
      <FontStyles />
      <Reset />
      <Head />
      <Header />
      {children}
    </LayoutStyled>
  );
};

export default Layout;