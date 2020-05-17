import React from 'react';
import { List, Datagrid, TextField, EmailField } from 'react-admin';
import Link from '../link';

export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
            <TextField source="phone" />
            <Link source="website" />
            <TextField source="company.name" />
        </Datagrid>
    </List>
);