const db = require("../../../db/db.json");

const getDebounceData = (req, res) => {
  try {
    const { state, searchTerm } = req.params;

    if (!state) {
      return res.send({error: "Select State first"});
    }

    var dbCity;

    for (let i = 0; i < db.length; i++) {
      if (state == db[i].State) {
        dbCity = db[i].City;
      }
    }

    let array = [];

    for (let i = 0; i < dbCity.length; i++) {
      var regex = new RegExp(searchTerm, "gi");
      if (dbCity[i].match(regex)) {
        array.push(dbCity[i]);
      }
    }

    if (array.length == 0) {
      return res.send({error: "No such city exists"});
    }

    res.send({ data: array, msg: "Fetched successfully" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getDebounceData };
