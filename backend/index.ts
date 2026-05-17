const express = require("express");
const app = express();
import { env } from "node:process";
import { createLink, getLink } from "./lib/db";
import dotenv from "dotenv";

dotenv.config();
const port = env.PORT || 3000;

app.use(express.json());

// Working (5/17/26)
app.get("/:linkId", async (req: any, res: any) => {
    let linkId = req.params.linkId;
    let link: string = await getLink(linkId);
    res.redirect(link);
})

// Working (5/17/26)
app.post("/api/createLink", async (req: any, res: any) => {
    const {requestedID, link} = req.body;
    const linkId = await createLink(requestedID, link);
    res.send(linkId);
})

app.listen(port, () => {
    console.log("Server is running on port 3000");
});