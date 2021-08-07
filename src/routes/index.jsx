import { mount, route, withView } from 'navi';
import React from 'react';
import { View } from 'react-navi';

import CommonLayout from 'layouts/CommonLayout';
import ListDemo from 'components/ListDemo';

import withoutAuth from './withoutAuth';

const routes = mount({
  '*': withView(
    <CommonLayout>
      <View />
    </CommonLayout>,
    mount({
      '/': withoutAuth(
        route({
          view: <ListDemo />,
        })
      ),
    })
  ),
});

export default routes;
