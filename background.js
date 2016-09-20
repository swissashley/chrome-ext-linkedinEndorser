chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  console.log(changeInfo);
  if (tab.url && tab.url.indexOf('https://www.linkedin.com/in/') === 0) {
    chrome.pageAction.show(tabId);
  } else {
    chrome.pageAction.hide(tabId);
  }
chrome.pageAction.onClicked.addListener((tab) => {
  chrome.tabs.executeScript(null, {file: "myscript.js"});});
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.method == "getLocalStorage")
      sendResponse({data: localStorage[request.key]});
    else
      sendResponse({}); // snub them.
});
