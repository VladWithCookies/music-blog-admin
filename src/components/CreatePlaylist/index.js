import { Create, TabbedForm, FormTab, TextInput, ArrayInput, SimpleFormIterator } from 'react-admin';

const CreatePlaylist = (props) => (
  <Create
    {...props}
    title="New playlist"
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
  </Create>
);

export default CreatePlaylist;
