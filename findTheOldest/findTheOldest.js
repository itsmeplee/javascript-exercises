let findTheOldest = function (people) {
  let oldest = "";
  let oldestAge = 0;
  console.log(people.length);
  for (let i = 0; i < people.length; i++) {
    let age = people[i]["yearOfDeath"] - people[i]["yearOfBirth"];
    if (oldestAge < age) {
      oldestAge = age;
      oldest = people[i]["name"];
    }
  }
  return oldest;
};

// let findTheOldest = function (people) {
//   let oldest;
//   let oldestAge = 0;
//   for (let i = 0; i < people.length; i++) {
//     if ("yearOfDeath" in people[i]) {
//       let age = people[i]["yearOfDeath"] - people[i]["yearOfBirth"];
//       if (oldestAge < age) {
//         oldestAge = age;
//         oldest = people[i]["name"];
//       }
//     } else {
//       oldest = people[i]["name"];
//     }
//   }
//   return oldest;
// };

module.exports = findTheOldest;
