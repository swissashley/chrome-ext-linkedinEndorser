var buttonNodes = [];
var skillNodes = [];
var skillArr = [];
var presetSkills = [];
chrome.storage.sync.get({
  skills: ['ruby', 'ruby on rails', 'rails', 'javascript', 'react', 'react.js', 'redux', 'react/redux', 'sql', 'web design', 'html', 'html5', 'css', 'css3']
}, items => {

  var skills = items.skills;
  for (var i = 0; i < skills.length; i++) {
    presetSkills.push(skills[i].toLowerCase());
  }
  if (document.getElementsByClassName("endorse-plus")) {
    buttonNodes = document.getElementsByClassName("endorsing");
  }
  if (document.getElementsByClassName("endorse-item-name-text")) {
    skillNodes = document.getElementsByClassName("endorse-item-name-text");
    for (var j = 0; j < skillNodes.length; j++) {
      skillArr.push(skillNodes[j].text.toLowerCase());
    }
  }
  if (buttonNodes.length > 0) {
    for (var k = 0; k < buttonNodes.length; k++ ) {
      if (presetSkills.includes(skillArr[k])) {
        buttonNodes[k].click();
        skillNodes[k].style.background = 'red';
      }
    }
  }
});
