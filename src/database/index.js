"use strict";
const _ = require("lodash");
const db = require("./db.js");

// UTILS
//----------------
// This is a mock db call that waits for # milliseconds and returns
const mockDBCall = (dataAccessMethod) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(dataAccessMethod());
    }, 500);
  });
};

// MOCK DB CALLS
//----------------
const getUsers = () => {
  const dataAccessMethod = () => _.map(db.usersById, (userInfo) => userInfo);
  return mockDBCall(dataAccessMethod);
};

const getListOfAgesOfUsersWith = (item) => {
  const dataAccessMethod = () => {
    const userAge = {};
    for (let user of Object.values(db.usersById)) {
      if (!userAge[user.username]) {
        userAge[user.username] = user.age;
      }
    }
    const ageCount = {};
    for (let [key, value] of Object.entries(db.itemsOfUserByUsername)) {
      if (value.includes(item)) {
        if (ageCount[userAge[key]]) {
          ageCount[userAge[key]] += 1;
        } else {
          ageCount[userAge[key]] = 1;
        }
      }
    }
    return Object.entries(ageCount).map((pair) => ({
      Age: pair[0],
      Count: pair[1],
    }));
  };
  return mockDBCall(dataAccessMethod);
};

const getItems = () => {
  const dataAccessMethod = () => {
    let itemList = [];
    Object.values(db.itemsOfUserByUsername).map((value) => {
      itemList = itemList.concat(value);
      return itemList;
    });
    return _.uniq(itemList);
  };

  return mockDBCall(dataAccessMethod);
};

module.exports = {
  getUsers,
  getListOfAgesOfUsersWith,
  getItems,
};
