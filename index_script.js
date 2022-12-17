// Array in depth and for of loops
// Array method

// let names =['Azhar', 'Deepak', 'Imran', 'Sumant', 'Tipu'];
// console.log(names);
// console.log(names.length);

// console.log(names[2+2]);
// console.log(names[names.length-2]);

// names[2] ='Ansari';
// console.log(names);

// let namess = new Array('name1', 'name2');  //a way to declare the array// not record
// console.log(namess);

// Push => insert new values into the array
// names.push('Cash');
// console.log(names);

// slice
// let names =['Azhar', 'Deepak', 'Imran', 'Sumant', 'Tipu'];
// console.log(names.slice(1, 3)); //3 is the excluded value not included value

// // // splice
// let fruit = ['Apple', 'badaapple', 'chota Apple', 'double apple'];
// fruit.splice(1, 3 ,'accha apple', 'kharab Apple');
// console.log(fruit);

// Concatenation

// let arr1 = [1,2,3,4,5];
// let arr2 = [4,5,6,7,8];
// let arr3 = [7,7,7,7,7,7,7,7,7,]

// console.log(arr1.concat(arr2));
// console.log(arr1.concat(arr2, arr3));

// fill

// let arr4 = [1,2,3,4,5,6,7,8,9];
// arr4.fill('Azhar', 1, 6);
// console.log(arr4);

// Include
// let num =[1,2,3,4,5,6,7,8];
// console.log(num.includes(7,));

// indexof
// let num =[1,2,3,'Azhar', 5,8,9,7,'Azhar', 'Azhar'];
// console.log(num.indexOf('Azhar'));

// isarray
// let num =[1,2,3,'Azhar', 4,5,8, 'Azhar'];
// let num1 ='Azhar';
// console.log(Array.isArray(num));
// console.log(Array.isArray(num1));

// Join
// let arr1 =[1,2,3,4,5,6];
// let var1 =arr1.join('');
// // console.log(var1);
// console.log(arr1.join(''));
// console.log(typeof arr1);  

// keys
// For of

// lastindexof
// let num =[1,2,'Azhar',3,4,5,6,'Azhar'];
// console.log(num.lastIndexOf('Azhar'));
// console.log(num.indexOf('Azhar'));
// console.log(num.indexOf(5));

// Map
// let maths =[1, 4, 9, 16, 25,];
// console.log(maths.map(Math.sqrt));


// Pop
// let maths =[1,4,9,16,25];
// console.log(maths.pop());
// console.log(maths);

// reverse
// let maths =[1,4,9,16,25];
// console.log(maths.reverse());

// Shift
// let maths = [88,'Azhar','Ansari',1,4,9,16,25];
// console.log(maths.shift());

// sort
// let names =['Azhar','Sumant', 'Imran', 'Deepak','Tipu'];
// console.log(names.sort());
// console.log(names.reverse(names.sort()));

// unshift
// let fruit =['Apple','badaapple','chhota apple', 'doubleapple'];
// fruit.unshift('apple01','apple02');
// console.log(fruit);

// converting to array

// let name ='Azhar';
// let array1= name.split("");
// console.log(array1);

// for of
// let fruit =['Apple','badaapple','chhota apple', 'doubleapple'];
// let upperfruit =[]; //empty array

// for (let Azhar of fruit){
//     upperfruit.push(Azhar.toUpperCase());
// }

// console.log(upperfruit);

// Break and continue
// continue
// for (let i = 0; i<=5; i++){
//     if (i==3){
//         break;  //skip omit
//     }
//     console.log(i);
// }