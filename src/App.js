import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { PostList, PostEdit, PostCreate } from './posts';
import { Userlist } from './users';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import Dashboard from './Dashboard';
import authProvider from './authProvider';

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
const App = () => (<Admin dataProvider={dataProvider} dashboard={Dashboard} authProvider={authProvider}>
                    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
                    <Resource name='users' list={Userlist} icon={UserIcon}/>
                   </ Admin>);
export default App;
