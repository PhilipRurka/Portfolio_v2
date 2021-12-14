import { PageProps } from "gatsby";
import React, { FC } from "react";
import { Reset } from "../../styled/base";
import Header from "../header/Header.container";

const Layout: FC<PageProps> = (props) => {
  const { children } = props;
  return (
    <>
      <Reset />
      <Header />
      {children}
    </>
  );
};

export default Layout;