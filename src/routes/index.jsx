import { mount, route, withView } from 'navi';
import React from 'react';
import { View } from 'react-navi';

import CommonLayout from 'layouts/CommonLayout';
import ListDemo from 'components/ListDemo';

import withoutAuth from './withoutAuth';
import Login from 'components/Authentication/Login';
import withAuth from './withAuth';

const routes = mount({
  '*': withView(
    <CommonLayout>
      <View />
    </CommonLayout>,
    mount({
      '/': withAuth(
        route({
          view: <ListDemo />,
        })
      ),
      '/signin': withoutAuth(
        route({
          view: <Login />,
        })
      ),
    })
  ),
});

export default routes;
