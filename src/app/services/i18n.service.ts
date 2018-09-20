import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class I18nService {

  lang = 'en';

  messages = {
    'en': MESSAGES_EN,
    'ru': MESSAGES_RU
  };

  use(lang: string): void {
    this.lang = lang;
  }

  get(key): string {
    return this.messages[this.lang][key] || key;
  }

}

const MESSAGES_RU = {
  'navigation': 'Навигация',
  'title': 'Привет'
};

const MESSAGES_EN = {
  'navigation': 'Navigation',
  'title': 'hello'
};
