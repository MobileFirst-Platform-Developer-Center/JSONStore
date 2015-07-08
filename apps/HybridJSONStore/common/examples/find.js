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

asyncTest('Find', function () {

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
		//Add data
		return WL.JSONStore.get(collectionName).add([{name: 'carlos', age: 10}, {name: 'mike', age: 5}]);
	})

	.then(function () {

		// Find all documents that match the queries.
		var queryPart1 = WL.JSONStore.QueryPart()
		.equal('name', 'carlos')
		.lessOrEqualThan('age', 10);

		var options = {
				// Returns a maximum of 10 documents, default no limit.
				limit: 10,

				// Skip 0 documents, default no offset.
				offset: 0,

				// Search fields to return, default: ['_id', 'json'].
				filter: ['_id', 'json'],

				// How to sort the returned values, default no sort.
				sort: [{name: WL.constant.ASCENDING}, {age: WL.constant.DESCENDING}]
		};

		return WL.JSONStore.get(collectionName)

		// Alternatives:
		// - findById(1, options) which locates documents by their _id field
		// - findAll(options) which returns all documents
		// - find({'name': 'carlos', age: 10}, options) which finds all documents
		// that match the query.
		.advancedFind([queryPart1], options);
	})

	.then(function (arrayResults) {

		deepEqual(arrayResults, [{_id: 1, json: {name: 'carlos', age: 10}}], 'check find results');
		start();
	})

	.fail(function (errorObject) {
		// Handle failure.

		ok(false, "Failed with:" + errorObject.toString());
		start();
	});

});
