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

  'about-us.about-me.photo': 'Моя фотография',
  'about-us.about-me.header': 'Обо мне',
  // tslint:disable-next-line:max-line-length
  'about-us.about-me.p1': 'Меня зовут Кряжев Василий, родился в 1980 году на территории Казахстана. В 2003 году окончил факультет информатики Томского государственного университета. С тех пор, вот уже на протяжении 15 лет, работаю программистом.',

  'about-us.genesis.header': 'Зарождение идеи проекта',
  // tslint:disable-next-line:max-line-length
  'about-us.genesis.p1': 'Последние несколько лет я работал над проектом "Электронные Счета Фактуры" (для правительства республики Казахстан). Меня попросили посмотреть на технологию блокчейн, с целью ее использования в одном из наших проектов. Данная технология нам не подошла, но знакомство с ней меня поразило. В то же самое время происходил бум крипто-валют, а также других проектов на базе блокчейн. Честно говоря, поражает, сколько труда и сил тратится на всякого рода мошенничества.',
  // tslint:disable-next-line:max-line-length
  'about-us.genesis.p2': 'Вторым событием для реализации данного проекта стала встреча с сотрудником одного из кооперативов. Выслушав его, я понял, что все это я могу реализовать и сам. При этом еще больше автоматизировав процесс, сделав его прозрачнее и сведя переплату участников к минимуму.',
  'about-us.genesis.p3': 'Данный сайт - это моя попытка создать общественно полезный проект на базе блокчейн.',

  'about-us.goal.header': 'Конечная цель - это утопия',
  // tslint:disable-next-line:max-line-length
  'about-us.goal.p1': 'Я простой, советский человек, наверное, из последнего поколения советских людей. Для меня распад СССР - это окончание самого великого проекта за всю историю человечества. Мы все взрослые люди наши взгляды во многом отличаются.',
  // tslint:disable-next-line:max-line-length
  'about-us.goal.p2': 'Данный проект создан с целью найти единомышленников и возродить красный проект. Если вы верите, что должна быть бесплатная медицина, бесплатное жилье, бесплатное образование. Земля крестьянам! Фабрики рабочим! Мы с тобой одной крови! Давайте объединяться и без революций и других великих потрясений делами доказывать, что построение более справедливого общества возможно.',
  // tslint:disable-next-line:max-line-length
  'about-us.goal.p3': 'Не имеет значения будут ли капиталисты (сионисты, масоны, рептилойды, анунаки, мазохисты, мировое правительство) или их приспешники оказывать нам сопротивление. Мы не собираемся бороться с богатыми, наша цель борьба с бедностью.',
  // tslint:disable-next-line:max-line-length
  'about-us.goal.p4': 'Цель - построение великой страны на основе мира, любви и созидания. Цели и задачи должны быть "космические" и даже если удастся всего несколько маленьких шагов сделать к такой цели, то уже жизнь будет прожита не зря.',

  'about-us.conclusion.header': 'Заключение',
  // tslint:disable-next-line:max-line-length
  'about-us.conclusion.p1': 'Очень трудно высказывать свои идеи и мысли, боишься общественного осуждения и насмешек. Ни в коем случае не хотел никого обидеть, оскорбить или критиковать.',
  // tslint:disable-next-line:max-line-length
  'about-us.conclusion.p2': 'Развитие технологий достигло невероятного уровня. Скорость обмена информацией просто колоссальна. Стало возможно прямое общение с любой точкой мира. Все это ведет к тому, что посредники становятся не нужны.',
  // tslint:disable-next-line:max-line-length
  'about-us.conclusion.p3': 'Неизбежно появление площадок, на которых будет вся необходимая человеку информация и быстрое, без посредников, решение его проблем. Осталось все это только реализовать…',

  'quote.q1.p1': 'Только в грёзы нельзя насовсем убежать:',
  'quote.q1.p2': 'Краткий век у забав — столько боли вокруг!',
  'quote.q1.p3': 'Попытайся ладони у мёртвых разжать',
  'quote.q1.p4': 'И оружье принять из натруженных рук.',
  'quote.q1.author': 'Владимир Высоцкий',
  'quote.q1.source': 'Баллада о борьбе, 1975',

  'quote.q2': 'Если бы мошенники знали все преимущества честности, то они ради выгоды перестали бы мошенничать.',
  'quote.q2.author': 'Бенджамин Франклин',

  // tslint:disable-next-line:max-line-length
  'quote.q3': 'Истина всегда проста, красива и доступна пониманию любого человека. Ложь зачастую запутана, требует специального обучения и знаний, непонимание которых пытаются списать на ограниченность человеческого ума.',
  'quote.q3.author': 'Неизвестный автор',

  'quote.q4': 'То, что вы строили годами, может быть разрушено в одночасье – все равно продолжайте строить.',
  'quote.q4.author': 'Мать Тереза',

  'quote.q5': 'Великие умы обсуждают идеи. Средние умы обсуждают события. Мелкие умы обсуждают людей.',
  'quote.q5.author': 'Элеонора Рузвельт',

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

  'about-us.about-me.photo': 'My Photo',
  'about-us.about-me.header': 'About me',
  // tslint:disable-next-line:max-line-length
  'about-us.about-me.p1': 'My name is Kryazhev Vasily, was born in 1980 in the territory of Kazakhstan. In 2003 he graduated from the Computer Science Faculty of Tomsk State University. Since then, I have been working as a software engineer for 15 years.',

  'about-us.genesis.header': 'The origin of the idea of the project',
  // tslint:disable-next-line:max-line-length
  'about-us.genesis.p1': 'For a last few years I was working on the project "Electronic Invoices" (for the government of the Republic of Kazakhstan). I was asked to take a closer look at the blockchain technology and analyze if it fits it in one of our projects. Even though this technology is not suitable for us but I was amazed by what I have learned. At the same time crypto-currency hype was on it’s peak and the same for other blockchain related projects. It is unbelievable how much time and effort was spent on all types of fraud.',
  // tslint:disable-next-line:max-line-length
  'about-us.genesis.p2': 'The second milestone for the continuation of this project was a meeting with a housing cooperative employee. I realized that I can implement it by myself after I listened of what he was saying. And even more, I can automate processes even further which make them more transparent and reduce the cost for co-op participants to a minimum.',
  'about-us.genesis.p3': 'This site is my attempt to create a public good project based on the blockchain.',

  'about-us.goal.header': 'The ultimate goal is Utopia',
  // tslint:disable-next-line:max-line-length
  'about-us.goal.p1': 'I\'m just a Soviet man and probably my generation is the last from the Soviets. I think the USSR collapse was the end of the greatest project in the history of mankind. We are all adults, our views are very different.',
  // tslint:disable-next-line:max-line-length
  'about-us.goal.p2': 'This project was initiated to find adherent people and to revive the red project. If you believe that there should be free medicine free housing and free education for everyone, ‘Land to the peasants! Factories to the workers! We\'re the same blood! Let us unite and without revolutions and other great shocks of affairs, prove that building a fair society is possible.',
  // tslint:disable-next-line:max-line-length
  'about-us.goal.p3': 'It does not matter whether the capitalists (Zionists, Masons, Reptiloids, Anunaki, masochists, world government) or their henchmen will resist. We are not going to fight the rich people, our goal is to fight poverty.',
  // tslint:disable-next-line:max-line-length
  'about-us.goal.p4': 'Our goal is to build a great country based on peace, love and creation. Goals should be high and ”cosmic" even if just a few small steps will be made to achieve those goals the life will worth it.',

  'about-us.conclusion.header': 'Conclusion',
  // tslint:disable-next-line:max-line-length
  'about-us.conclusion.p1': 'It is very difficult to express your ideas and thoughts, there is a fear of public condemnation and ridicule. I don’t want to offend or criticize anyone in any scenario.',
  // tslint:disable-next-line:max-line-length
  'about-us.conclusion.p2': 'Technology development has reached an incredible level and the information exchange speed is simply enormous. Direct communication with anywhere in world has become possible. All this leads to the fact that agents in the middle are not needed.',
  // tslint:disable-next-line:max-line-length
  'about-us.conclusion.p3': 'That is for sure new sites and platforms providing all necessary information and problem solving services without intermediaries will begin to appear. The only matter is to implement it..',

  'quote.q1.p1': 'Only in dreams you can not run away for good:',
  'quote.q1.p2': 'Short age of fun - so much pain around!',
  'quote.q1.p3': 'Try to unclasp the palm of the dead',
  'quote.q1.p4': 'And take the weapons out of the worn out hands.',
  'quote.q1.author': 'Vladimir Vysotsky',
  'quote.q1.source': 'The Ballad of Struggle, 1975',

  'quote.q2': 'Honesty is a best policy.',
  'quote.q2.author': 'Benjamin Franklin',

  // tslint:disable-next-line:max-line-length
  'quote.q3': 'Truth is always simple, beautiful and easy to understand for anyone. Lie is often confusing, it requires special knowledge and training lack of which they try to attribute to the limitations of the human mind.',
  'quote.q3.author': 'Unknown author',

  'quote.q4': 'What you spend years building may be destroyed overnight; build it anyway.',
  'quote.q4.author': 'Mother Teresa',

  'quote.q5': 'Great minds discuss ideas. Average minds discuss events. Small minds discuss people.',
  'quote.q5.author': 'Eleanor Roosevelt',

  '': '',
};
