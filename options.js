// Saves options to chrome.storage
function save_options() {
  let inputUrl = document.getElementById('url').value;
  chrome.storage.sync.set({
    url: inputUrl
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Skill Added.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    skills: ['JavaScript', 'React', 'Redux']
  }, (items) => {
    items.skills.forEach((skill, index) => {
      let node = document.createElement('li');
      let textnode = document.createTextNode(skill);         // Create a text node
      node.appendChild(textnode);
      node.setAttribute('id', `skill-${index}`);
      document.getElementById("skill-list").appendChild(node);
    });
    // document.getElementById('url').value = items.url;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
