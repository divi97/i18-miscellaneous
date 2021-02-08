const getValue = (req, res) => {
  try {
    const value = 69;
    res.send({ data: value, message: "Value fetched successfully" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getValue };
