# **Network Overview Mapper**

**Network Overview Mapper** is a lightweight, containerized tool for **scanning networks**, displaying **graphical representations**, and logging results. Built with Node.js, Nmap, and Docker, it provides a simple **web-based interface** organized into interactive tabs.

---

## **Features**
-  **Network Scanning**
   - Dynamically determines the **host IP range** and scans the network using `nmap`.
   - Displays clean and human-readable scan results.

-  **Graphical Representation**
   - Visualizes network devices and their connections using **D3.js**.

-  **Logs**
   - View organized **Scan Logs** and **Raw Nmap Logs** in separate tabs.

-  **Single Page Application**
   - Simple **tab-based navigation** for intuitive interaction.

-  **Containerized Deployment**
   - Runs as a **Docker container**, requiring no additional dependencies.

---

## **Getting Started**

### **Prerequisites**

Ensure you have the following installed on your machine:

- [Docker](https://docs.docker.com/get-docker/) (for running the app in a container).
- (Optional) [Node.js](https://nodejs.org/en/) (for local development).

---

### **Setup Instructions**

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/network-mapper.git
   cd network-mapper