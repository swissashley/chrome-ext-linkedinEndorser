## Chrome extension - Linkedin Endorser

### Background

It's App Academy job hunting season! This Chrome Extension can let you endorse your classmates just in one click!

### Functionality & MVP

With this extension, users will be able to:

- [ ] Endorse all the skills for his friend.

### Wireframe

![wireframe](wireframes/chrome.png)

### Technologies & Technical Challenges

This extension will be implemented using the standard Chrome extension technology: Javascript, with chrome API.  In addition to the `manifest.json` and `package.json` files, there will be two scripts:

- `background.js`: will contain the logic hiding and restoring all the tabs.
- `options.js`: will contain the logic for changing the user's settings

There will also be one HTML file to display the settings:

- `options.html`: the file that renders the Settings menu for the user

The primary technical challenges will be:

- Accessing the tabs,
- Creating temporary bookmarks,
- Opening up homepage,
- Building modal ( or html page) for preset homepage.

### Implementation Timeline

**Day 1**: Get started on the infrastructure of the extension, following <a href="https://developer.chrome.com/extensions/getstarted">this guide</a> from Chrome.  By the end of the day, I will have:

- A completed `package.json`
- A completed `manifest.json`
- The ability to locate tabs.

**Day 2**: Work on deleting/creating tabs, and creating/deleting bookmarks.  By the end of the day, I will have:

- The ability create and delete tabs and bookmarks.

**Day 3**: Create option page for user to setup password when restoring tabs, and setup custom page(s) when hiding tabs.  By the end of the day:

- Have all the custom settings for options.html.

**Day 4**: Double check all the functionalities and publish it to web app store. By the end of the day:

- Fully implemented extension.
- Publish to Google web app store.
