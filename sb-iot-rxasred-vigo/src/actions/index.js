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
  //timr's are the 2nd 3rd and 4th of this device
  const justTimr = payload.tIMElEFT.filter(function(x,i){
    return i>1
  }) 
  return {
    type: 'TIMR_CHANGED',
    payload: justTimr
  }
});
export const grabSrstateData = actionCreator((payload) => {
  return {
    type: 'SRSTATE_CHANGED',
    payload
  }
});
export const toggleCatbox = actionCreator((payload) => ({
  type: 'CATBOX_CHANGED',
  payload
}));

