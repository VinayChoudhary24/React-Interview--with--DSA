// console.log("Start");

// for(let i = 0; i < 100; i++) {
//     console.log(i)
// }
// console.log("end");

// let saving = 300;
// console.log(`Hello CK. You have net worth of $${saving}. Is that true?`)
// console.log('Hello CK. You have net \n worth of $'+saving+'. Is that true?')
// console.log("Hello CK. You have \'net worth of $"+saving+". Is that true?")

// let arr = [1, 2, 3, 4];

// let age = 44;

// let arr1 = ["sf", 1, 2233, ["a", 33], arr];

// console.log(arr1);

// console.log(arr1[4]);

// console.log(arr1[4][2]);

// console.log(arr1[3][0]);

// let name = "Peter";

// function greet() {
//   let greeting = "Hello";
//   {
//     let lang = "English";
//     console.log(`${lang}: ${greeting} ${name}`);
//   }
// }
// greet();

// let greeting = "Hello";
// function greet() {
// let name = "Peter";
// console.log(`${greeting} ${name}`);
// }
// greet();
// {
// let greeting = "Hello World!";
// console.log(greeting);
// }

// let results = 0;
// if (1) {
//   const results = 10;
// }
// function add(a, b) {
//   const results = a + b;
//   return results;
// }
// console.log(add(3, 4));
// console.log(results);

// let obj1 = { name: "CK" };
// let obj2 = { name: "CK" };
// let name = "VI";
// let name2 = "VI";
// console.log(name == name2);
// console.log(name === name2);
// console.log(obj1 == obj2);
// console.log(obj1 === obj2);
// let obj3 = obj2;
// console.log(obj2 === obj3);

// let arr1 = ["sports", "cooking"];
// let arr2 = ["sports", "cooking1"];
// let arr3 = arr2;
// console.log(arr1 == arr2);
// console.log(arr1 === arr2);
// console.log(arr2 === arr3);

// let value = "VI";

// switch (value) {
//     case "BB":
//         console.log("BB")
//         break;
//     case "VI":
//         console.log("VII");
//         break;
//     default:
//         console.log("KATM");
// }

// const num = 24;

// switch (num) {
//   case 11:
//     console.log(11);
//     break;
//   case 24:
//     console.log(24);
//     break;
//   default:
//     console.log(00);
// }

// function multiply(a, b = 1) {
//     a = a || 3;
//     return a * b;
//     }
//     console.log(multiply(5, 2));
//     // expected output: 10
//     console.log(multiply());

// const sumUp = (a, b, ...numbers) => {
//     let sum = 0;
//     for (const num of numbers) {
//     sum += num;
//     }
//     return sum;
//     };
//     console.log(sumUp(1, 5, 10, -3, 6, 10));
//     console.log(sumUp(1, 5, 10, -3, 6, 10, 25, 88));

// const sumUp = (resultHandler, ...numbers) => {
//   let sum = 0;
//   for (const num of numbers) {
//     sum += num;
//   }
//   return resultHandler(sum);
// };
// const showResult = (message, result) => {
//   return `The result after ${message} all numbers is: ${result}`;
// };
// // console.log(sumUp(showResult(2,3), 1, 5, -3, 6, 10)); //This is Wrong Calling we Will Need Bind

// console.log(sumUp(showResult.bind(this, "Add"), 2, 2, 2))
// console.log(sumUp(showResult.bind(this, "adding"), 1, 5, -3, 6, 10));
// // console.log(subtractUp(showResult.bind(this, "substracting"), 1, 10, 15, 20));

// let person = {
//   name: "CK",
//   "Last Name": "Pradhan",
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
//   greet: function () {
//     alert("Hi there!");
//   },
//   1.5: "One point five",
// };
// //Accedding property of Object
// console.log(person);

// console.log(person["Last Name"]);

// console.log(person[1.5]);

// //Accessing a property which is not in the object
// console.log(person.isAdmin);

