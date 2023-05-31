const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite",
});

class GameSession extends Model {}
GameSession.init(
  {
    playerName: DataTypes.STRING,
    playedLetters: DataTypes.STRING,
    startAt: DataTypes.DATE,
    endedAt: DataTypes.DATE,
  },
  { sequelize, modelName: "game_sessions" }
);

class Word extends Model {}
Word.init(
  {
    playerName: DataTypes.STRING,
  },
  { sequelize, modelName: "user" }
);

GameSession.Word = GameSession.belongsTo(Word);

module.exports = {
  GameSession,
  Word,
  sequelize,
};
