//Array vs Set vs Map vs Object

/**
1. Search/Find
*/
	/** Array **/
		// array of objects
		array.find(object => object.id === 2); // returns object with id 2
		//array of numbers starting from "zero"
		array.indexOf("one"); // returns 1 as index

	/** Object
		// array of Objects
		// eg: [{id: 1, name: "one"},...] can be converted to {1: {name: "one"}, ... }
		object[2] // returns the value of key 2 (i.e {name: "two"} 

	/** Set
		const mySet = new Set(['1', '2', '3']);
		[...mySet].indexOf('2') // returns 1
		const mySet = new Set([{1: 'one'}, {2: 'two'}, {3: 'three'}]);
		[...mySet].find(object => object[2] === 'two'); // returns {2: 'two'}

	/** Map
		var map = new Map([[ 1, 'one' ],[ 2, 'two' ]]);
		map.get(1) // returns 'one'

/**
2. Sort
*/
	/** Array **/
		// array of strings in a uniform case without special characters
		const arr = [ "sex", "age", "job"];
		arr.sort(); //returns ["age", "job", "sex"]
		// array of numbers
		const arr = [ 30, 4, 29 , 19];
		arr.sort((a, b) => a-b); // returns [4, 19, 29, 30]
		// array of number strings
		const arr = [ "30", "4", "29" , "19" ];
		arr.sort((a, b) => a-b); // returns ["4", "19", "29", "30"]
		// array of mixed numerics
		const arr = [ 30, "4", 29 , "19" ];
		arr.sort((a, b) => a-b); // returns ["4", "19", 29, 30]
		// array of non-ASCII strings and also strings
		const arr = ['réservé', 'cliché', 'adieu'];
		arr.sort((a, b) => a.localeCompare(b)); // returns is ['adieu', 'cliché','réservé']
		// array of objects
		const arr = [
		  { name: 'Sharpe', value: 37 },
		  { name: 'And', value: 45 },
		  { name: 'The', value: -12 }
		];
		// sort by name string
		arr.sort((a,b) => a['name'].localeCompare(b['name']));
		// sort by value number
		arr.sort((a,b) => a['value']-b['value']);

	/** Object **/
		// object with numeric/numeric-string keys are sorted
		const obj = { 30: 'dad', '4': 'kid', 19: 'teen', '100': 'grams'};
		console.log(obj) // returns {4: "kid", 19: "teen", 30: "dad", 100: "grams"} with sorted keys
		// object with key-values as alpha-strings are not sorted
		const obj = { "b": "two", "a": "one", "c": "three" };
		console.log(obj) // returns {b: "two", a: "one", c: "three"}
		// object with numeric, numeric-string and alpha keys are partially sorted. (i.e only numeric keys are sorted)
		const obj = { b: "one", 4: "kid", "30": "dad", 9: "son", a: "two" };
		console.log(obj) // returns {4: "kid", 9: "son", 30: "dad", b: "one", a: "two"}

	/** Set **/
		// set to array and array sort 
		const set = new Set(['b', 'a', 'c']);
		[...set].sort(); // returns ['a', 'b', 'c'] which is an array
		// alternatively we can use entries to sort a set and create a new sorted set. The iterator gives us the ['a', 'a'] when spread over an array.
		const set = new Set(['b', 'a', 'c']);
		const sortedSet = new Set([...set.entries()].map((entry) => entry[0]).sort());

	/** Map **/
		// entries spread over an array can be sorted like an array
		const map = new Map([["c", 'three'],["a", 'one'], ["b", 'two']]);
		const sortedMap = new Map([...map.entries()].sort()) // returns sorted Map(3) {"a" => "one", "b" => "three", "c" => "two"}


/**
3. Includes or Has
*/
	/** Array **/
		// we are considering a linear array only
		const arr = [1, 2, 3];
		arr.includes(1); // returns true
		arr.includes('1'); // returns false as types do not match

	/** Object **/
		// we are going to consider only the keys
		const obj = { a: 1, b: 2, c: 3, 1: 'one' };
		obj.hasOwnProperty('a'); // returns true
		obj.hasOwnProperty('1'); // returns true because no type check
		obj.hasOwnProperty(1); // returns true

	/** Set **/
		const set = new Set([1, 2, 3, 4, 5]);
		set.has(4); // returns true
		set.has('4'); // returns false because of mismatch in type

	/** Map **/
		const map = new Map([[3, 'three'],["a", 'one'], ["b", 'two']]);
		map.has('a'); // returns true
		map.has(3); // returns true
		map.has('3'); // returns false because types don't match


/**
4. Removing Duplicates
*/
	/** Array **/
		// considering a linear array Set gives us the answer we need.
		const arr = [1, 2, 2, 4, 5, 5];
		[...new Set(arr)]; // returns [1, 2, 4, 5]
		// however set doesn't remove duplicates from array of objects
		const arr = [{a:1},{b:2},{a:1}];
		[...new Set(arr)]; // returns [{a:1},{b:2},{a:1}]
		// hence we can use ES6 filter and map functions to achieve the same
		arr.filter((obj, index) => { 
		  return arr.map(obj => obj['a']).indexOf(obj['a']) === index;    
		}); // removes duplicate based on the key 'a'

	/** Object **/
		const obj = { b: "one", a: "two", a: "three" };
		console.log(obj); // returns {b: "one", a: "three"}

	/** Set **/
		// a linear array iterable
		const set = new Set([1, 2, 2, 4, 5, 5]);
		console.log(set); // returns Set {1, 2, 4, 5}
		// array of objects
		const set = new Set([{a:1},{b:2},{a:1}]);
		console.log(set); // returns Set {{a:1},{b:2},{a:1}} with duplicate objects

	/** Map **/
		const map = new Map([[3, 'three'], [2, 'two'], [2, 'four']]);
		console.log(map); // returns {3 => "three", 2 => "four"} 


/**
5. Delete
*/
	/** Array **/
		// I personally prefer this method.
		const arr = [ 'a', 'b', 'c' ];
		arr.filter(e => e !== 'c'); // returns [ 'a', 'b' ] removing 'c'

	/** Object **/
		// The infamous delete method
		const obj = { b: "one", a: "two" };
		delete obj.a; // deletes a and returns true

	/** Set **/
		const set = new Set([1, 2, 4, 5]);
		set.delete(4); // deletes 4 and returns true
		set.delete('5'); // returns false as types do not match

	/** Map **/
		const map = new Map([[3, 'three'], [2, 'two']);
		map.delete(3); // deletes [3, 'three'] and returns true.
		map.delete('2'); // returns false as types do not match


/**
6. Length and Size
*/
	/** Array **/
		// arrays have a built-in property for length which is different from collection size.
		['1', '2', '3'].length // returns 3

	/** Object **/
		// objects have no built-in property to check length or size, so we need to resort to using keys array to check length.
		Object.keys({ b: 'one', a: 'two', c: 'three' }).length // returns 3

	/** Set **/
		// set has a size property built-in
		new Set([{a:1},{b:2},{a:1}]).size // returns 3

	/** Map **/
		// map has a size property built-in
		new Map([[3, 'three'],['a', 'one'], ['b', 'two']]).size // returns 3
