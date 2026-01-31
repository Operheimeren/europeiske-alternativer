import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const defaultLang = 'no';
const stored = browser ? localStorage.getItem('preferredLanguage') : null;

export const currentLanguage = writable(stored || defaultLang);

currentLanguage.subscribe(value => {
  if (browser) {
    localStorage.setItem('preferredLanguage', value);
  }
});