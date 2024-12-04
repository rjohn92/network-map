# network-map
A containerized solution for discovering and visualizing devices on a network. It provides a graphical representation of network devices, including their IP addresses, MAC addresses, manufacturers, and other relevant details using nmap for scanning and integrates the data into a clean web-based interface for easy access and monitoring.

## Features

- **Network Scanning**: Uses tools like `nmap` to scan the network and identify devices.
- **Web Interface**: Displays scanned data in an intuitive, graphical format for easy monitoring.
- **Customizable Parsing**: Handles diverse device data formats with regex-based parsing.
- **Host Networking**: Operates directly on the host network for accurate device detection.
- **Portable Deployment**: Fully containerized for simple deployment and portability.

## Technologies Used

- **Docker**: For containerization and easy setup.
- **nmap**: Efficient network scanning tool.
- **SQLite3**: Optional storage for scanned data.
- **Python**: Backend for processing and data handling.
- **JavaScript & HTML**: Frontend for the interactive web interface.

## Getting Started

Follow these steps to deploy the Network Map Project.

### Prerequisites

- **Docker** and **Docker Compose** installed.
- Host machine running Linux or a compatible OS.

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/network-map.git
    cd network-map
    ```

2. Build and run the container:
    ```bash
    docker-compose up --build
    ```

3. Access the web interface:
    - Open your browser and navigate to: `http://localhost:8080`

### Configuration

You can configure the network range for scanning by modifying the `config.json` file in the project directory. Example:
```json
{
  "network_range": "192.168.1.0/24"
}
