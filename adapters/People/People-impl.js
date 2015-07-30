/**
* Copyright 2015 IBM Corp.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function getPeople() {

	//Note: In a real application this adapter you would
	//contact your back-end service to get data

	//Read the MobileFirst Adapters Getting Started Tutorial for details
	//and examples regarding contacting a back-end service

	var data = { peopleList : [{name: 'chevy', age: 23}, {name: 'yoel', age: 23}] };

	WL.Logger.debug('Adapter: people, procedure: getPeople called.');
	WL.Logger.debug('Sending data: ' + JSON.stringify(data));

	return data;
}

function pushPeople(data) {

	//Note: In a real application this adapter you would
	//contact your back-end service to send this data

	//Read the MobileFirst Adapters Getting Started Tutorial for details
	//and examples regarding contacting a back-end service

	WL.Logger.debug('Adapter: people, procedure: pushPeople called.');
	WL.Logger.debug('Got data from JSONStore to ADD: ' + JSON.stringify(data));

	return;
}

function addPerson(data) {

	//Note: In a real application this adapter you would
	//contact your back-end service to send this data

	//Read the MobileFirst Adapters Getting Started Tutorial for details
	//and examples regarding contacting a back-end service

	WL.Logger.debug('Adapter: people, procedure: addPerson called.');
	WL.Logger.debug('Got data from JSONStore to ADD: ' + JSON.stringify(data));

	return;
}

function removePerson(data) {

	//Note: In a real application this adapter you would
	//contact your back-end service to send this data

	//Read the MobileFirst Adapters Getting Started Tutorial for details
	//and examples regarding contacting a back-end service

	WL.Logger.debug('Adapter: people, procedure: removePerson called.');
	WL.Logger.debug('Got data from JSONStore to REMOVE: ' + JSON.stringify(data));

	return;
}

function replacePerson(data) {

	//Note: In a real application this adapter you would
	//contact your back-end service to send this data

	//Read the MobileFirst Adapters Getting Started Tutorial for details
	//and examples regarding contacting a back-end service

	WL.Logger.debug('Adapter: people, procedure: replacePerson called.');
	WL.Logger.debug('Got data from JSONStore to REPLACE: ' + JSON.stringify(data));

	return;
}