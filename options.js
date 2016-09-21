// Saves options to chrome.storage
let inputSkills = [];
function save_options() {
  let inputSkill = document.getElementById('skill').value;
  inputSkills.push(inputSkill);
  console.log(inputSkills);
  chrome.storage.sync.set({
    skills: inputSkills
  }, () => {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Skill Added.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
    let liNode = document.createElement('li');
    let textNode = document.createTextNode(inputSkill);         // Create a text node
    liNode.appendChild(textNode);
    liNode.setAttribute('id', `skill-${inputSkills.length - 1}`);
    document.getElementById("skill-list").appendChild(liNode);
    document.getElementById('skill').value = '';

    let buttonNode = document.createElement('button');
    let buttonTextNode = document.createTextNode('Remove');
    buttonNode.appendChild(buttonTextNode);
    buttonNode.setAttribute('id', `buttonSkill-${inputSkills.length - 1}`);
    document.getElementById("skill-list").appendChild(buttonNode);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    skills: ['ruby', 'ruby on rails', 'rails', 'javascript', 'react', 'react.js', 'redux', 'react/redux', 'sql', 'web design', 'html', 'html5', 'css', 'css3']
  }, (items) => {
    inputSkills = [];
    items.skills.forEach((skill, index) => {
      inputSkills.push(skill);
      let divNode = document.createElement('div');
      document.getElementById("skill-list").appendChild(divNode);
      let liNode = document.createElement('li');
      let textnode = document.createTextNode(skill);         // Create a text liNode
      liNode.appendChild(textnode);
      liNode.setAttribute('id', `skill-${index}`);
      document.getElementById("skill-list").appendChild(liNode);

      let buttonNode = document.createElement('button');
      let buttonTextNode = document.createTextNode('Remove');
      buttonNode.appendChild(buttonTextNode);
      buttonNode.setAttribute('id', `buttonSkill-${inputSkills.length - 1}`);
      document.getElementById("skill-list").appendChild(buttonNode);

    });
    // document.getElementById('url').value = items.url;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('skill').addEventListener('keypress',
(e) => {
  var key = e.which || e.keyCode;
    if (key === 13) { // 13 is enter
      save_options();
    }
});
document.getElementById('save').addEventListener('click',
    save_options);
