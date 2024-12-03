// import express from 'express';
// import http from 'http';
// import {Server} from 'socket.io';
import {connectDB, getDB} from './modules/db.js';
import {scanNetwork, getLocalNetworkRange} from './modules/scanNetwork.js';

(async () => {
    try {
      console.log('Connecting to MongoDB...');
      await connectDB(); // Initialize MongoDB connection
      console.log('Connected to MongoDB');
  
      console.log('Starting network scan...');
      const scanResults = await scanNetwork('192.168.1.0/24'); // Replace with your network range
      console.log('Network scan complete. Results:');
      console.log(scanResults); // Print the scan results to the terminal
    } catch (err) {
      console.error('Error occurred:', err.message);
    }
})();

// const app = express();
// const server = http.createServer(app);
// const io = new Server(server);

// const PORT = 3000;

// await connectDB();
// const db = getDB();

// app.get('/devices', async (req, res)=>{
//     try {
//         const devices = await db.collection('devices').find().toArray();
//         res.json(devices);
//     } catch (err) {
//         res.status(500).json({ error: err.message});
//     }
// });

// app.listen(PORT,() =>{
//     console.log('Server is running on http://localhost:${PORT}');
// });
