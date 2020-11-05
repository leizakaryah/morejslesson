// var age = 19; // 19
// age = 20; //age changes to 20
// age += 50; // age = 70
//
// var health = 0.65; //decimal
//
// var isAlive = true; // boolean??
// isAlive = false;
// isAlive = 5 > 2;
//
// const pi = 3.14159; //cant change const
// let numberOfLimbs = 4;
// numberOfLimbs = 13; // = 13 ----- can change but dont declare it multiple times
// var name = 'Lei';
// var lastName = 'Canlas';
//
// var age = 26;
//
// let finalString = `${name} is ${age} years old`;
//
// //padding
// lastName = lastName.padEnd(10, '.');//Canlas....


// let apiKey = '01242F5143007BA3D6623BA28C561628';
// let appID = '1102190';

 // var numbers = [1, 2, 3];
 // numbers = [1, 2];
 // numbers[0]; //1
 // numbers[1] = 4; //2=>4
 // numbers.includes(1); //true
 // numbers.includes(5); //false


 //dictionary:

 // var inventory = {'food': 2, 'clothing': 3} //left side of the colon is keys and right side is the value
 // inventory['food'];
 // inventory['clothing'] = 4; //3 => 4

 // function sum(numbah1, numbah2) {
 //   return numbah1 + numbah2;
 // }
 //
 // var result = sum(1,2);

 // function sum(numbah1, numbah2 = 2) {
 //   return numbah1 + numbah2;
 // }
 //
 // var result = sum(1);

 // var result = (numbah1, numbah2) => { return numbah1 + numbah2};
 // var result = sum(1, 2); // same result as the function above

// const promise = new Promise ((resolve, reject) => {
//   let number1 = 5;
//   if(number == 5) {
//     resolve('Success');
//   } else {
//     reject('Failure');
//   }
// });
//
// promise.then((message) => {
//   console.log(message);
// }).catch((message) => {
//   console.log(message);
// });
//
// async function sum(numbah1, numbah2) {
//   return await numbah1 + numbah2;
// }

/*
dictionary output from your achievements

const fetch = require('node-fetch');

let url = 'http://api.steampowered.com/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v0002/?gameid=1102190'

async function fetchData(url) {
  let response = await fetch(url);
  let jsonResponse = await response.json();
  console.log(JSON.stringify(jsonResponse));
}

fetchData(url).catch(function() {
  console.log('Could not fetch data');
}); */

// //for of loops:
// var numbers = [1, 2, 3]
// for (let number of number)

const fetch = require('node-fetch');

let url = 'http://api.steampowered.com/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v0002/?gameid=1102190'

class Achievement {
  constructor(name, percent) {
    this.name = name;
    this.percent = percent;
  }

  printValues() {
    if (this.percent == 0) {
      console.log(`No one has completed the achievement: ${this.name}.`);
    } else {
      console.log(`${this.name} achievement has been completed by ${this.percent}% of people.`);
  }
}

async function fetchData(url) {
  let response = await fetch(url);
  let jsonResponse = await response.json();
  printData(jsonResponse);
}

function printData(jsonData) {
  var achievementsArray = [];
  let jsonObject = jsonData['achievementpercentages'];
  let allAchievements = jsonObject['achievements'];

  for (let achievement of allAchievements) {
    let name = achievement['name'];
    let percent = achievement['percent'];
    let newAchievement = new Achievement(name, percent);
    newAchievement.printValues();
    achievementsArray.push(newAchievement);
  }

  console.log(achievementsArray.length);
  return achievementsArray;
}

fetchData(url).catch(function() {
  console.log('Could not fetch data');
});
