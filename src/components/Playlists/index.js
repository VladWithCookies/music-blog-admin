import { List, Datagrid, TextField, DateField } from 'react-admin';

const Playlists = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
      <DateField source="year" />
    </Datagrid>
  </List>
);

export default Playlists;
