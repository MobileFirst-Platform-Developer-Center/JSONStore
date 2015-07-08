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

asyncTest('Transactions', function () {

	var collectionName = 'people';

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

		return WL.JSONStore.startTransaction();
	})

	.then(function () {

		// Handle startTransaction success.
		// You can call every JSONStore API method except:
		// init, destroy, removeCollection, and closeAll.

		var data = [{name: 'carlos'}];

		return WL.JSONStore.get(collectionName).add(data);
	})

	.then(function () {

		var docs = [{_id: 1, json: {name: 'carlos'}}];

		return WL.JSONStore.get(collectionName).remove(docs);
	})

	.then(function () {

		return WL.JSONStore.commitTransaction();
	})

	.then(function () {

		return WL.JSONStore.get(collectionName).findAll();
	})

	.then(function (documentsInsideTheCollection) {

		deepEqual(documentsInsideTheCollection, [], 'check documents inside the collection');

		start();
	})

	.fail(function (errorObject) {

		var err = errorObject;

		// Handle failure for any of the previous JSONStore operation.
		//(startTransaction, add, remove).

		WL.JSONStore.rollbackTransaction()

		.always(function () {
			ok(false, "Failed with:" + err.toString());
			start();
		});
	});

});
