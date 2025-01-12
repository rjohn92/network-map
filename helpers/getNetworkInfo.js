import { exec } from "child_process";

// Function to run the Nmap scan
const runNetworkScan = (ipRange) => {
  console.log(`Starting Nmap scan for range: ${ipRange}/24`);

  // Sanitize input to prevent injection
  if (!/^\d{1,3}(\.\d{1,3}){3}\/\d{1,2}$/.test(ipRange)) {
    return Promise.reject(new Error("Invalid IP range format. Example: 10.0.0.1/24"));
  }

  // Return a Promise for the async operation
  return new Promise((resolve, reject) => {
    exec(`nmap -sn ${ipRange}`, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error running Nmap: ${stderr || error.message}`);
        reject(new Error(`Error: ${stderr || error.message}`));
        return;
      }

      console.log("Nmap Scan Results:\n", stdout);
      resolve(stdout);
    });
  });
};

export {runNetworkScan};
