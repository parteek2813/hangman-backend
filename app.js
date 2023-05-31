const Express = require("express");
const Router = require("./routes");
const { sequelize } = require("./models");

async function initialize() {
  const app = Express();

  await sequelize.sync();

  app.use(Express.json());
  app.use("/api", Router);

  app.listen(8000, () => [console.log("Running application on port 8000")]);
}

initialize();
