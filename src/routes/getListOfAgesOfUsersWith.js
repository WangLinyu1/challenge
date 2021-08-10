"use strict";
const mockDBCalls = require("../database/index.js");

const getListOfAgesOfUsersWithHandler = async (request, response) => {
  try {
    const itemToLookup = request.query.item;
    const data = await mockDBCalls.getListOfAgesOfUsersWith(itemToLookup);
    return response.status(200).send(JSON.stringify(data));
  } catch (err) {
    next(err);
  }
};

module.exports = (app) => {
  app.get("/users/age", getListOfAgesOfUsersWithHandler);
};
