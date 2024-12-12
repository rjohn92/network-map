import { Router } from "express";
import { runNetworkScan } from "../helpers/getNetworkInfo.js";
import path from "path";

const router = Router();
const HOST_IP = process.env.HOST_IP || "10.0.0.1/24";

router.get("/", async (req, res) => {
  console.log("Query parameters received:", req.query);

  if (req.query.scan && req.query.scan.toLowerCase() === "true") {
    try {
      console.log(`Scan triggered for range: ${HOST_IP}`);
      
      // Await scan results
      const results = await runNetworkScan(HOST_IP);
      console.log("Scan results to be sent:\n", results);

      // Send results as plain text
      res.type("text/plain").send(results);
    } catch (error) {
      console.error("Error during scan:", error);
      res.status(500).send("Error during scan.");
    }
  } else {
    console.log("Serving index.html");
    res.sendFile("index.html", { root: path.resolve("public") });
  }
});

export default router;
