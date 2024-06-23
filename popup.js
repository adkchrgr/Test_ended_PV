document.addEventListener('DOMContentLoaded', () => {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {action: "scrape"}, (response) => {
      if (response && response.data) {
        document.getElementById('results').value = response.data.join('\n');
      }
    });
  });
});
