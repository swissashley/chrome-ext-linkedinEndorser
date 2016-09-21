var buttons = {};
var buttonNodes = [];
var skillNodes = [];
var skillArr = [];
var presetSkills = [];
chrome.storage.sync.get(null, items => {
  var skills = items.skills;
  for (var i = 0; i < skills.length; i++) {
    presetSkills.push(skills[i].toLowerCase());
  }
  // console.log(presetSkills);
  if (document.getElementsByClassName("endorse-plus")) {
    buttonNodes = document.getElementsByClassName("endorsing");
  }
  if (document.getElementsByClassName("endorse-item-name-text")) {
    skillNodes = document.getElementsByClassName("endorse-item-name-text");
    for (var i = 0; i < skillNodes.length; i++) {
      skillArr.push(skillNodes[i].text.toLowerCase());
    }
    // console.log(skillArr);
  }
  if (buttonNodes.length > 0) {
    for (let i = 0; i < buttonNodes.length; i++ ) {
      if (presetSkills.includes(skillArr[i])) {
        // console.log('endorsing ' + skillArr[i]);
        console.log('endorsing...');
        buttonNodes[i].click();
      }
    }
  }
});
