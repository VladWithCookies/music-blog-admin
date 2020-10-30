import { Create, TabbedForm, FormTab, TextInput, ArrayInput, SimpleFormIterator, ImageInput, ImageField } from 'react-admin';

const CreatePlaylist = (props) => (
  <Create
    {...props}
    title="New playlist"
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
  </Create>
);

export default CreatePlaylist;
