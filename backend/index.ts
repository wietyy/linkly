const express = require("express");
const app = express();

app.use(express.json());

// TODO: hook this up to db.ts
app.get("/:linkId", (req: any, res: any) => {

})

// TODO: hook this up to db.ts
app.post("/api/createLink", (req: any, res: any) => {

})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});