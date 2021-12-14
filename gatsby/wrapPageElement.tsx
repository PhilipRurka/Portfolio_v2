// FRONTEND: Is This Being Used?

import React, { FC } from 'react';
import { WrapPageElementBrowserArgs } from "gatsby";
import Layout from '../src/components/wrappers/Layout';

interface WrapPageElement_type extends WrapPageElementBrowserArgs {
 element: any
}

const wrapPageElement: FC<WrapPageElement_type> = ({ element, props }) => {
  return (
    <Layout {...props}>
      {element}
    </Layout>
  );
};

export default wrapPageElement;