import { List, Datagrid, TextField, EditButton } from 'react-admin';

const Playlists = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="title" />
      <TextField source="year" />
      <EditButton />
    </Datagrid>
  </List>
);

export default Playlists;
