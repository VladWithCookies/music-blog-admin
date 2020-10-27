import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import { API_HOST } from '../../constants';
import Playlists from '../Playlists';

const dataProvider = jsonServerProvider(API_HOST);

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="playlists"
      list={Playlists}
    />
  </Admin>
);

export default App;