// person.isAdmin = true;

// console.log(person.isAdmin);

// person["isAdmin"] = false;

// console.log(person.isAdmin);

// person.age = 31;
// console.log(person);

// person.age = undefined;
// console.log(person);
// person.age = null;
// console.log(person);

// // //Deleting property
// delete person.age;
// console.log(person);

// let person = {
//     name: "CK",
//     age: 30,
//     hobbies: ["sports", "cooking"],
//     address: {
//         country: "India",
//         state: "Raj",
//         city: "UDZ",
//     },
//     greet: () => {
//         alert("hiii")
//     },
// };

// let person2 = {
//     ...person
// };

// console.log(person2 == person);

// person.profession = "Developer";
// person.hobbies.push("Singing");

// person.address.city = "JW";

// console.log(person);

// console.log(person2);

// # When
// let person3 = {
//     ...person,
//     hobbies: [...person.hobbies],
//     address: {...person.address},
// }

// console.log(person3 == person);

// person.profession = "Developer";
// person.hobbies.push("Singing");

// person.address.city = "JW";

// console.log(person);

// console.log(person3);

// let obj = {
//   name: "CK",
//   age: 30,
//   address: "Ahmedabad",
//   hobbies: ["sports", "singing"],
// };
// let address = obj.address;

// let { hobbies, name } = obj;
// console.log(hobbies);

// let obj = {
//   name: "CK",
//   age: 30,
//   address: "Ahmedabad",
//   getName: function () {
//     return `My name is ${this.name}`;
//   },
// };
// console.log(obj.getName())

// function Person() {
//   this.age = 30;
//   this.name = "CK";
//   this.greet = function () {
//     console.log(
//       "Hi, I am " + this.name + " and I am " + this.age + " years old."
//     );
//   };
// }
// // Instance
// let p = new Person();
// p.greet();

// let obj = {
//   fname: "ChandraKant",
//   lanme: "Pradhan",
//   age: 30,
//   address: "Ahmedabad",
//   formatName: function () {
//     //console.log(this);
//     console.log(`My name is ${this.fname} ${this.lanme}`);
//   },
// };

// // obj.formatName();

// // //Access the methods indirectly and later on
// // let formatName = obj.formatName;
// let { formatName } = obj;
// formatName = formatName.bind(obj);
// // formatName();

// // //Access the methods indirectly and immediately
// formatName.call(obj, 2, 4, 5); // takes parameter with comma separated
// formatName.apply(obj, [4, 2.6]); // take parameter as an array

// let obj = {
//   set name (value) {
//     if (value.trim() === "") {
//       this.myName = "VVI";
//     }
//      this.myName = value;
//   },
//   get name() {
//     return this.myName;
//   },
//   age: 30,
//   formatName: function() {
//     console.log(`my name is ${this.myName} ${this.lname}`)
//   },
// }

// obj.name = "VVIff";
// obj.formatName();
// console.log(obj.name);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// fruits.splice(2, 0, "Lemon", "Kiwi");

// console.log(fruits);

// const removedEle = fruits.splice(1, 2, "running");

// console.log(fruits);

// let testResults = [1, 5.3, 1.5, 10.99, -5, 10];

// // let storedResults = testResults; // Coply the reference (address) of array

// // let storedResults = testResults.slice(); // Create a brand new array and copy all
// // elements from orriginal array

// // let storedResults = testResults.slice(3, 4);

// let storedResults = testResults.slice(-5, -2);

// // testResults.push(11212);
// // storedResults.push("fafasf")

// console.log(storedResults);
// console.log(testResults);

// let testResults = [1, 5.3, 1.5, 10.99, -5, 10];
// let newResult = [22, 45, 23, 66];
// // const storedResults = testResults.slice(2);
// let storedResults = testResults.concat(newResult, [3.99, 2]);
// testResults.push(5.91);
// console.log(storedResults, testResults);

// const testResults = [1, 5.3, 1.5, 10.99, -5, 1.5, 10];

