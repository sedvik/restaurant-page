import { domUtil, domCache } from './util.js';
import { createHomepageContent } from './homepage.js';
import { createMenuContent } from './menu.js';
import { createContactContent } from './contact.js';

// onButtonClick - handles page tab button click logic
function onButtonClick(e) {
    // tabContentFunction will hold the appropriate content generation function depending on the clicked tab
    let tabContentFunction;
    const id = e.target.id;

    if (id === 'home-btn') {
        tabContentFunction = createHomepageContent;
    } else if (id === 'menu-btn') {
        tabContentFunction = createMenuContent;
    } else if (id === 'contact-btn') {
        tabContentFunction = createContactContent;
    }

    // Clear #content div
    const contentDiv = domCache.contentDiv;
    domUtil.removeContent(contentDiv);

    // Create new content and append to contentDiv
    const content = tabContentFunction();
    contentDiv.appendChild(content);
}

// assignTabEvents - assigns event listeners to page tabs
function assignTabEvents() {
    const tabs = domCache.tabs;
    tabs.forEach(tab => {
        tab.addEventListener('click', onButtonClick);
    });
}

// Assign event listeners to buttons and load the homepage
assignTabEvents();
domCache.contentDiv.appendChild(createHomepageContent());