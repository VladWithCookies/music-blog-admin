import { Edit, TabbedForm, TextInput, ArrayInput, SimpleFormIterator, FormTab } from 'react-admin';

import PlaylistTitle from '../PlaylistTitle';

const EditPlaylist = (props) => (
  <Edit
    {...props}
    title={<PlaylistTitle />}
  >
    <TabbedForm>
      <FormTab label="General">
        <TextInput
          fullWidth
          source="title"
        />
        <TextInput
          multiline
          fullWidth
          source="description"
        />
      </FormTab>
      <FormTab label="Track list">
        <ArrayInput source="tracks">
          <SimpleFormIterator>
            <TextInput
              label="Title"
              source="title"
            />
            <TextInput
              label="Artist"
              source="artist"
            />
          </SimpleFormIterator>
        </ArrayInput>
      </FormTab>
    </TabbedForm>
  </Edit>
);

export default EditPlaylist;
