import jsonServerProvider from 'ra-data-json-server';

import { API_HOST } from '../constants';
import convertToBase64 from '../utils/convertToBase64';

const dataProvider = jsonServerProvider(API_HOST);

const customDataProvider = {
  ...dataProvider,
  create: async (resource, params) => {
    if (resource !== 'playlists' || !params.data.cover || !params.data.cover.rawFile) {
      return dataProvider.create(resource, params);
    }

    const base64Cover = await convertToBase64(params.data.cover);

    return dataProvider.create(
      resource,
      {
        ...params,
        data: {
          ...params.data,
          cover: {
            src: base64Cover,
          },
        },
      },
    );
  },
  update: async (resource, params) => {
    if (resource !== 'playlists' || !params.data.cover || !params.data.cover.rawFile) {
      return dataProvider.update(resource, params);
    }

    const base64Cover = await convertToBase64(params.data.cover);

    return dataProvider.update(
      resource,
      {
        ...params,
        data: {
          ...params.data,
          cover: {
            src: base64Cover,
          },
        },
      },
    );
  },
};

export default customDataProvider;
