import { metaConstants } from '../../../types/meta';

export const setMetaData = (data, dispatch) => {
  dispatch({
    type: metaConstants.SET_META_INFO,
    data,
  });
};
