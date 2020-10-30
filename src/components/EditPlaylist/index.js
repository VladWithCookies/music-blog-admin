import { Edit, TabbedForm, TextInput, ArrayInput, SimpleFormIterator, FormTab, ImageInput, ImageField } from 'react-admin';

import PlaylistTitle from '../PlaylistTitle';

const EditPlaylist = (props) => (
  <Edit
    {...props}
    title={<PlaylistTitle />}
  >
    <TabbedForm>
      <FormTab label="General">
        <ImageInput
          source="cover"
          accept="image/*"
        >
          <ImageField source="src" />
        </ImageInput>
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
            <ImageInput
              label="Cover"
              source="cover"
              accept="image/*"
            >
              <ImageField source="src" />
            </ImageInput>
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
