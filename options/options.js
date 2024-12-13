document.getElementById("save").addEventListener("click", () => {
  const baseUrl = document.getElementById("baseUrl").value;
  const bearerToken = document.getElementById("bearerToken").value;

  chrome.storage.sync.set({ baseUrl, bearerToken }, () => {
    document.getElementById("message").innerText = "Settings saved!";
  });
});
