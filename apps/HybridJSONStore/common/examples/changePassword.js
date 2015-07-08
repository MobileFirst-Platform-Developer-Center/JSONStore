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

asyncTest('Change Password', function () {

	var oldPassword = '123';
	var newPassword = '456';

	var clearPasswords = function () {
		oldPassword = null;
		newPassword = null;
	};

	var username = 'carlos';

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

		// Optional options object.
		var options = {

				// Optional username, default 'jsonstore'.
				username : username,

				// Optional password, default no password.
				password : oldPassword,

				// Optional local key generation flag, default false.
				localKeyGen : false
		};

		//Open the collection
		return WL.JSONStore.init(collections, options);
	})

	.then(function () {
		return WL.JSONStore.changePassword(oldPassword, newPassword, username);
	})

	.then(function (changePasswordReturnCode) {

		clearPasswords();

		deepEqual(changePasswordReturnCode, 0, 'check change password return code');
		start();
	})

	.fail(function (errorObject) {
		// Handle failure.

		clearPasswords();

		ok(false, "Failed with:" + errorObject.toString());
		start();
	});

});