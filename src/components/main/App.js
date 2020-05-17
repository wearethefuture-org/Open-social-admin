import React from 'react';
import { Admin, Resource } from 'react-admin';
import {UserList} from '../getList';
import {PostList, PostEdit, PostCreate } from '../posList';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import Dashboard from '../dashboard';
import loginPage from '../login';
import dataProvider from '../routes';
import NotFound from '../not-found';
import Menu from '../menu';

const App = () => (
    <Admin menu={Menu} catchAll={NotFound} dashboard={Dashboard} authProvider={loginPage} dataProvider={dataProvider}>
        <Resource name="users" list={UserList} icon={UserIcon} />
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>
    </Admin>
);

export default App;