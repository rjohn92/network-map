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
  const output = document.getElementById("output");

  document.getElementById("scan").addEventListener("click", () => {
    // Show spinner and clear output
    spinner.style.display = "block";
    output.textContent = "Scanning network...";

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
        output.textContent = data;
      })
      .catch(error => {
        // Hide spinner and display error
        spinner.style.display = "none";
        output.textContent = `Error: ${error.message}`;
      });
  });
}

// Initialize the app
document.addEventListener("DOMContentLoaded", () => {
  initializeTabs();
  initializeNetworkScan();
});
