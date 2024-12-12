import express from "express";
import scanRoutes from "./routes/scanRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;
const HOST_IP = process.env.HOST_IP;


app.use(express.static("public")); // Serve frontend static files
app.use("/", scanRoutes);          // Add routes for scanning logic

app.listen(PORT, () => {
  console.log(`Server running at http://${HOST_IP}:${PORT}`);
});
