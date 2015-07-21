/*
 * COPYRIGHT LICENSE: This information contains sample code provided in source code form. You may copy, modify, and distribute
 * these sample programs in any form without payment to IBM® for the purposes of developing, using, marketing or distributing
 * application programs conforming to the application programming interface for the operating platform for which the sample code is written.
 * Notwithstanding anything to the contrary, IBM PROVIDES THE SAMPLE SOURCE CODE ON AN "AS IS" BASIS AND IBM DISCLAIMS ALL WARRANTIES,
 * EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, ANY IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, SATISFACTORY QUALITY,
 * FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND ANY WARRANTY OR CONDITION OF NON-INFRINGEMENT. IBM SHALL NOT BE LIABLE FOR ANY DIRECT,
 * INDIRECT, INCIDENTAL, SPECIAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE USE OR OPERATION OF THE SAMPLE SOURCE CODE.
 * IBM HAS NO OBLIGATION TO PROVIDE MAINTENANCE, SUPPORT, UPDATES, ENHANCEMENTS OR MODIFICATIONS TO THE SAMPLE SOURCE CODE.
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