import React, { FC } from 'react';
import { Helmet } from 'react-helmet'

const Head: FC = () => {

  return (
    <Helmet>
      <title>Philip Rurka's Portfolio</title>
      <meta charSet="utf-8" />
      <meta
        http-equiv="Content-Type"
        content="text/html; charset=UTF-8" />
      <meta
        name="title"
        content="Philip Rurka's Portfolio" />
      <meta
        name="description"
        content='My Resume!!!' />
    </Helmet>
  );
};

export default Head;