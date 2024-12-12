import { exec } from "child_process";

// Function to run the Nmap scan

const runNetworkScan = (ipRange, callback) => {
  console.log(`Starting Nmap scan for range: ${ipRange}`);

  // Sanitize input to prevent injection
  if (!/^\d{1,3}(\.\d{1,3}){3}\/\d{1,2}$/.test(ipRange)) {
    return callback("Invalid IP range format. Example: 10.0.0.1/24", null);
  }

  return new Promise((resolve, reject) => {
    exec(`nmap -sn ${ipRange}`, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error running Nmap: ${stderr || error.message}`);
        reject(`Error: ${stderr || error.message}`);
      } else {
        console.log("Nmap Scan Results:\n", stdout);
        resolve(stdout);
      }
    });
  });
};

export {runNetworkScan};
