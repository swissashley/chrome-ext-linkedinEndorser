## Chrome extension - Linkedin Endorser

[Link][le]
[le]: https://chrome.google.com/webstore/detail/linkedin-endorser/mhakkhaadpkehkiiiimheegdbchfmlbi

** Disclaimer: Linkedin might disable the ability on one machine to endorse skills if you heavily rely on this extension in a short period of time. I got banned by Linkedin for one day while testing the extension, but it's
working again after one good night sleep :) **

### Background

It's App Academy job hunting season! This Chrome Extension can allow you endorse specific skills for your friend just in one click!

### Functionality & MVP

With this extension, users will be able to:

- [ ] Endorse all the skills for your friend.
- [ ] Has an option to create a skill list you want to endorse for your friend.

### Screenshots

#### Option Menu
![optionmenu](screenshots/optionmenu.png)

#### Option Settings
![option](screenshots/option.png)

#### After clicking on Linkedin Endorser, it only endorses the skills in your option list.
![screenshots](screenshots/toggle.png)

### Technologies & Technical Challenges

Use Page action and DOM to access skill buttons in Linkedin user profile page.
Compare the skills with the preset skill list and endorse the one matches the list.
