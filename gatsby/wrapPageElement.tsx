import React from 'react';
import { GatsbyBrowser, GatsbySSR } from "gatsby";
import Layout from '../src/components/wrappers/Layout';

type WrapPageElement =
  | GatsbyBrowser["wrapPageElement"]
  | GatsbySSR["wrapPageElement"];

const wrapPageElement: WrapPageElement = ({ element, props }: any) => {
  return (
    <Layout {...props}>
      {element}
    </Layout>
  );
};

export default wrapPageElement;