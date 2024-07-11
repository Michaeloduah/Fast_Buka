const App = require("./app");
const AuthRoute = require("./routes/auth");
//Define whatever Routes you have here for the server to initialise

const server = new App();
server.initializedRoutes([
  new AuthRoute(),
]);
server.listen();
