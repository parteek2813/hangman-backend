function CreateSession(req, res) {
  //Here we are taking the name as the arguments
  //and based upon that we will returning the response
  const name = req.body.name;

  // TODO: We will do something with the name

  res.json({
    id: "123",
    livesLeft: 6,
    result: false,
    maskedWord: ["_", "_"],
  });
}

function PlaySession(req, res) {
  const gameID = req.params.id; // We are just taking out the Id from the params
  const letter = res.body.letter;

  console.log(gameID);
  console.log(letter);

  //Todo

  res.json({
    id: "123",
    livesLeft: 6,
    result: false,
    maskedWord: ["_", "_"],
  });
}

module.exports = {
  CreateSession,
  PlaySession,
};
