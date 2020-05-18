import React from 'react';
import { Admin, Resource } from 'react-admin';
import {UserList} from '../getList';
import {PostList, PostEdit, PostCreate } from '../posList';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import Dashboard from '../dashboard';
import loginPage from '../../auth';
import dataProvider from '../routes';
import MyLogoutButton from '../auth/logout';
import NotFound from '../not-found';
import Menu from '../menu';
import LoginPage from '../auth/login';

const App = () => (
    <Admin menu={Menu} loginPage={LoginPage}  logoutButton={MyLogoutButton} catchAll={NotFound} dashboard={Dashboard} authProvider={loginPage} dataProvider={dataProvider}>
        <Resource name="users" list={UserList} icon={UserIcon} />
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>
    </Admin>
);

export default App;