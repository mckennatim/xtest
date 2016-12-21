import {Devices} from './Devices';
import {Cat} from './Cat';
import Harry from './Harry';
import {DevInf} from './DevInf';
import {App} from './App';
import DeviceList from './DeviceList';
import {SenRel} from './SenRel';
import {Blank} from './Blank';
import {CachArray} from './CachArray';

const multi =[{pri:'Cat', mul:[
								['Cat', 'Harry'],
								['Harry', 'Cat', 'Devices']]
							 },
							{pri:'Harry', mul:[
								['Harry', 'Cat'],
								['Cat', 'Harry', 'Devices']]
							 },
							{pri:'SenRel', mul:[
								['DevInf', 'SenRel'],
								['SenRel', 'DevInf', 'Devices']]
							 },
							{pri:'DevInf', mul:[
								['Devices', 'DevInf'],
								['SenRel', 'DevInf', 'Devices']]
							 }
							]

//['watch', 'phone', 'phoneL', 'tablet', 'tabletL', 'laptop']
const panes= [1,1,2,2,3,3]  

export {Devices, Cat, Harry, DevInf, App, DeviceList, SenRel, Blank, CachArray, multi, panes}