// console.log(testResults.indexOf(1.5, 2)); //2
// console.log(testResults.indexOf(1.5, 3)); ///5

// console.log(testResults.lastIndexOf(1.5, -2)); // 5
// console.log(testResults.lastIndexOf(1.5, -3)); //2

// console.log(testResults.lastIndexOf(22)); // -1

// const personData = [{name: "DD"}, {name: "FF"}, {name: "DD"}];

// // console.log(personData.indexOf({name: "FF"}));

// const findPerson = personData.find( (element, index) => {
//   // console.log(index)
//   return element.name === "DD"
// })

// console.log(findPerson)

// const findWithIndex = personData.findIndex( (element, index) => {
//   // console.log(index)
//   return element.name === "DD";
//   // return element.name.includes("FF");
// })

// console.log(findWithIndex);

// const testResults = [1, 5.3, 1.5, 10.99, -5, 1.5, 10];

// console.log(testResults.indexOf(11) === -1);

// console.log(testResults.includes(1));

// const data = ["AAA", "BBB", "CCC", "DDD"];

// console.log(data.includes("BBB"));

// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;
// const taxAdjustedPrices = [];

// for (const price of prices) {
//   // const taxAdjustedPrices = [];
//   taxAdjustedPrices.push(price * (1 + tax));
//   // console.log(taxAdjustedPrices);
// }
// console.log(taxAdjustedPrices);

// prices.forEach((price, idx, prices) => {
//   const priceObj = { index: idx + 1, taxAdjPrice: price * (1 + tax) };
//   taxAdjustedPrices.push(priceObj);
//   });

// console.log(taxAdjustedPrices)

// const withMapMethod = prices.map( (value, idx) => {
//   const totalPrice = {index: idx + 1, taxPrice: value * (1 + tax)};
//   return totalPrice;
// })

// console.log(withMapMethod)

// const prices = [5.99, 10.99, 3.99, 6.59];
// const names = ["ck", "Prabhat", "Yogesh", "Haresh"];
// const info = [{ name: "CK" }, { name: "Prabhat" }, { name: "Haresh" }];
// let sortedValue = prices.sort((a, b) => {
// if (a > b) {
// return 3;
// } else if (a === b) {
// return 0;
// } else {
// return -4;
// }
// });
// // console.log(prices);
// console.log(sortedValue);
// console.log(sortedValue.reverse());

// const personData = [{name: "DD"}, {name: "FF"}, {name: "DD"}];

// const prices = [5.99, 10.99, 3.99, 6.59];
// let finteredValue = prices.filter((price, idx, prices) => {
// return price > 6;
// });
// // console.log(prices);
// console.log(finteredValue);

// const filteredData = personData.filter( (person, idx) => {
// return person.name === "DD"
// return person.name.includes("DD")
// })

// console.log(filteredData);

// const prices = [10.99, 5.99, 3.99, 6.59];

// const sum = prices.reduce( (preValue, curValue) => {
//   return preValue + curValue
// }, 0)
// console.log(sum)

// const data = "new york;10.99;2000";
// const transformedData = data.split(";");
// transformedData[1] = +transformedData[1];
// console.log(transformedData);
// const nameFragements = ["Max", "Schwarz"];
// const name = nameFragements.join(" ");
// console.log(name);

// const prices = [10.99, 5.99, 3.99, 6.59];
// const copiedPrices = [...prices];
// prices.push(12.99);
// console.log(prices);
// console.log(copiedPrices);

// const nameData = ["Max", "Schwarz", "Mr", 30];
// // const firstName = nameData[0];
// // const lastName = nameData[1];
// const [firstName, lastName, ...otherInformation] = nameData;
// console.log(firstName);
// console.log(lastName);
// console.log(otherInformation);

// console.log("Code execution starts");
// for (let i = 0; i < 100000; i++) {}
// setTimeout(() => {
// console.log("Timeout Function execution start");
// for (let i = 0; i < 1000000000; i++) {}
// console.log("Timeout Function execution ends");
// }, 2000);
// console.log("Code execution ends");

