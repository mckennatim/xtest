import 'rxjs/add/observable/dom/ajax';
import { map } from 'lodash';
import { Observable } from 'rxjs/Rx';
import { actionCreator } from '../rxflux';
import { fromMqtt$ } from './fromMqtt';
import { props} from '../components/App'
//import { initState } from '../data/initState'

var mqtt$ = {
  next(value) {},
  error(err) {throw err;},
  complete() {}
}

var storeCopy = {route: {currentDevId: 'instorcopy'}}
export const copyStore= (props)=>{
  storeCopy = props
}

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
  if (storeCopy.route.currentDevId != payload.par.id){
    mqtt$.next('end')
    mqtt$ = fromMqtt$(payload.par.id)
    mqtt$.subscribe(
      function (e) {
        var sp = e.topic.split("/")
        var job = sp[1];
        switch(job){
          case "srstate":
            grabSrstateData(e.payload) 
            break;
          case "timr":
            grabTimrData(e.payload)
            break;
          case "flags":
            grabFlagData(e.payload)
            break;
        }
    });  
    mqtt$.next(`{\"id\":2,\"req\":\"flags\"}`)
    mqtt$.next(`{\"id\":3,\"req\":\"timr\"}`)
    mqtt$.next(`{\"id\":0,\"req\":\"srstates\"}`)
  }  
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

