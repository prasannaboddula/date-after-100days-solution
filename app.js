const addDays = require("date-fns/addDays");
const express = require("express");
const app = express();

app.get("/", (request, response) => {
  const getDateAfterXDays = () => {
    const newDate = addDays(new Date(2022, 5, 25), 100);
    return `${newDate.getDate()}/${
      newDate.getMonth() + 1
    }/${newDate.getFullYear()}`;
  };
  response.send(getDateAfterXDays());
});

app.listen(3000);
module.exports = app;
