// Tabs Navigation Logic
function initializeTabs() {
  const tabs = document.querySelectorAll(".tab");
  const tabContents = document.querySelectorAll(".tab-content");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      // Deactivate all tabs and hide all content
      tabs.forEach(t => t.classList.remove("active"));
      tabContents.forEach(tc => tc.classList.remove("active"));

      // Activate the selected tab and corresponding content
      tab.classList.add("active");
      const contentId = tab.getAttribute("data-tab");
      document.getElementById(contentId).classList.add("active");
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
  
    fetch("/?scan=true")
      .then(response => {
        console.log("Response received:", response.status); // Check HTTP status
        if (!response.ok) {
          throw new Error("Failed to fetch scan results.");
        }
        return response.text(); // Correct method to get response body as text
      })
      .then(data => {
        console.log("Scan Results Received:", data); // Log scan results
        document.getElementById("scanOutput").textContent = data; // Display results
      })
      .catch(error => {
        console.error("Error during fetch:", error.message);
        document.getElementById("scanOutput").textContent = `Error: ${error.message}`;
      });
  });
}  

// Initialize the app
document.addEventListener("DOMContentLoaded", () => {
  initializeTabs();
  initializeNetworkScan();
});
