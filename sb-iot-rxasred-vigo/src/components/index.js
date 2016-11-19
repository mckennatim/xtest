import Devices from './Devices';
import Cat from './Cat';
import Harry from './Harry';
import DevInf from './DevInf';
import App from './App';
import DeviceList from './DeviceList';

const multi =[{pri:'Cat', mul:[
								['Cat', 'Harry'],
								['Harry', 'Cat', 'Devices']]
							 },
							{pri:'Harry', mul:[
								['Harry', 'Cat'],
								['Cat', 'Harry', 'Devices']]
							 },
							{pri:'DevInf', mul:[
								['Devices', 'Devinf'],
								['Devices', 'Devinf', 'Cat']]
							 }
							]

//['watch', 'phone', 'phoneL', 'tablet', 'tabletL', 'laptop']
const panes= [1,1,2,2,3,3]  

export {Devices, Cat, Harry, DevInf, App, DeviceList, multi, panes}
