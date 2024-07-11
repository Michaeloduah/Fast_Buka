async function homepage(req, res) {
  try {
    res.send("Hello Mate test is working");
  } catch (error) {
    res.send("error: " + error.message);
  }
}

module.exports = {
    homepage,
}