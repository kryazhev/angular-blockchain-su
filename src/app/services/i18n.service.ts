import { Injectable } from '@angular/core';

const MESSAGES_RU = require('../../assets/i18n/ru.json');
const MESSAGES_EN = require('../../assets/i18n/en.json');

const MESSAGES = {
  'ru': MESSAGES_RU,
  'en': MESSAGES_EN
};

@Injectable({
  providedIn: 'root'
})
export class I18nService {

  lang = 'ru';

  use(lang: string): void {
    this.lang = lang;
  }

  get(key): string {
    return MESSAGES[this.lang][key] || key;
  }

}
