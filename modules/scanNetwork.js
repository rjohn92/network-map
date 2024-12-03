import { NmapScan } from './nmapWrapper.js';
import os from 'os';

function getLocalNetworkRange() {
    const interfaces = os.networkInterfaces();

    for (const interfaceName in interfaces) {
        const iface = interfaces[interfaceName];
        for (const config of iface) {
            if (config.family === 'IPv4' && !config.internal) {
                const subnet = config.cidr
                return subnet.replace(/\d+$/, '0');
            }
        }
    }
    throw new Error('No active network interface found');
}

async function scanNetwork(networkRange) {
    return new Promise((resolve, reject) => {
      const scanner = new NmapScan(networkRange);
  
      scanner.on('complete', (data) => {
        console.log('Scan data:', data); // Log raw scan data
        resolve(data);
      });
  
      scanner.on('error', (err) => {
        console.error('Error during scan:', err);
        reject(err);
      });
  
      console.log(`Scanning network range: ${networkRange}`);
      scanner.startScan();
    });
  }

// Run the scan and display the results
scanNetwork()
  .then((results) => console.log('Devices found:', results))
  .catch((err) => console.error('Error during scan:', err));

  export {scanNetwork, getLocalNetworkRange};