// const greet = () => {
//   console.log("Hello CK!");
//   };
//   const showAlert = () => {
//   console.log("Danger!");
//   };
//   setTimeout(showAlert, 1000);
//   greet();

// const button = document.querySelector("button");
// function trackUserHandler() {
// navigator.geolocation.getCurrentPosition(
// function (posData) {
// setTimeout(function () {
// console.log(posData);
// }, 2000);
// },
// function (error) {
// console.log(error);
// }
// );
// console.log("Getting position...");
// }
// button.addEventListener("click", trackUserHandler);

// let promise = new Promise( (resolve, reject) => {
//   if(0) {
//     resolve("Success")
//   } else {
//     reject("Faileddd")
//   }
// });
// // console.log(promise)
// promise.then( (success) => {
//   console.log(success)
// }).catch( (error) => {
//   console.log(error)
// });

// const locationPromise = new Promise((resolve, reject) => {
//   const userLocation = navigator.geolocation.getCurrentPosition(
//     (success) => {
//       resolve(success);
//     },
//     (error) => {
//       reject(error);
//     }
//   );
// });

// locationPromise.then( (message) => {
//   console.log(message)
// }).catch( (errMessage) => {
//   console.log(errMessage)
// })

// function getUser(userId) {
//   return new Promise( (resolve, reject) => {
//     if (userId) {
//       console.log("Get user From Database");
//       resolve({
//         userId: userId,
//         userName: "Admin",
//       });
//     } else {
//       reject("No user Found....")
//     }
//   })
// }

// function getServices(user) {
//   return new Promise( (resolve, reject) => {
//     if(0) {
//       console.log(`${user.userName}`);
//       resolve(["email", "CDn"]);
//     } else {
//       reject("no User")
//     }
//   })
// }

// function getServiceCost(services) {
//   return new Promise( (resolve, reject) => {
//     console.log(`${services}`)
//     resolve()
//   })
// }

// getUser(100).then(getServices).then(getServiceCost).then( (serviceVal) => {
//   console.log(serviceVal)
// }).catch( (err) => {
//   console.log(err)
// })

// function getPosition() {
//   return new Promise((resolve, reject) => {
//     navigator.geolocation.getCurrentPosition(
//       (success) => {
//         resolve(success);
//       },
//       (error) => {
//         reject(error);
//       }
//     );
//   });
// }

// async function trackUserPosition() {
//   try {
//   let position = await getPosition();
//   console.log(position);
//   } catch (err) {
//   console.log(err);
//   }
// }
// trackUserPosition();

// function getUser(userId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (userId) {
//         console.log("Get the user from the database.");
//         resolve({
//           userId: userId,
//           username: "admin",
//         });
//       } else {
//         reject(`Did not get userID from Database`);
//       }
//     }, 2000);
//   });
// }

// function getServices(user) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (user) {
//         console.log(`Get the services of ${user.username} from the API.`);
//         resolve(["Email", "VPN", "CDN"]);
//       } else {
//         reject(`Did not get user from Database`);
//       }
//     }, 1000);
//   });
// }

// // let anyPromise = Promise.race([
// //   getUser(),
// //   getServices({
// //     userId: 100,
// //     username: "admin",
// //   }),
// // ]);
// // anyPromise.then((data) => {
// //   console.log(data);
// // });

// let allPromise = Promise.all([
//   getUser(100),
//   getServices({
//     userId: 100,
//     username: "admin",
//   }),
// ]);
// allPromise.then((data) => {
//   console.log(data);
// });

// const button = document.querySelector("button");
// const div = document.querySelector("div");
// const section = document.querySelector("section");
// button.addEventListener("click", (event) => {
//   // event.stopPropagation();
//   console.log("CLICKED BUTTON");
//   // console.log(event);
// });
// section.addEventListener("click", (event) => {
//   console.log("CLICKED SECTION");
//   // console.log(event);
//   // event.stopPropagation();
// });
// div.addEventListener("click", (event) => {
//   console.log("CLICKED DIV");
//   // console.log(event);
//   // event.stopPropagation();
// });

