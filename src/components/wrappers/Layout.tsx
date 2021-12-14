import { PageProps } from "gatsby";
import React, { FC } from "react";
import { Reset } from "../../styled/base";

const Layout: FC<PageProps> = (props) => {
  const { children } = props;
  return (
    <>
      <Reset />
      {children}
    </>
  );
};

export default Layout;