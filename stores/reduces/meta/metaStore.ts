import { Meta, metaConstants } from '../../../types/meta';

export const metaStore = (state: Meta = {}, { type, data }) => {
  switch (type) {
    case metaConstants.SET_META_INFO:
      return {
        ...state,
        ...data,
      };

    default:
      return state;
  }
};
