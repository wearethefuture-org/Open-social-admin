import React from 'react';
import { List, Datagrid, TextField, EmailField } from 'react-admin';

export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="lastName" />
            <TextField source="firstName" />
            <TextField source="userName" />
            <EmailField source="email" />
            <TextField source="birthdayDate" />
            <TextField source="role" />
            <TextField source="status" />
            <TextField source="avatarId" />
        </Datagrid>
    </List>
);