import { combineReducers } from 'redux';
import { userStore } from './user/userStore';
import { cookiesStore } from './cookies/cookiesStore';
import { projectsStore } from './project/projectsStore';
import { projectStore } from './project/projectStore';
import { metaStore } from './meta/metaStore';

export const rootReducer = combineReducers({
  userStore,
  cookiesStore,
  projectStore,
  projectsStore,
  metaStore,
});
