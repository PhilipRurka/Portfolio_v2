import React from 'react';
import { GatsbyBrowser, GatsbySSR, WrapPageElementBrowserArgs } from "gatsby";
import Layout from '../src/components/wrappers/Layout';

type WrapPageElement =
  | GatsbyBrowser["wrapPageElement"]
  | GatsbySSR["wrapPageElement"];

const wrapPageElement: WrapPageElement = ({ element, props }: WrapPageElementBrowserArgs): React.ReactElement => {
  return (
    <Layout {...props}>
      {element}
    </Layout>
  );
};

export default wrapPageElement;