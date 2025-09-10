// let [a=5,b=6,c=7] = [1,2];
// console.log(a);
// console.log(b);
// console.log(c);

// let j = 1;
// let k = 2;
// [j, k] = [k, j];
// console.log(j);
// console.log(k);

/*************************
 * 전개 구문
 * arr1 을 [4,5,6,1,2,3] 으로
 **************************/

// let arr1 = [1,2,3];
// let arr2 = [4,5,6];

// arr2.reverse().forEach(element => {
//     arr1.unshift(element);
// });

// 전개 구문
// arr1 = [...arr2, ...arr1];

// console.log(arr1);


// let user = {name: "Mike"};
// let info = {age: 30};
// let fe = ["JS", "React"];
// let lang = ["Korean", "English"];

// user = Object.assign( {}, user, info,{
//     skills : [],
// })

// fe.forEach( (item)=> {
//     user.skills.push(item);
// })
// lang.forEach( (item)=> {
//     user.skills.push(item);
// })

// 전개구문
// user = {
//     ...user,
//     ...info,
//     skills : [
//         ...fe,
//         ...lang,
//     ]
// };

// console.log(user);