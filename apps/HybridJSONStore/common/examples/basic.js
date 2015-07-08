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

asyncTest('Basic Scenario', function () {

	WL.JSONStore.destroy()

	.then(function () {

		var collections = {
				people : {
					searchFields: {name: 'string', age: 'integer'}
				}
		};

		return WL.JSONStore.init(collections);
	})

	.then(function () {

		var data = [{name: 'carlos', age: 20},
		            {name: 'mike', age: 30}];

		return WL.JSONStore.get('people').add(data);
	})

	.then(function () {
		return WL.JSONStore.get('people').findAll();
	})

	.then(function (res) {

		deepEqual(res, [{_id: 1, json: {name: 'carlos', age: 20}}, 
		                {_id: 2, json: {name: 'mike', age: 30}}], 'check find all result');

		start();
	})

	.fail(function (err) {
		ok(false, 'Got failure: ' + err.toString());
		start();
	});

});