import { mount, route, withView } from 'navi';
import React from 'react';
import { View } from 'react-navi';

import CommonLayout from 'layouts/CommonLayout';
import ListDemo from 'components/Tasks/ListDemo';

import withoutAuth from './withoutAuth';
import Login from 'components/Authentication/Login';
import withAuth from './withAuth';
import TaskDetail from 'components/Tasks/TaskDetail';
import AddForm from 'components/Tasks/AddForm';

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
      '/list/:id': withAuth(
        route((request) => ({
          view: <TaskDetail task={request.params} />,
        }))
      ),
      '/list/new': withAuth(
        route({
          view: <AddForm />,
        })
      ),
    })
  ),
});

export default routes;
