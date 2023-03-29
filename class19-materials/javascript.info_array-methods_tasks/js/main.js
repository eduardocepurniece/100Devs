/*Translate border-left-width to borderLeftWidth
importance: 5
Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

That is: removes all dashes, each word after dash becomes uppercased.*/

function camelCase(str){
    return str.split('-').map((word, index) =>{
        if(index !== 0){
            return word[0].toUpperCase() + word.slice(1);
        }
        return word;
    }).join('');
}
console.log(camelCase('abraham-lincoln'));


/*Filter range
importance: 4
Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

The function should not modify the array. It should return the new array.*/

function filterArr(arr, a, b){
    let filteredArr = arr.filter(n => n >= a).filter(n => n <= b);
    return filteredArr;
}

console.log(filterArr([5, 3, 8, 1], 1, 4));

/*Filter range "in place"
importance: 4
Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

The function should only modify the array. It should not return anything.*/

function filterArrB(arr, a, b){
    return arr.filter(n => n >= a).filter(n => n <= b);
}

console.log(filterArrB([5, 3, 8, 1], 1, 4));

/*Copy and sort array
importance: 5
We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

Create a function copySorted(arr) that returns such a copy.*/

function sortArr(arr){
    let sortedArr = arr.filter(x => x);
    return sortedArr.sort();
}

console.log(sortArr(["HTML", "JavaScript", "CSS"]));

/*
Map to names
importance: 5
You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.*/

function mapNames(arr){
    return arr.map(object => object.name);
}

console.log(mapNames([{ name: "John", age: 25 }, { name: "Pete", age: 30 }, { name: "Mary", age: 28 }]));

/*Map to objects
importance: 5
You have an array of user objects, each one has name, surname and id.

Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.*/

function mapNamesB(arr){
    let newArr = arr.filter(x => x);
    return newArr.map(user => ({fullName: `${user.name} ${user.surname}`, id: user.id}));
}

console.log(mapNamesB([{ name: "John", surname: "Smith", id: 1 }, { name: "Pete", surname: "Hunt", id: 2 }, { name: "Mary", surname: "Key", id: 3 }]));

/*Sort users by age
importance: 5
Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.*/

function sortByAge(arr){
    return arr.sort((a, b) => a.age - b.age);
}

console.log(sortByAge([{ name: "John", age: 25 }, { name: "Pete", age: 30 }, { name: "Mary", age: 28 }]));

/*Shuffle an array
importance: 3
Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.

Multiple runs of shuffle may lead to different orders of elements. */

function randomizeArr(arr){
    return arr.sort(() => Math.random() - 0.5);
}

console.log(randomizeArr([1, 2, 3]));

/*Get average age
importance: 4
Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.

The formula for the average is (age1 + age2 + ... + ageN) / N.*/

function getAverageAge(users){
    return users.reduce((acc, curr) => acc + curr.age, 0) / users.length;
}

console.log(getAverageAge([{ name: "John", age: 25 }, { name: "Pete", age: 30 }, { name: "Mary", age: 29 }]));

/*Filter unique array members
importance: 4
Let arr be an array.

Create a function unique(arr) that should return an array with unique items of arr.*/

function findUniqueStr(arr){
    let result = [];
    arr.forEach(x => {
        if(!result.includes(x)){
            result.push(x);
        }
    });
    return result;
}

console.log(findUniqueStr(["Hare", "Krishna", "Hare", "Krishna","Krishna", "Krishna", "Hare", "Hare", ":-O"]));


/*Create keyed object from array
importance: 4
Let’s say we received an array of users in the form {id:..., name:..., age:... }.

Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.*/

function groupUsersById(users){
    let groupOfUsers = {};
    for( x of users){
        groupOfUsers[x.id]= x;
    }
    return groupOfUsers;
}

console.log(groupUsersById([
    {id: 'john', name: "John Smith", age: 20}, {id: 'ann', name: "Ann Smith", age: 24}, {id: 'pete', name: "Pete Peterson", age: 31},]));