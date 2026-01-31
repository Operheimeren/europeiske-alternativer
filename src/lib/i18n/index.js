import commonNo from './no/common.json';
import homeNo from './no/home.json';
import requirementsNo from './no/requirements.json';
import aboutNo from './no/about.json';
import privacyNo from './no/privacy.json';

import commonEn from './en/common.json';
import homeEn from './en/home.json';
import requirementsEn from './en/requirements.json';
import aboutEn from './en/about.json';
import privacyEn from './en/privacy.json';

export const translations = {
  no: {
    common: commonNo,
    home: homeNo,
    requirements: requirementsNo,
    about: aboutNo,
    privacy: privacyNo
  },
  en: {
    common: commonEn,
    home: homeEn,
    requirements: requirementsEn,
    about: aboutEn,
    privacy: privacyEn
  }
};

export function t(lang, page, key) {
  const keys = key.split('.');
  let value = translations[lang][page];
  
  for (const k of keys) {
    value = value?.[k];
  }
  
  return value || key;
}