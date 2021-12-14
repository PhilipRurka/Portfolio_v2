import { PageProps } from "gatsby";
import React, { FC } from "react";
import { Reset } from "../styled/base";
import Head from "./Head";
import Header from "./header/Header.container";

const Layout: FC<PageProps> = (props) => {
  const { children } = props;
  return (
    <>
      <Reset />
      <Head />
      <Header />
      {children}
    </>
  );
};

export default Layout;