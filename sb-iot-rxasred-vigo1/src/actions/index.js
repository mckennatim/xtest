import 'rxjs/add/observable/dom/ajax';
import { map } from 'lodash';
import { Observable } from 'rxjs/Rx';
import { actionCreator } from '../rxflux';
import { fromMqtt$ } from './fromMqtt';

var mqtt$ = {
  next(value) {},
  error(err) {throw err;},
  complete() {}
}

var storeCopy = {route: {currentDevId: 'instorcopy'}}
export const copyStore= (props)=>{
  //console.log(props)
  storeCopy = props
}
export const nrGetDevData= (devId)=>{
  mqtt$.next('end')
  mqtt$ = fromMqtt$(devId)
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
        case "sched":
          // console.log('grabSchedData')
          grabSchedData(e)
          break;
      }
  });  
  mqtt$.next(`{\"id\":2,\"req\":\"flags\"}`)
  mqtt$.next(`{\"id\":3,\"req\":\"timr\"}`)
  mqtt$.next(`{\"id\":0,\"req\":\"srstates\"}`)
  mqtt$.next(`{\"id\":1,\"req\":\"progs\"}`)  
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
export const changeSenRel = actionCreator((payload) => {
  //console.log(payload)
  console.log(`${storeCopy.route.currentDevId} != ${payload.par.id}`)
  if (storeCopy.route.currentDevId != payload.par.id){
    console.log(`should somehow update to ${payload.par.id}`)
    nrGetDevData(payload.par.id)
  }  
  return {
    type: 'SENREL_CHANGED',
    payload
  }
});
export const changeDevInfo = actionCreator((payload) => {
  console.log(`${storeCopy.route.currentDevId} != ${payload.par.id}`)
  if (storeCopy.route.currentDevId != payload.par.id){
    nrGetDevData(payload.par.id)
    // mqtt$.next('end')
    // mqtt$ = fromMqtt$(payload.par.id)
    // mqtt$.subscribe(
    //   function (e) {
    //     var sp = e.topic.split("/")
    //     var job = sp[1];
    //     switch(job){
    //       case "srstate":
    //         grabSrstateData(e.payload) 
    //         break;
    //       case "timr":
    //         grabTimrData(e.payload)
    //         break;
    //       case "flags":
    //         grabFlagData(e.payload)
    //         break;
    //       case "sched":
    //         // console.log('grabSchedData')
    //         grabSchedData(e)
    //         break;
    //     }
    // });  
    // mqtt$.next(`{\"id\":2,\"req\":\"flags\"}`)
    // mqtt$.next(`{\"id\":3,\"req\":\"timr\"}`)
    // mqtt$.next(`{\"id\":0,\"req\":\"srstates\"}`)
    // mqtt$.next(`{\"id\":1,\"req\":\"progs\"}`)
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
export const reqSchedData = actionCreator((payload) => {
  //mqtt$.next(`{\"id\":1,\"req\":\"progs\"}`)
  return {
    type: 'REQ_SCHED',
    payload
  }
});
export const grabSchedData = actionCreator((payload) => {
  // console.log('inaction grabSchedData')
  let pl={}
  pl.sched = payload.payload
  var sp = payload.topic.split("/")
  const devId = sp[0]
  pl.devId = devId
  return {
    type: 'SCHED_CHANGED',
    payload: pl
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
