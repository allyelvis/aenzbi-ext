document.getElementById("syncInvoices").addEventListener("click", () => {
  chrome.runtime.sendMessage({ action: "syncNow" }, (response) => {
    document.getElementById("status").innerText = "Status: " + response.status;
  });
});
