const users = ["Mehmet","Ahmet","Murat"];
const otherUsers = [{name:"Volkan",age:21},{name:"Volkan",age:25},{name:"Leo",age:3}];

// push
users.push("Ezgi");
users.push("Ayse");
console.log(users);

//map

// for (let index = 0; index < users.length; index++) {
//     console.log(users[index]); }

users.map((i)=>{
    console.log(i)
})

//find
const result = otherUsers.find((item)=> item.name === "Volkan" && item.age > 20);
console.log(result);

//filter
const filtered = otherUsers.filter((item) => item.name === "Volkan" && item.age >18);
console.log(filtered);

//some 
const some =otherUsers.some((item) =>item.age === 10);
console.log(some);

//every
const every =otherUsers.every((item)=>item.age > 2);
console.log(every);

//includes
const fruits = ["apple","banana","melon"];

const included = fruits.includes("banana");
console.log(included);
