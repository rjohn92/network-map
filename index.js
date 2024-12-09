import express from "express";
import { exec } from "child_process";
import { getGatewayNetworkRange } from "./helpers/getNetworkInfo.js";

const app = express();
const PORT = 5000;

// Determine the network range dynamically


// Handle all requests at the root route
app.get("/", (req, res) => {
  if (req.query.scan === "true") {
  const ipRange = getHostIPRange();

  if (!ipRange) {
    res.status(500).send("Failed to determine host network range.");
    return;
  }

  console.log(`Starting scan for range: ${ipRange}`);
  exec(`nmap -sn ${ipRange}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error during scan: ${stderr}`);
      res.status(500).send("Error during scan.");
      return;
    }

    res.type("text/plain").send(stdout);
  });
} else {
  res.sendFile("index.html", { root: "./public"});
}
});
// Serve static assets like CSS and JS
app.use(express.static("public"));

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
