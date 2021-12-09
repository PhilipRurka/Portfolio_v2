import React, { FC } from "react";
import { Reset } from "../../styled/base";
import { Header } from "../Header";

const Layout: FC<React.ReactNode> = (props) => {
  const { children } = props
  return (
    <>
      <Reset />
      <Header />
      {children}
    </>
  );
};

export default Layout;