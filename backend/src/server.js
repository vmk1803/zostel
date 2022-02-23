const app = require("./index");
const connect = require("./configs/db");

app.listen(2345, async () => {
  console.log("Listening on port 2345...");
  await connect();
});
