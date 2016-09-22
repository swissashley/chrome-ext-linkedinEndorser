chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  // console.log(changeInfo);
  if (tab.url && (tab.url.indexOf('https://www.linkedin.com/in/') === 0 || tab.url.indexOf('https://www.linkedin.com/comm/profile/') === 0)) {
    chrome.pageAction.show(tabId);
  } else {
    chrome.pageAction.hide(tabId);
  }
  if(changeInfo.status === "loading") {
    chrome.pageAction.onClicked.addListener((tab) => {
      chrome.tabs.executeScript(null, {file: "myscript.js"});
    });
  }
});
// chrome.storage.onChanged.addListener((changes, namespace) => {
//         for (key in changes) {
//           var storageChange = changes[key];
//           console.log('Storage key "%s" in namespace "%s" changed. ' +
//                       'Old value was "%s", new value is "%s".',
//                       key,
//                       namespace,
//                       storageChange.oldValue,
//                       storageChange.newValue);
//         }
//       });
