import 'rxjs/add/observable/dom/ajax';
import { map } from 'lodash';
import { Observable } from 'rxjs/Rx';
import { actionCreator } from '../rxflux';

export const loadGithubFollowers = actionCreator((payload) => {
  const url = `https://api.github.com/users/${payload.username}/followers`;
  return {
    type: 'GITHUB_FOLLOWERS_LOADING',
    payload: Observable.ajax(url)
      .map((xhr) => map(xhr.response, 'login'))
      .map((followers) => ({
        type: 'GITHUB_FOLLOWERS_LOADED',
        payload: followers
      }))
  };
});
// export const getFlagsGrabTimr = actionCreator((payload) => {
//   return {
//     type: 'FLAGS_LOADING',
//     payload: Observable.
//   } 
// });

export const changeName = actionCreator((payload) => ({
  type: 'NAME_CHANGED',
  payload
}));
export const changePage = actionCreator((payload) => ({
  type: 'PAGE_CHANGED',
  payload
}));
export const changeDevInfo = actionCreator((payload) => {
  return {
    type: 'DEVINFO_CHANGED',
    payload
  }
});
export const grabTimrData = actionCreator((payload) => {
  return {
    type: 'TIMR_CHANGED',
    payload
  }
});
export const grabSrstateData = actionCreator((payload) => {
  return {
    type: 'SRSTATE_CHANGED',
    payload
  }
});
export const grabFlagData = actionCreator((payload) => {
  return {
    type: 'FLAGS_CHANGED',
    payload 
  }
});
export const toggleCatbox = actionCreator((payload) => ({
  type: 'CATBOX_CHANGED',
  payload
}));
export const setDeviceType = actionCreator((payload) => {
  return {
    type: 'SET_DEVICE',
    payload
  }
});

