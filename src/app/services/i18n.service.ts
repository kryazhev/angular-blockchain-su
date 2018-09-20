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
  'navigation.home': 'Главная',
  'navigation.projects': 'Проекты',
  'navigation.management': 'Управление',
  'navigation.management.participants': 'Участники',
  'navigation.management.assets': 'Активы',
  'navigation.management.historian-records': 'Управление',
  'navigation.about-us': 'О нас',
  'navigation.contact-us': 'Поддержка',
  'navigation.settings': 'Настройки',

  'translation.dialog.header': 'Помощь с переводом',
  // tslint:disable-next-line:max-line-length
  'translation.dialog.p1': 'На данный момент пользовательский интерфейс поддерживается только на языках: <span class="flag-icon flag-icon-ru"></span> ru.',
  // tslint:disable-next-line:max-line-length
  'translation.dialog.p2': 'Если вы можете помочь с переводом на другие языки, то файл для перевода вы можете скачать <a href="/static/i18n/locale_ru.ini" target="_blank">здесь</a>.',
  'translation.dialog.p3': 'После перевода отправьте файл по адресу blockchain.ussr@gmail.com',

  'action.login': 'Войти',
  'action.logout': 'Выйти',
  'action.save': 'Сохранить',
  'action.send': 'Отправить',
  'action.cancel': 'Отмена',
  'action.close': 'Закрыть',

  'project.housing-cooperative': 'Общественный жилищный кооператив',
  'project.ussr-2.0': 'Сообщество советских людей',
  'project.pension-fund': 'Общественный пенсионный фонд',
  'project.municipal-services': 'Прозрачный ЖЭК',
  'project.bank': 'Общественный банк',
  'project.alert.not-implemented': 'На текущий момент проект представлен только в виде идеи.',

  'project.tabs.description': 'Описание',
  'project.tabs.data': 'Данные',
  'project.tabs.tasks': 'Задачи',

  '': '',
};


const MESSAGES_EN = {
  'navigation.home': 'Home',
  'navigation.projects': 'Projects',
  'navigation.management': 'Management',
  'navigation.management.participants': 'Participants',
  'navigation.management.assets': 'Assets',
  'navigation.management.historian-records': 'Historian Records',
  'navigation.about-us': 'About Us',
  'navigation.contact-us': 'Contact Us',
  'navigation.settings': 'Settings',

  'translation.dialog.header': 'Help with translation',
  // tslint:disable-next-line:max-line-length
  'translation.dialog.p1': 'Currently, the user interface is only supported in languages: <span class="flag-icon flag-icon-ru”> </ span> ru.',
  // tslint:disable-next-line:max-line-length
  'translation.dialog.p2': 'If you can help with translation into other languages, you can download original text file <a href="/static/i18n/locale_en.ini" target="_blank"> here </a>.',
  'translation.dialog.p3': 'Please send your translations to blockchain.ussr@gmail.com',

  'action.login': 'Login',
  'action.logout': 'Log out',
  'action.save': 'Save',
  'action.send': 'Send',
  'action.cancel': 'Cancel',
  'action.close': 'Close',

  'project.housing-cooperative': 'Public Housing Cooperative',
  'project.ussr-2.0': 'Community of Soviet People',
  'project.pension-fund': 'Public pension fund',
  'project.municipal-services': 'Transparent Housing Office',
  'project.bank': 'Public bank',
  'project.alert.not-implemented': 'At the moment the project is in conceptual phase.',

  'project.tabs.description': 'Description',
  'project.tabs.data': 'Data',
  'project.tabs.tasks': 'Tasks',

  '': '',
};

