const getName = (req, res) => {
  try {
    const name = "Divyansh";
    res.send({ data: name, message: "Name fetched successfully" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getName };
