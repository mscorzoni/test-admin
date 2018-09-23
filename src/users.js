import React from 'react';
import { List, Datagrid, EmailField, TextField } from 'react-admin';

export const Userlist = (props) => (
    <List title="All users" {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="username" />
        <TextField source="email" />
      </ Datagrid>
    </ List>
  );