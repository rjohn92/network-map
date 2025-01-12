function initializeTabs() {
// Tab Switching Logic
document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    // Remove 'active' class from all tabs
    document.querySelectorAll(".tab").forEach((t) => t.classList.remove("active"));

    // Add 'active' class to the clicked tab
    tab.classList.add("active");

    // Hide all tab contents
    document.querySelectorAll(".tab-content").forEach((content) => {
      content.classList.remove("active");
    });

    // Show the content associated with the clicked tab
    const tabName = tab.getAttribute("data-tab");
    document.getElementById(tabName).classList.add("active");
  });
});
}

// Handle "Scan Network" Button Click
function initializeNetworkScan() {
  const spinner = document.getElementById("spinner");
  const scanOutput = document.getElementById("scanOutput");
  const rawOutput = document.getElementById("rawOutput");


  document.getElementById("scan").addEventListener("click", () => {
    console.log("Button clicked: Starting network scan...");
  
    // Show the spinner and clear previous output
    spinner.style.display = "block";
    scanOutput.textContent = "Scanning...";
    rawOutput.textContent = "";
  
    fetch("/network-map/api/scan", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log("Response received:", response.status); // Check HTTP status
        if (!response.ok) {
          throw new Error("Failed to fetch scan results.");
        }
        return response.json(); // Assuming backend returns JSON
      })
      .then((data) => {
        console.log("Scan Results Received:", data); // Log scan results
  
        // Update scanOutput and rawOutput
        scanOutput.textContent = JSON.stringify(data, null, 2);
        rawOutput.textContent = "Raw Data: " + JSON.stringify(data);
      })
      .catch((error) => {
        console.error("Error during fetch:", error.message);
        scanOutput.textContent = `Error: ${error.message}`;
      })
      .finally(() => {
        // Hide the spinner
        spinner.style.display = "none";
      });
  });  
}  

// Initialize the app
document.addEventListener("DOMContentLoaded", () => {
  initializeTabs();
  initializeNetworkScan();
});
