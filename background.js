chrome.runtime.onInstalled.addListener(() => {
  console.log("Aenzbi Extension installed.");
});

chrome.alarms.create("syncTask", { delayInMinutes: 1, periodInMinutes: 15 });

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "syncTask") {
    syncData();
  }
});

function syncData() {
  chrome.storage.sync.get(["baseUrl", "bearerToken"], ({ baseUrl, bearerToken }) => {
    if (!baseUrl || !bearerToken) {
      console.error("Configuration missing. Please set Base URL and Bearer Token in options.");
      return;
    }

    fetch(baseUrl + "addInvoice", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + bearerToken
      },
      body: JSON.stringify({
        /* Invoice Data */
      })
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Invoice synced:", data);
      })
      .catch((error) => console.error("Sync error:", error));
  });
}
