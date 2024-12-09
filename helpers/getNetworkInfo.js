import { execSync } from "child_process";

const getHostIPRange = () => {
  try {
    // Resolve host.docker.internal dynamically
    const hostIP = execSync("getent hosts host.docker.internal | awk '{ print $1 }'")
      .toString()
      .trim();

    if (!hostIP) {
      throw new Error("Unable to resolve host.docker.internal");
    }

    // Calculate the /24 subnet (replace last octet with .0)
    const baseIP = hostIP.split('.').slice(0, 3).join('.') + '.0';
    return `${baseIP}/24`;
  } catch (error) {
    console.error("Error determining host IP:", error.message);
    return null;
  }
};


const getLocalNetworkRange = () => {
  try {
    const gateway = execSync("ip route | awk '/default/ { print $3 }'")
      .toString()
      .trim();
    return `${gateway}/24`;
  } catch (error) {
    throw new Error("Failed to determine Docker's default gateway.");
  }
};


const getGatewayNetworkRange = () => {
  try {
    // Attempt to resolve host.docker.internal
    const hostIp = execSync("getent hosts host.docker.internal | awk '{ print $1 }'")
      .toString()
      .trim();

    if (hostIp) {
      console.log(`Resolved host.docker.internal to ${hostIp}`);
      return `${hostIp.split('.').slice(0, 3).join('.')}.0/24`;
    }
  } catch (error) {
    console.warn("Failed to resolve host.docker.internal. Falling back to gateway.");
  }

  try {
    // Fallback to Docker gateway IP
    const gatewayIp = execSync("ip route | awk '/default/ {print $3}'")
      .toString()
      .trim();

    if (gatewayIp) {
      return `${gatewayIp.split('.').slice(0, 3).join('.')}.0/24`;
    }
  } catch (error) {
    console.error("Failed to determine network range:", error.message);
  }

  return "192.168.1.0/24"; // Final fallback
};


export {getLocalNetworkRange, getGatewayNetworkRange, getHostIPRange};
