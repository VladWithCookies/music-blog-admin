import React from 'react';
import { Admin, Resource } from 'react-admin';

import dataProvider from '../../lib/dataProvider';
import Playlists from '../Playlists';
import EditPlaylist from '../EditPlaylist';
import CreatePlaylist from '../CreatePlaylist';

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="playlists"
      list={Playlists}
      edit={EditPlaylist}
      create={CreatePlaylist}
    />
  </Admin>
);

export default App;
