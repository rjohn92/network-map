import { Router } from "express";
import { runNetworkScan } from "../helpers/getNetworkInfo.js";
import path from "path";

const router = Router();
const HOST_IP = process.env.HOST_IP || "10.0.0.1/24";

// API Endpoint for Network Scan
router.post("/scan", async (req, res) => {
  console.log("POST request received at /network-map/api/scan");
  console.log(`Scan triggered for range: ${HOST_IP}`);

  try {
    // Run the network scan
    const results = await runNetworkScan(HOST_IP);
    console.log("Scan results:\n", results);

    // Return results as JSON
    res.json({ success: true, results });
  } catch (error) {
    console.error("Error during scan:", error);
    res.status(500).json({ success: false, message: "Error during scan.", error: error.message });
  }
});

export default router;
