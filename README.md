Here's a README.md file for the Aenzbi Edge browser extension project:


---

Aenzbi Suite Extension

A Microsoft Edge browser extension for the Aenzbi suite of apps, integrated with EBMS Burundi for seamless invoicing and stock management. This extension enables real-time data synchronization and automation for businesses.


---

Features

Invoice Management
Sync invoices to the EBMS system in real time.

Stock Management
Update stock movements directly to EBMS Burundi.

Configurable Settings
Easily set the EBMS base URL and bearer token via the settings page.

Background Tasks
Automates synchronization with scheduled tasks.

User-Friendly Interface
Clean and simple popup UI for manual syncing and status updates.



---

Installation

1. Clone this repository:

git clone https://github.com/AllyElvis/aenzbi-extension.git


2. Open Edge and navigate to edge://extensions.


3. Enable Developer Mode (toggle switch in the top-right corner).


4. Click Load Unpacked and select the aenzbi-extension folder.




---

Configuration

1. Open the extension popup by clicking on the Aenzbi icon in the Edge toolbar.


2. Navigate to Settings in the popup menu.


3. Enter the following details:

EBMS Base URL: For example, https://ebms.obr.gov.bi:9443/.

Bearer Token: Your authorization token for EBMS.



4. Save the settings.




---

Usage

Manual Sync
Open the extension popup and click Sync Invoices to start syncing immediately.

Automatic Sync
The extension periodically syncs invoices and stock data in the background.



---

Development

File Structure

aenzbi-extension/
├── background.js         # Background service worker
├── manifest.json         # Extension configuration
├── popup/                
│   ├── popup.html        # Popup UI
│   ├── popup.js          # Popup logic
│   └── popup.css         # Popup styling
├── options/
│   ├── options.html      # Settings UI
│   ├── options.js        # Settings logic
│   └── options.css       # Settings styling
├── icons/                # Extension icons
└── README.md             # Documentation

Build the Extension

To package the extension for distribution:

1. Install zip if not already installed:

sudo apt install zip


2. Run the following command to create a zip file:

zip -r aenzbi-extension.zip aenzbi-extension/




---

Contributing

We welcome contributions to improve this project.

Steps:

1. Fork the repository.


2. Create a feature branch:

git checkout -b feature-name


3. Commit your changes:

git commit -m "Add new feature"


4. Push your branch:

git push origin feature-name


5. Open a pull request.




---

License

This project is licensed under the MIT License. See the LICENSE file for details.


---

Contact

For support or inquiries, contact:
Author: Ally Elvis Nzeyimana
Email: naelvis6569@gmail.com
GitHub: AllyElvis


---

Let me know if you need additional sections or modifications!

