import "dotenv/config";
import app from "./src/app.js";
import connectToDB from "./src/db/db.js";

connectToDB();

app.listen(3000, () => {
  console.log("App running at port 3000!");
});
