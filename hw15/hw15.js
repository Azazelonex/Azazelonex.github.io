<<<<<<< HEAD
function keyBy(arr, key) {
	
	const newArr = arr.reduce((newArr, user) => {

		if (!newArr[user[key]]) {

			newArr[user[key]] = [];
		}

		newArr[user[key]].push(user);

		return newArr;

	}, {});

	return newArr;
=======
function keyBy(arr, key) {
	
	const newArr = arr.reduce((newArr, user) => {

		if (!newArr[user[key]]) {

			newArr[user[key]] = [];
		}

		newArr[user[key]].push(user);

		return newArr;

	}, {});

	return newArr;
>>>>>>> 8da6e68203ca4feed34aff6e8df298d0ef3da5c3
}