// const section = document.querySelector("section");
// section.addEventListener("click", (event) => {
// console.log("CLICKED SECTION");
// console.log(this);
// console.log(event.target);
// console.log(event.currentTarget);
// });

// function Person1(age, name) {
//   this.age = age || 30; // property
//   this.name = name || "CK";
//   this.greet = function () {
//     console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
//   };
// }
// let normalObject = new Person1(25, "Prabhat");
// normalObject.greet();

// class Person2 {
//   constructor(age, name) {
//     this.age = age || 30;
//     this.name = name || "CK";
//   }
//   greet() {
//     console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
//   }
// }
// let classObj = new Person2(25, "Prabhat");
// classObj.greet();

// class Person2 {
//   constructor(age, name) {
//     this.age = age || 30;
//     this.name = name || "CK";
//   }
//   greet() {
//     console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
//   }
//   profession = "IT Professional";
//   static address = "Ahmedabad";
//   static showAddress() {
//     console.log(`I am staying in ${this.address}`);
//   }
// }
// let classObj = new Person2(25, "Prabhat");
// classObj.greet();
// console.log(classObj.profession);
// Person2.showAddress();

// class person {
//   constructor(name, id) {
//     this.name = name;
//     this.id = id;
//   }
//   add_Address(add) {
//     this.address = add;
//     this.getDetails = function () {
//       console.log(`Name is ${this.name}, Address is: ${this.address}`);
//     };
//     this.getDetails();
//   }
// }
// let person1 = new person("CK", 21);
// person1.add_Address("Ahmedabad");

//Inhertiance example
// class person {
//   constructor(name) {
//     this.name = name;
//   }
//   //method to return the string
//   displayName1() {
//     return `Name of person: ${this.name}`;
//   }
// }
// class student extends person {
//   constructor(name, id) {
//     //super keyword for calling above class constructor
//     super(name);
//     this.id = id;
//   }
//   displayName(params) {
//     console.log(params);
//     console.log(`${super.displayName1()},Student ID: ${this.id}`);
//   }
// }
// let student1 = new student("Mukul", 22);
// student1.displayName("thanks");

// const xhr = new XMLHttpRequest();
// xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
// // xhr.responseType = "json";
// xhr.onload = function () {
//   console.log(xhr.response);
//   const listOfPosts = JSON.parse(xhr.response);
//   // const listOfPosts = xhr.response;
// };
// xhr.send();

// Promise version
// function sendXHR(method, url) {
//   let promise = new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open(method, url);
//     xhr.responseType = "json";
//     xhr.onload = function () {
//       resolve(xhr.response);
//       console.log(xhr.response)
//     };
//     xhr.send();
//   });
//   return promise;
// }
// sendXHR("GET", "https://jsonplaceholder.typicode.com/posts").then(
//   (response) => {
//     console.log(response);
//   }
// );

// async function getPosts() {
//   try {
//     let response = await sendXHR(
//       "GET",
//       "https://jsonplaceholder.typicode.com/posts"
//     );
//     console.log(response);
//   } catch (err) {
//     console.log(err);
//   }
// }

// async function createPost(title, content) {
//   const userId = Math.random();
//   const post = {
//     title: title,
//     body: content,
//     userId: userId,
//   };
//   sendXHR("POST", "https://jsonplaceholder.typicode.com/posts", post);
// }

// async function deletePost(postID) {
//   let response = await sendXHR(
//     "DELETE",
//     `https://jsonplaceholder.typicode.com/posts/${postID}`
//   );
//   //console.log(response);
// }

// getPosts();
// createPost(`This is CK Blog`, `This is CK's blog contents`);
// deletePost(1);

