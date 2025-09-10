// forEach
// let arr = ["Mike", "Tom", "Jane"];
// arr.forEach((item, index) => {
//     console.log(`${index + 1} : ${item}`);
// })

// find / findIndex
// let arr = [1, 2, 3, 4, 5];

// const result = arr.find((item) => {
//     return item % 2 === 0;
// });

// console.log(result);

// let userList = [
//     {name: "Mike", age: 30},
//     {name: "Tom", age: 10},
//     {name: "Jane", age: 20},
// ]; 

// const result = userList.find((user) => {
//     if(user.age < 19){
//         return true;
//     }
//     return false;
// });
// console.log(result);

// example
// let userList = [
//     {name: "Mike", age: 30},
//     {name: "Jane", age: 27},
//     {naem: "Tom", age: 10},
// ]

// let newUserList = userList.map((user, index) => {
//     return Object.assign({}, user, {
//         id: index + 1,
//         isAdult: user.age > 19,
//     })
// })

// console.log(newUserList);
// console.log(userList);

// arr.sort()
// let arr = [27, 8, 5, 13];

// 내부로직
// 8, 27, 5, 13
// 5, 8, 27, 13
// 5, 8, 13, 27

// function fn(a,b){
//     return a-b;
// } 

// arr.sort(fn);
// console.log(arr);

/***********************
arr.reduce()
인수로 함수를 받음 
(누적 계산값, 현재값) => {return 계산값};
*************************/

// 배열의 모든 수 합치기
// let arr = [1,2,3,4,5];

// const result = arr.reduce( (prev, cur) => {
//     return prev + cur;
// }, 100)

// console.log(result);

// let userList = [
//     { name: "Mike", age: 30 },
//     { name: "Tom", age: 10 },
//     { name: "Jane", age: 27 },
//     { name: "Sue", age: 26 },
//     { name: "Harry", age: 42 },
//     { name: "Steve", age: 68 },
// ]

// let result = userList.reduce( (prev, cur) => {
//     // 성인인 사람 
//     // if(cur.age > 19){
//     //     prev.push(cur.name);
//     // }
//     // return prev;
//     // 이름이 3자인 사람 
//     // if(cur.name.length === 3){
//     //     prev.push(cur.name);
//     // }
//     // return prev;
// }, [] )

// console.log(result);