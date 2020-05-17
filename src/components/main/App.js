import React from 'react';
import { Admin, Resource } from 'react-admin';
import {UserList} from '../getList';
import {PostList} from '../posList';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="users" list={UserList} />
        <Resource name="comments" list={PostList} />
    </Admin>
);

export default App;