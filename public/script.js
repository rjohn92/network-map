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
    console.log("Fetching scan results...");

    // Show spinner and clear output
    spinner.style.display = "block";
    scanOutput.textContent = "Scanning network...";
    rawOutput.textContent = "";


    // Fetch scan results
    fetch("/?scan=true")
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch scan results.");
        }
        return response.text();
      })
      .then(data => {
        // Hide spinner and display results
        spinner.style.display = "none";
        scanOutput.textContent = data;
      })
      .catch(error => {
        // Hide spinner and display error
        spinner.style.display = "none";
        scanOutput.textContent = `Error: ${error.message}`;
      });
  });
}

// Initialize the app
document.addEventListener("DOMContentLoaded", () => {
  initializeTabs();
  initializeNetworkScan();
});
