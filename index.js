import express from "express";
import scanRoutes from "./routes/scanRoutes.js";
import path from "path";

const app = express();
const PORT = process.env.PORT || 5000;
const HOST_IP = process.env.HOST_IP || "0.0.0.0"; // Default to all interfaces if HOST_IP is not set


// Log requests (optional for debugging)
app.use((req, res, next) => {
  console.log(`Request: ${req.method} ${req.url}`);
  next();
});


// Middleware to serve static files
app.use("/network-map",express.static("public"));  // Serve frontend static files

// Route for scanning logic
app.use("/network-map/api", scanRoutes);

//  serve index.html for any route under /network-map:
app.get("/network-map/*", (req, res) => {
  res.sendFile(path.resolve("public", "index.html"));
});


app.listen(PORT, () => {
  console.log(`Server running at http://${HOST_IP}:${PORT}`);
});