function scrapeTable() {
  let results = [];
  document.querySelectorAll('.Listing-index-status-name.col-md-4').forEach((el, index) => {
    if (el.innerText === "Test ended" && [0, 1, 2, 3, 4, 5, 6].includes(parseInt(el.nextElementSibling.innerText.trim()))) {
      let assessmentValue = el.closest('tr').querySelector('.infinite-scroll-table-cell-value').innerText;
      results.push(assessmentValue);
    }
  });
  return results;
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "scrape") {
    let data = scrapeTable();
    sendResponse({data: data});
  }
});
