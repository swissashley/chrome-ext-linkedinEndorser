var buttons = {};
var buttonArr = [];
chrome.runtime.sendMessage({method: "getLocalStorage", key: "skills"}, function(response) {
  console.log(response.data);
  var skills = items.skills;
  if (document.getElementsByClassName("endorse-plus")) {
    buttonArr = document.getElementsByClassName("endorsing");
  }
  if (buttonArr.length > 0) {
    for (let i = 0; i < buttonArr.length; i++ ) {
        buttonArr[i].click();
    }
  }
});
