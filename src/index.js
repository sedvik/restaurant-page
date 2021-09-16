import { domUtil, domCache } from './util.js';

const p = domUtil.create('p', 'I have some text, cool huh?');

const body = domCache.body;

console.log(p);