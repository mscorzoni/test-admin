import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { PostList } from './posts';
import { Userlist } from './users';

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
const App = () => (<Admin dataProvider={dataProvider}>
                    <Resource name="posts" list={PostList} />
                    <Resource name='users' list={Userlist} />
                   </ Admin>);
export default App;
