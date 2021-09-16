import { domUtil, domCache } from './util.js';
import { createHomepageContent } from './homepage.js';

const body = domCache.body;
domUtil.removeContent(body);
const homepageContent = createHomepageContent();
body.appendChild(homepageContent);
/*
const p = domUtil.create('p', 'I have some text, cool huh?');

const body = domCache.body;

console.log(p);
*/