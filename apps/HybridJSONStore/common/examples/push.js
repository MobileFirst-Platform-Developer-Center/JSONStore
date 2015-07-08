/*
 *
    COPYRIGHT LICENSE: This information contains sample code provided in source code form. You may copy, modify, and distribute
    these sample programs in any form without payment to IBM® for the purposes of developing, using, marketing or distributing
    application programs conforming to the application programming interface for the operating platform for which the sample code is written.
    Notwithstanding anything to the contrary, IBM PROVIDES THE SAMPLE SOURCE CODE ON AN "AS IS" BASIS AND IBM DISCLAIMS ALL WARRANTIES,
    EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, ANY IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, SATISFACTORY QUALITY,
    FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND ANY WARRANTY OR CONDITION OF NON-INFRINGEMENT. IBM SHALL NOT BE LIABLE FOR ANY DIRECT,
    INDIRECT, INCIDENTAL, SPECIAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE USE OR OPERATION OF THE SAMPLE SOURCE CODE.
    IBM HAS NO OBLIGATION TO PROVIDE MAINTENANCE, SUPPORT, UPDATES, ENHANCEMENTS OR MODIFICATIONS TO THE SAMPLE SOURCE CODE.

 */

asyncTest('Push', function () {

	var collectionName = 'people';

	var dirtyDocs = [];

	//This mock is a way of showing the code working without having to depend on the server.
	//It will print the invocationData to the console and return successfully.
	var adapterMock = function (invocationData) {
		var deferred = $.Deferred();

		WL.Logger.ctx({pretty: true}).debug('Called adapterMock with:', invocationData);

		setTimeout(function () {
			deferred.resolve();
		}, 0);

		return deferred.promise();
	};

	//Destroy first to start with no data and get predictable results in the test
	WL.JSONStore.destroy()

	.then(function () {

		// Object that defines all the collections.
		var collections = {

				// Object that defines the 'people' collection.
				people : {

					// Object that defines the Search Fields for the 'people' collection.
					searchFields : {name: 'string', age: 'integer'}
				}
		};

		//Open the collection
		return WL.JSONStore.init(collections);
	})

	.then(function () {

		var options = {
				markDirty: true
		};

		//Add data
		return WL.JSONStore.get(collectionName).add([{name: 'carlos', age: 10}, {name: 'mike', age: 5}], options);
	})

	.then(function () {

		//Returns all dirty documents
		return WL.JSONStore.get(collectionName).getAllDirty();

	})

	.then(function (arrayOfDirtyDocuments) {

		dirtyDocs = arrayOfDirtyDocuments;

		try {
			deepEqual(dirtyDocs[0].json.name, 'carlos', 'check document with name carlos');
			deepEqual(dirtyDocs[1].json.name, 'mike', 'check document with name mike');
		} catch (e) {
			ok(false, 'Exception: ' + e.toString());
		}

		var invocationData = {
				adapter : 'people', 
				procedure : 'updatePeople', 
				parameters : [dirtyDocs],
				compressResponse: true
		};

		//You may want to use: WL.Client.invokeProcedure(invocationData) instead.
		return adapterMock(invocationData);
	})

	.then(function (responseFromAdapter) {
		//Note: The adapterMock won't return a response (responseFromAdapter), but a real adapter will.
		//You may want to check the response when using a real adapter call before you continue to mark documents as clean.

		return WL.JSONStore.get(collectionName).markClean(dirtyDocs);
	})

	.then(function (numberOfDocumentsMarkedClean) {

		deepEqual(numberOfDocumentsMarkedClean, 2, 'check number of documents marked clean');
		start();
	})

	.fail(function (errorObject) {
		// Handle failure.

		ok(false, "Failed with:" + errorObject.toString());
		start();
	});

});
