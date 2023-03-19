import fetch from "node-fetch";
import axios from "axios";

//*******/
// setTimeout(() => {
//     console.log("Merhaba");
// },5000)

//*******/
// setInterval(() => {
//     console.log("Selam ben her saniye çalışacağım");
// },1000);


//******* call back function/
const sayHi = (cb) => {
    cb();
}

sayHi(()=>{
    console.log("Hello");
});

//******* fetch/
// fetch("https://jsonplaceholder.typicode.com/users")
// .then((data)=> data.json())
// .then((users)=>{ console.log("Users yüklendi!!!",users);

//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((data)=> data.json()
//     .then((post)=>console.log("Post 1 yüklendi !!!",post)))

//         fetch("https://jsonplaceholder.typicode.com/posts/2")
//         .then((data) => data.json()
//         .then((post2)=>console.log("Post 2 yüklendi !!",post2)))

//         });


//******* fetch kısa/
// async function getData(){
//     const users =await (await fetch("https://jsonplaceholder.typicode.com/users")).json();
//     const post1 =await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();
//     const post2 =await (await fetch("https://jsonplaceholder.typicode.com/posts/2")).json();


//     console.log("USERS ",users);
//     console.log("POST 1",post1);
//     console.log("POST 2",post2);
// }
// getData();

//******* axios/
// async function getData(){
//     const {data : users} =await axios("https://jsonplaceholder.typicode.com/users"));
//     const {data : post1}  =await  axios("https://jsonplaceholder.typicode.com/posts/1"));
//     const {data : post2 } =await  axios("https://jsonplaceholder.typicode.com/posts/2"));


//     console.log("USERS ",users);
//     console.log("POST 1",post1);
//     console.log("POST 2",post2);
// }
// getData();


//******* promises/
const getUsers = () => {
    return new Promise(async(resolve,reject) => {
//resolve'da then
//reject'de catch

    const {data} =await ( axios("https://jsonplaceholder.typicode.com/users"));

    resolve(data);
    //reject("Bir sorun oluştu!!")

})};

const getPosts = (post_id) => {
    return new Promise(async(resolve,reject) => {
    const {data} =await ( axios("https://jsonplaceholder.typicode.com/posts/"+post_id));
     resolve(data);
    //reject("Bir sorun daha oluştu!!")

})};


// (async()=>{
//     try{
//     const users =await getUsers();

//     await getPosts(1)
//         .then((data)=> console.log(data))
//         .catch((e)=>console.log(e));

//     console.log(users);}

//     catch(e){console.log(e);}
// })();

Promise.all([getUsers(),getPosts(1)]).then(console.log).catch(console.log)