// function sendXHR(method, url, data) {
//   let promise = fetch(url, {
//     method: method,
//     body: JSON.stringify(data),
//   }).then((response) => {
//     return response.json();
//   });
//   return promise;
// }

// function sendHttp(method, url, data) {
//     const response = fetch(url, {
//       method: method,
//       body: JSON.stringify(data),
//       // headers: 'application-json'
//     }).then( (responeData) => {
//       console.log(responeData.json)
//     })
//     return response;
// }

// async function getPosts() {
//   let response = await sendHttp(
//     "GET",
//     "https://jsonplaceholder.typicode.com/posts"
//   );
//   console.log(response);
// }
// getPosts();

// async function createPost(title, content) {
//   const userId = Math.random();
//   const post = {
//     title: title,
//     body: content,
//     userId: userId,
//   };
//   sendHttp("POST", "https://jsonplaceholder.typicode.com/posts", post);
// }

// createPost(`This is CK Blog`, `This is CK's blog contents`);

// async function deletePost(postID) {
//   let response = await sendHttp(
//     "DELETE",
//     `https://jsonplaceholder.typicode.com/posts/${postID}`
//   );
//   console.log(response);
// }
// deletePost(1);


// function sendHttp(method, url, data) {
//   let response = fetch(url, {
//     method: method,
//     body: JSON.stringify(data),
//     headers: {
//       "content-type" : 'application/json'
//     },
//   }).then( (res) => {
//     if (res.status == 200) {
//       return res.json();
//     } else {
//       return new Error("Something went Wrong....") 
//     }
//   }).catch( (error) => {
//     console.log(error);
//     throw new Error("Bad.....")
//   })
//   return response;
// }

// async function getPost() {
//   try {
//     const resData = await sendHttp(
//       "GET", 
//       "https://jsonplaceholder.typicode.com/posts"
//     );
//     console.log(resData)
//   } catch (err) {
//     console.log(err)
//   }
// }

// async function createPost(email, password) {
//   try{
//     const postData = {
//       email: email,
//       password: password
//     }
//     const resData = await sendHttp(
//       "POST",
//       "https://jsonplaceholder.typicode.com/posts", postData
//     )
//   } catch (err) {
//     console.log(err)
//   }
// }

// getPost();

// createPost("adad@gmail.com", "13132312");


// class RainForest{
//   static minimumRainFall = 60;
// }

// let congo = new RainForest();
// RainForest.minimumRainFall = 80;
// console.log(congo.minimumRainFall)

// var a = ['dog', 'cat', 'hen'];
// a[100] = 'fox'
// console.log(a.length);



// let RainForestAcres = 10;
// let animals = 0

// while(RainForestAcres < 13 ||animals <= 2) {
//   RainForestAcres++
//   animals += 2
// }
// console.log(animals)

// var sound = "grint";
// var bear = { sound: "roar"};

// function roar() {
//   console.log(this.sound)
// }

// const x = 6 % 2;

// const y = x ? 'One' : 'Two';
// console.log(y)


// var thing;
// let func = (str = 'no arg') => {
//   console.log(str)
// }
// func(thing)
// func(null);


// const foo = {
//   bar() {
//     console.log("Heelo, W");
//   },
//   name: "Alss",
//   age: 22,
// }


// const dessert = { type: "pie"}

// dessert.type = "pudd"

// const seconds = dessert

// seconds.type = "fruit"

// console.log(dessert.type)


// const obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// }
// const  obj2 = {
//   ...obj,
//   a: 0,
// }

// console.log(obj2.a, obj2.b);



// let value1 = 2

// let value2 = 4

// value1 *= value1 + value2 * value2 / value1;
// console.log(value1)



// if(true) {
//   var first = "You"
// }

// function fScope() {
//   var second = "Got"
// }

// fScope();

// console.log(first)

// console.log(second)



// var obj;
// console.log(obj)



// let conser = true;

// let defor = false

// let acre = 100

// if( )












































































