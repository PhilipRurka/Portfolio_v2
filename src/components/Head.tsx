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
        
      <link
        rel="preconnect"
        href="https://fonts.googleapis.com" ></link>
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin='true' ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Varela+Round&display=swap"
        rel="stylesheet" ></link>
    </Helmet>
  );
};

export default Head;