import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class I18nService {

  lang = 'ru';

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
  'title': 'Блокчейн сообщества',

  'note': 'Примечание',
  'details': 'Подробнее',

  'under-construction': 'На текущий момент идет работа над реализацией этой задачи.',
  'not-implemented-yet': 'На текущий момент данная функциональность не реализована.',

  'navigation.home': 'Главная',
  'navigation.projects': 'Проекты',
  'navigation.management': 'Управление',
  'navigation.management.participants': 'Участники',
  'navigation.management.assets': 'Активы',
  'navigation.management.historian-records': 'История операций',
  'navigation.about-us': 'О нас',
  'navigation.contact-us': 'Поддержка',
  'navigation.settings': 'Настройки',

  'translation.dialog.header': 'Помощь с переводом',
  // tslint:disable-next-line:max-line-length
  'translation.dialog.p1': 'На данный момент пользовательский интерфейс поддерживается только на языках: <span class="flag-icon flag-icon-ru"></span> ru, <span class="flag-icon flag-icon-us"></span> en.',
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

  'contact-us.donate.header': 'Поддержать проект',
  // tslint:disable-next-line:max-line-length
  'contact-us.donate.p1': 'На текущий момент данный проект реализуется силами одного человека. К сожалению, я не обладаю ни материальными, ни информационными ресурсами. Я глубоко убежден, что реализация представленных проектов может принести большую пользу обществу. Любая помощь приветствуется и очень нужна ваша поддержка. Ниже приведен список моих банковских карт, либо кошельков.',

  'contact-us.donate.sberbank': 'Карта Сбербанка России',
  'contact-us.donate.alphabank': 'Карта Альфа-Банка России',
  'contact-us.donate.web-money.wmr': 'Кошелек WMR',
  'contact-us.donate.web-money.wmz': 'Кошелек WMZ',
  'contact-us.donate.web-money.wmx': 'Кошелек WMX',
  'contact-us.donate.web-money.wmh': 'Кошелек WMH',
  'contact-us.donate.bitcoin': 'Кошелек Bitcoin',
  'contact-us.donate.bitcoin-cash': 'Кошелек BitcoinCash',

  'contact-us.donate.alert': 'На текущий момент никакие кошельки не указаны, так как проект еще не достиг даже стадии пилотной версии.',

  'contact-us.feedback.header': 'Обратная связь',
  // tslint:disable-next-line:max-line-length
  'contact-us.feedback.p1': 'Для связи со мной вы можете воспользоваться данной формой. Мои ресурсы очень ограничены, поэтому заранее приношу извинения, если я вам не отвечу.',

  'contact-us.feedback.form.email': 'Ваш емайл',
  'contact-us.feedback.form.message': 'Сообщение',

  'contact-us.feedback.form.validation-error.field-required': 'Обязательное поле.',

  'contact-us.feedback.action-result.success': 'Ваше сообщение было успешно отправлено.',
  'contact-us.feedback.action-result.fail': '=При отправке сообщения произошла ошибка.',

  // tslint:disable-next-line:max-line-length
  'contact-us.feedback.alert': 'Отправка почты на данный момент не работает, так как сервис отправки почты платный и пока он не подключен. Вы можете отправить письмо на адрес blockchain.ussr@gmail.com.',

  'project.bank.challenge.header': 'Проблема',
  // tslint:disable-next-line:max-line-length
  'project.bank.challenge.p1': 'Банки это непрозрачные структуры. Периодические банкротства и последующие проблемы вкладчиков. Высокие проценты при переводе средств. Отсутствие программных возможностей (API) по управлению счетами.',

  'project.bank.proposal.header': 'Общие рассуждения',
  // tslint:disable-next-line:max-line-length
  'project.bank.proposal.p1': 'Создание общественного банка даст возможность людям самим устанавливать правила игры. Конечно обычные банки не уйдут, так как необходимо полноценное обслуживание клиентов. Но для реализации очень большого числа других блокчейн сообществ необходим полноценный банк.',
  // tslint:disable-next-line:max-line-length
  'project.bank.proposal.p2': 'Должны быть доступны стандартные операции: пополнение счета, снятие средств со счета, межбанковские переводы. Все эти операции должны выполняться быстро, без комиссии (или с минимальной комиссией), с возможностью отмены операции.',
  // tslint:disable-next-line:max-line-length
  'project.bank.proposal.p3': 'Блокчейн банки могут стать полностью открытыми банками, или хотя бы намного более прозрачными. Такие банки могут дать гарантию вкладчикам, что средства не пропадут. Они должны стать отдельными структурами, а не "дополнительными" возможностями какого-нибудь закрытого банка. Открывая лишь небольшую часть, прозрачности не будет.',
  // tslint:disable-next-line:max-line-length
  'project.bank.proposal.p4': 'Банковская тайна, сокрытие информации о вкладчиках и прозрачность вступают в противоречие. Здесь еще большой вопрос, какая информация о деятельности банка будет доступна всем, а какая информация является частной и зашифрованной. При этом шифрование это не гарантия что данные не будут декодированы.',
  // tslint:disable-next-line:max-line-length
  'project.bank.proposal.p5': 'На пути создания таких общественных банков много вопросов. Первые “пилотные” версии могут содержать большое количество уязвимостей и проблем. Но движение в этом направлении уже нужно начинать. В идеале такие банки должны быть реализованы в рамках центральных банков. Это может уменьшить сопротивление коммерческих банков, а также послужить стимулом коммерческим банкам для интеграции с ними.',

  'project.municipal-services.challenge.header': 'Проблема',
  'project.municipal-services.challenge.p1': 'Жилищно коммунальное хозяйство это одна из самых болезненных тем для нашего общества.',

  'project.municipal-services.proposal.header': 'Общие рассуждения',
  // tslint:disable-next-line:max-line-length
  'project.municipal-services.proposal.p1': 'Очень большую пользу в этой области могла бы принести технология блокчейн. Создание системы с полностью открытой бухгалтерией, а также прозрачной системой голосования, позволило бы вывести качество управления на новый уровень.',
  // tslint:disable-next-line:max-line-length
  'project.municipal-services.proposal.p2': 'Для начала создать площадку, в которой просто собрать интересные идеи и начать общественное обсуждение. С дальнейшей реализацией наиболее интересных идей.',

  'project.pension-fund.challenge.header': 'Проблема',
  'project.pension-fund.challenge.p1': 'Пенсионный возраст в Российской Федерации в ближайшее время будет увеличен.',

  'project.pension-fund.proposal.header': 'Общие рассуждения',
  // tslint:disable-next-line:max-line-length
  'project.pension-fund.proposal.p1': 'Необходимы альтернативные идеи по пенсионной реформе. Каких то - волшебных рецептов, как всех осчастливить, не существует. Но для тех людей, которые хотят сами управлять своей жизнью - есть предложение. Давайте объединимся и создадим свой собственный пенсионный фонд, управление которым мы возьмем на себя. Правила, по которым будет действовать фонд, мы придумаем сами, например:',
  'project.pension-fund.proposal.p1.i1': 'своими средствами каждый управляет сам',
  // tslint:disable-next-line:max-line-length
  'project.pension-fund.proposal.p1.i2': 'предусмотрено несколько возможностей для инвестирования (для самых отчаянных, в том числе, в крипто-валюту)',
  // tslint:disable-next-line:max-line-length
  'project.pension-fund.proposal.p1.i3': 'есть возможность забрать накопления (возможно, это противоречит законодательству, но законы меняются...)',
  'project.pension-fund.proposal.p1.i4': 'любое правило, которое мы еще придумаем',
  'project.pension-fund.proposal.p1.i4.badge': 'Новое',
  // tslint:disable-next-line:max-line-length
  'project.pension-fund.proposal.p2': 'К сожалению, у такого фонда тоже будут недостатки. Например, отсутствие сотрудников и соответственно клиентское обслуживание будет сведено к минимуму. Хотя в век цифровых технологий, если достаточное количество усилий приложить, обслуживание может быть автоматизировано.',

  'project.ussr-2.0.challenge.header': 'Проблема',
  'project.ussr-2.0.challenge.p1': 'Очевидно, что никакие "западные инвесторы" никогда не придут, чтобы нас осчастливить.',

  'project.ussr-2.0.proposal.header': 'Общие рассуждения',
  // tslint:disable-next-line:max-line-length
  'project.ussr-2.0.proposal.p1': 'Большинство социалистических стран были разрушены одним и тем же способом: приватизация, уменьшение налогов, разрушение социального государства.',
  // tslint:disable-next-line:max-line-length
  'project.ussr-2.0.proposal.p2': 'Никто кроме нас самих не сделает нашу жизнь лучше. Все что будет происходить с нашей страной - это наша ответственность.',
  // tslint:disable-next-line:max-line-length
  'project.ussr-2.0.proposal.p3': 'Справедливое общество, социальные гарантии, достойные пенсии, это те задачи, в решении которых мы все заинтересованы. На текущий момент технологии позволяют взять решение таких задач обществу на себя.',
  // tslint:disable-next-line:max-line-length
  'project.ussr-2.0.proposal.p4': 'Целью данного проекта является создание инвестиционного фонда, который бы осуществлял поиск и финансирование общественно важных проектов.',

  'project.ussr-2.0.money.header': 'Про деньги',
  // tslint:disable-next-line:max-line-length
  'project.ussr-2.0.money.p1': 'Деньги это вопрос веры. Несколько веков назад верили, что золото обладает какой то - ценностью. Сегодня многие верят, что такой ценностью обладает "бумага". В последнее время начали появляться люди, которые верят "ничего" (крипто-валюты) тоже обладает ценностью.',
  // tslint:disable-next-line:max-line-length
  'project.ussr-2.0.money.p2': 'Существуют крипто-анархисты, которые считают, что крипто-валюты могут стать частными деньгами и появление крипто-валют позволит обществу взять такой механизм как деньги под контроль. Но чтобы победить, нужно интеллектуально превосходить своего оппонента. В современном обществе вопросы, что такое деньги и как их взять под общественный контроль даже не обсуждаются.',
  // tslint:disable-next-line:max-line-length
  'project.ussr-2.0.money.p3': 'Обществу нужны не деньги, а товары и услуги, созданные в результате труда. Чтобы общество стало действительно свободным необходимо разрушить саму веру в деньги. Но задача не в том чтобы лопнуть этот пузырь и получить анархию. Задача понемногу этот пузырь сдувать без серьезных общественных потрясений.',

  'project.ussr-2.0.goal.header': 'Цель проекта',
  // tslint:disable-next-line:max-line-length
  'project.ussr-2.0.goal.p1': 'Конечной целью данного проекта является построение общества свободных людей. Свободный человек это тот, у которого нет господ, а также любых других эксплуататоров его труда. Необходимо создать народное хозяйство, которое бы обеспечивало всех членов общества всем необходимым.',
  // tslint:disable-next-line:max-line-length
  'project.ussr-2.0.goal.p2': 'Цель великой капиталистической страны занять первое место в списке стран по ВВП. Цель великой социалистической страны занять в этом списке последнее место (со значением ноль долларов США).',
  // tslint:disable-next-line:max-line-length
  'project.ussr-2.0.goal.p3': 'Это не значит, что мы развалили все предприятия и ничего не производим. Наоборот мы создали настолько эффективные производства, что себестоимость их продукции стала равна нулю.',
  // tslint:disable-next-line:max-line-length
  'project.ussr-2.0.goal.p4': 'Исходя из того, что все ресурсы принадлежат народу, человечеству осталось решить две небольшие задачи: искусственный интеллект, бесплатная энергия. После этого можно будет строить производственные цепочки любой сложности, при нулевой себестоимости.',
  // tslint:disable-next-line:max-line-length
  'project.ussr-2.0.goal.p5': 'Конечно эти "простые" задачи не будут решены в ближайшее время. Но почему бы нам не начать движение в этом направлении?',

  'project.gdp.china': '1. <span class="flag-icon flag-icon-cn"></span> Китай 23.159 млрд. $',
  'project.gdp.usa': '2. <span class="flag-icon flag-icon-us"></span> США 19.391 млрд. $',
  'project.gdp.russia': '6. <span class="flag-icon flag-icon-ru"></span> Россия 4.008 млрд. $',

  'project.ussr-2.0.rules.header': 'Приципы работы фонда',
  // tslint:disable-next-line:max-line-length
  'project.ussr-2.0.rules.p1': 'Фонд создается не для получения прибыли, а для реализации интересных проектов. Любой может стать участником нашего фонда. Далее мы начинаем искать интересные идеи. Любой может внести свою идею и получить поддержку от участников нашего фонда в виде финансирования. Форма собственности создаваемых предприятий не имеет значения. Проекты могут быть даже убыточными с финансовой точки зрения.',
  'project.ussr-2.0.rules.p1.i1': 'создание федеральной строительной компании (работает на уровне себестоимости)',
  'project.ussr-2.0.rules.p1.i2': 'создание федеральной розничной сети (работает на уровне себестоимости)',
  'project.ussr-2.0.rules.p1.i3': 'строительство безопасного торгового комплекса (с минимальной платой для арендаторов)',
  'project.ussr-2.0.rules.p1.i4': 'возведение нового моста',
  'project.ussr-2.0.rules.p1.i5': 'построение нового космодрома',
  'project.ussr-2.0.rules.p1.i6': 'возведение памятника Чуркину В.И.',
  'project.ussr-2.0.rules.p1.i7': 'проведение детских вело соревнований в',
  'project.ussr-2.0.rules.p1.i7.badge': 'Вашем городе',

  'project.ussr-2.0.management.header': 'Управление',
  // tslint:disable-next-line:max-line-length
  'project.ussr-2.0.management.p1': 'Для реализации проектов нужны руководители. Любой человек принимает решения исходя из своих собственных интересов. Борьба с коррупцией бесполезное занятие, невозможно бороться с человеческой природой.',
  // tslint:disable-next-line:max-line-length
  'project.ussr-2.0.management.p2': 'Несмотря на то, сколько негатива и критики было на советское руководство, именно здесь были примеры руководителей, которые думали не о собственном благополучии, а о чем то - большем. Именно таких руководителей нам и нужно среди членов общества выделять и поддерживать.',

  'project.housing-cooperative.challenge.header': 'Проблема',
  'project.housing-cooperative.challenge.p1': 'Высокий процент ипотечного кредитования, который в любой момент может быть увеличен.',

  'project.housing-cooperative.proposal.header': 'Общие рассуждения',
  // tslint:disable-next-line:max-line-length
  'project.housing-cooperative.proposal.p1': 'Необходим альтернативой механизм для приобретения недвижимости. Наличие такого общественного механизма должно послужить стимулом коммерческим банкам уменьшить ставку до уровня 1-2%. Данный механизм должен быть устойчивым, и работать на протяжении десятилетий.',

  'project.housing-cooperative.goal.header': 'Цель проекта',
  // tslint:disable-next-line:max-line-length
  'project.housing-cooperative.goal.p1': 'Создание кооператива по приобретению жилья. Данный кооператив будет с полностью открытой бухгалтерией, все внутренние операции и документация будут общедоступны. Правила работы будут максимально прозрачны. Работу кооператива нужно максимально автоматизировать. На текущий момент полной автоматизации мы добьемся, но в идеале, к этому нужно стремиться.',

  'project.housing-cooperative.rules.header': 'Приципы работы кооператива',
  // tslint:disable-next-line:max-line-length
  'project.housing-cooperative.rules.p1': 'Мы открываем кооперативный счет. На этом счету мы будем накапливать деньги для приобретения жилья.',
  // tslint:disable-next-line:max-line-length
  'project.housing-cooperative.rules.p2': 'Участником кооператива может стать любой. Участник определяется со стоимостью жилья и сроком, за который он обязуется погасить задолженность. Далее участник вносит 1/3 от стоимости на кооперативный счет и становится в очередь.',
  // tslint:disable-next-line:max-line-length
  'project.housing-cooperative.rules.p3': 'При накоплении на счету необходимой суммы кооператив приобретает жилье первому участнику в очереди. После этого участник кооператива начинает ежемесячно погашать свою задолженность.',
  // tslint:disable-next-line:max-line-length
  'project.housing-cooperative.rules.p4': 'Недвижимость приобретается на кооператив. Это является стимулом для участника погашать перед кооперативом свою задолженность. Сам участник является обременителем (схема обратная банковской ипотеке) это гарантия того, что основатели кооператива не продадут все квартиры и не уедут в неизвестном направлении.',
  // tslint:disable-next-line:max-line-length
  'project.housing-cooperative.rules.p5': 'После того как участник вернет свою задолженность перед кооперативом документы переоформляются и участник кооператива становится полноправным собственником. На этом участие в кооперативе прекращается.',
  // tslint:disable-next-line:max-line-length
  'project.housing-cooperative.rules.p6': 'Каждый участник платит ежемесячные кооперативные взносы 1000 рублей в месяц. Членские взносы человек начинает платить только с того момента как на него приобретается жилье. Оплата членских взносов заканчивается, когда участник погашает свою задолженность перед кооперативом.',

  'project.housing-cooperative.overpayments.header': 'Ваша переплата',
  // tslint:disable-next-line:max-line-length
  'project.housing-cooperative.overpayments.i1': 'Банковские переводы 2%. Возможно мы найдем способы переводов без комиссии, или с меньшей комиссией.',
  // tslint:disable-next-line:max-line-length
  'project.housing-cooperative.overpayments.i2': 'Оформление документов ~50 000 рублей. Все расходы по оформлению будут на вас. Сотрудник кооператива должен будет приехать и оформить сделку. В начале нашего кооператива это будет поездка в другой город. С ростом нашего сообщества, сотрудники будут появляться в различных городах. Также сюда можно отнести обязательное страхование недвижимости.',
  // tslint:disable-next-line:max-line-length
  'project.housing-cooperative.overpayments.i3': 'Членские взносы 1000 рублей в месяц. Итого за 10 лет общая сумма переплаты 120 000 рублей. Данные деньги пойдут на расходы связанные с поддержкой и развитием кооператива.',

  'project.housing-cooperative.participants.header': 'Требования к участникам',
  // tslint:disable-next-line:max-line-length
  'project.housing-cooperative.participants.i1': 'Нам не нужно знать ваше ФИО. Но так как все документы по кооперативу будут в общем доступе, то ваше имя будет "засвечено" при оформлении документов.',
  // tslint:disable-next-line:max-line-length
  'project.housing-cooperative.participants.i2': 'Нам не нужны справки НДФЛ. Нам неважно, где и кем вы работаете (обычно банки не дают ипотеку ИП). Но вы должны ответственно подойти к определению стоимости приобретаемой недвижимости. Ваши ежемесячные платежи должны быть для вас реальны.',
  // tslint:disable-next-line:max-line-length
  'project.housing-cooperative.participants.i3': 'Нам неважно ваше гражданство для участия в кооперативе. Но гражданство у вас должно быть на момент когда вы рассчитаетесь, и недвижимость будет переоформляться на вас.',

  'project.housing-cooperative.withdraw-funds.header': 'Вывод средств из кооператива',
  // tslint:disable-next-line:max-line-length
  'project.housing-cooperative.withdraw-funds.p1': 'Вы в любой момент можете оформить заявку на выход или частичный вывод средств из кооператива.',
  // tslint:disable-next-line:max-line-length
  'project.housing-cooperative.withdraw-funds.p2': 'Заявки на вывод это тоже очередь, но они имеют наивысший приоритет. При накоплении на кооперативном счете необходимой суммы, такая заявка будет в порядке очереди обработана.',
  // tslint:disable-next-line:max-line-length
  'project.housing-cooperative.withdraw-funds.p3': 'Если недвижимость вам еще не была приобретена, то ваши потери составят 4% (два банковских перевода).',
  // tslint:disable-next-line:max-line-length
  'project.housing-cooperative.withdraw-funds.p4': 'Если недвижимость уже была приобретена, то недвижимость продается по рыночной стоимости, из этой суммы погашается долг перед кооперативом, а остальная часть возвращается бывшему участнику. При этом участник может, как заработать, так и потерять, в зависимости от ситуации на рынке жилья.',

  'project.housing-cooperative.defaulter.header': 'Неплательщики',
  // tslint:disable-next-line:max-line-length
  'project.housing-cooperative.defaulter.p1': 'Мы постарались создать прозрачную и выгодную для всех схему. Честное участие в нашей схеме выгодно, и переплата по сравнению с другими совсем небольшая.',
  // tslint:disable-next-line:max-line-length
  'project.housing-cooperative.defaulter.p2': 'Если участник согласен на мирное урегулирование то недвижимость продается по рыночной стоимости, из этой суммы погашается долг перед кооперативом, а остальная часть возвращается бывшему участнику. При этом участник может, как заработать, так и потерять, в зависимости от ситуации на рынке жилья.',
  // tslint:disable-next-line:max-line-length
  'project.housing-cooperative.defaulter.p3': 'Если участник на мирное урегулирование не согласен, то дальше разбирательство идет через суд. Несмотря на то, что это долго и больно, другого выхода у нас нет.',

  'project.housing-cooperative.about-us.header': 'Мы пирамида',
  // tslint:disable-next-line:max-line-length
  'project.housing-cooperative.about-us.p1': 'В основе деятельности нашего кооператива лежит пирамидальный принцип. Жилье приобретается за счет поступления новых членов. Мы исходим из того что пирамида это не обязательно плохо. Все зависит от основателей и насколько их намерения являются мошенническими. Главное чтобы пирамида была устойчивой.',
  // tslint:disable-next-line:max-line-length
  'project.housing-cooperative.about-us.p2': 'Активами нашего кооператива являются: приобретённая недвижимость, средства на кооперативном счете. Если продать всю недвижимость, то мы получим сумму (за исключением % при переводе), которую внесли наши участники. В этом случае мы можем разойтись и каждый останется при своих. Мы не сможем возместить только членские взносы, так как эти деньги уже будут потрачены на развитие кооператива.',
  // tslint:disable-next-line:max-line-length
  'project.housing-cooperative.about-us.p3': 'Гарантии, которые мы можем вам предложить. Наша бухгалтерская книга будет полностью открыта, для этого мы используем технологию блокчейн. Мы будем принимать переводы с пластиковых карт Visa\MasterCard, которые позволяют оформить процедуру возврата (chargeback), в том случае, если вы посчитаете работу нашего кооператива мошенничеством.',
  // tslint:disable-next-line:max-line-length
  'project.housing-cooperative.about-us.p4': 'На данном этапе у проекта нет инвестора и врядли он появится. Инвестиции под нулевой или минусовой процент коммерчески неинтересны. Другие проекты, такие как: "Общественный пенсионный фонд", "Сообщество советских людей" могли бы стать инвесторами в наш кооператив. Но пока деньги которые у нас будут это только деньги наших участников.',
  // tslint:disable-next-line:max-line-length
  'project.housing-cooperative.about-us.p5': 'Данный проект это очередь, и вам придется ждать момент наступления вашей очереди. Все будет зависеть от количества участников в нашем сообществе.',

  'home.jumbotron.header': 'Блокчейн сообщества - цифровая революция',
  // tslint:disable-next-line:max-line-length
  'home.jumbotron.p1': 'Новый мировой порядок под контролем общества. Во имя всех тех, кто жив.., и тех, кого уже нет.., и тех, кто будет потом...',

  'home.motivation.header': 'Мотивация',
  'home.motivation.p1': 'Построение более справедливого общества, избавление от различного рода эксплуатации (скрытой или явной).',

  'home.principles.header': 'Принципы',
  // tslint:disable-next-line:max-line-length
  'home.principles.p1': 'Мы исходим из того, что честным людям скрывать нечего. Технологии, которые мы собираемся использовать, позволяют создать нам максимально открытые и прозрачные системы, в которых все данные будут доступны любому участнику.',
  'home.principles.p2': 'Мы не собираемся нарушать законодательсво какой либо страны.',

  'home.goal.header': 'Наша цель',
  // tslint:disable-next-line:max-line-length
  'home.goal.p1': 'Создание общественных инструментов, которые позволять решать насущные общественные проблемы, а также удалить ненужных посредников.',
  // tslint:disable-next-line:max-line-length
  'home.goal.p2': 'Мы предлагаем обществу самому взять на себя управление, так как верим, что общественное управление может работать намного эффективнее государственного.',
  // tslint:disable-next-line:max-line-length
  'home.goal.p3': 'К посредникам можно отнести: государство, различные финансовые институты (например, банки). Нашей целью не является борьба с ними.',

  'home.technologies.header': 'Технологии',
  'home.technologies.blockchain.term': 'Распределенный Журнал, Цепочки Блоков (Distributed Ledger, Blockchain)',
  // tslint:disable-next-line:max-line-length
  'home.technologies.blockchain.definition': '- открытая бухгалтерская книга доступная всем пользователям. При этом данные невозможно изменить, либо подделать.',
  'home.technologies.smart-contracts.term': 'Умные Контракты (Smart Contracts)',
  // tslint:disable-next-line:max-line-length
  'home.technologies.smart-contracts.definition': '- компьютерная программа, которая выполняется при определенных условиях. Другими словами это "цифровые законы" по которым "живут" блокчейн сообщества.',
  'home.technologies.cloud-technologies.term': 'Облачные технологии (Cloud Technologies)',
  // tslint:disable-next-line:max-line-length
  'home.technologies.cloud-technologies.definition': '- это удобная среда для хранения и обработки информации, объединяющая в себе аппаратные средства, лицензионное программное обеспечение, каналы связи, а также техническую поддержку.',
  'home.technologies.decentralized-applications.term': 'Децентрализованные Приложения (Decentralized Applications)',
  // tslint:disable-next-line:max-line-length
  'home.technologies.decentralized-applications.definition': '- приложения, в которых отсутствует центральная точка отказа. При выходе из строя, блокировке какого либо узла, приложение должно продолжать работать, а данные должны оставаться доступными.',
  'home.technologies.open-source.term': 'Открытый исходный код (Open Source)',
  // tslint:disable-next-line:max-line-length
  'home.technologies.open-source.definition': '- исходный код будет открыт. Это поможет более быстрому обнаружению и исправлению ошибок. А также может, послужить примером для реализации других блокчейн сообществ.',

  // tslint:disable-next-line:max-line-length
  'home.technologies.note': 'Облачные технологии и децентрализованные приложения могут противоречить друг другу. Выбор технологий будет зависеть от целей конкретного проекта.',

  'home.management.header': 'Управление',
  // tslint:disable-next-line:max-line-length
  'home.management.p1': 'Управление будет реализовано с помощью механизма голосования. Любой участник нашего сообщества может высказать свои идеи. Если за идею проголосуют другие участники, то соответствующие изменения могут быть реализованы как создание нового умного контракта, либо модификация уже существующего.',

  'home.projects.header': 'Проекты',
  'home.projects.housing-cooperative.header': 'Общественный жилищный кооператив (ипотека 0%)',
  // tslint:disable-next-line:max-line-length
  'home.projects.housing-cooperative.description': 'Создание альтернативы банковской ипотеке. Данный общественный механизм должен позволить приобретать объекты недвижимости и избавиться от высоких банковских процентных ставок.',
  'home.projects.ussr-2.0.header': 'Сообщество советских людей',
  // tslint:disable-next-line:max-line-length
  'home.projects.ussr-2.0.description': 'Создание общественного фонда целью, которого будет реализация общественно важных проектов. Например, создание предприятий работающих на благо общества, нацеленных на производство товаров и услуг максимального качества, а не для извлечения максимальной прибыли.',
  'home.projects.pension-fund.header': 'Общественный пенсионный фонд',
  // tslint:disable-next-line:max-line-length
  'home.projects.pension-fund.description': 'Создание прозрачного пенсионного фонда с общественным управлением, невозможностью бесследно украсть средства. Предоставить возможность всем участникам фонда самостоятельно распоряжаться своими средствами.',
  'home.projects.municipal-services.header': 'Прозрачный ЖЭК',
  'home.projects.municipal-services.description': 'Построение системы ЖЭК с полностью открытой бухгалтерской книгой.',
  'home.projects.bank.header': 'Общественный банк',
  'home.projects.bank.description': 'Создание полноценного банка с общественным управлением и невозможностью бесследно украсть средства.',

  // tslint:disable-next-line:max-line-length
  'home.projects.note': 'На данный момент идет работа над запуском проекта "Общественный жилищный кооператив". Все остальные проекты перечислены здесь только в виде концепций или идей. Некоторые проекты могут быть связаны. Например: общественный банк может стать банком для всех других проектов, пенсионный фонд может стать инвестором в жилищный кооператив.',

  'home.introduction.header': 'Введение',
  // tslint:disable-next-line:max-line-length
  'home.introduction.p1': 'В данном видео перечислены основные наши идеи. Видео было записано на момент зарождения проекта, так что не все будет реализовано точно слово в слово.',
  // tslint:disable-next-line:max-line-length
  'home.introduction.p2': 'Мир в эпоху цифровых технологий стремительно меняется. Новые технологии это то, что может сделать наш мир лучше.',
  // tslint:disable-next-line:max-line-length
  'home.introduction.p3': 'Несмотря на то, что многие вопросы еще только предстоит решить. Текущее развитие технологий уже позволяет решать огромное количество задач. В том числе и перейти на коллективное (общественное) управление.',
  // tslint:disable-next-line:max-line-length
  'home.introduction.p4': 'Одна из наших целей это общество, в котором идет прямое демократическое управление, а не опосредованная представительная демократия.',
  // tslint:disable-next-line:max-line-length
  'home.introduction.p5': 'Каждый из участников наших сообществ имеет право на свою точку зрения. Любые идеи могут быть высказаны, а лучшие идеи будут в последующем реализованы.',

  'home.investment.header': 'Инвестиции',
  // tslint:disable-next-line:max-line-length
  'home.investment.p1': 'Все описанные проекты не имеют целью получение большой финансовой прибыли, поэтому не можем предложить интересных условий для инвестирования.',
  // tslint:disable-next-line:max-line-length
  'home.investment.p2': 'Если вы филантроп или просто богатый человек, которого такая нелепость как инвестиции под минус 4% (два банковских перевода) не пугают, то вы можете воспользоваться формой обратной связи.',
  // tslint:disable-next-line:max-line-length
  'home.investment.p3': 'Даже если вы не очень богатый человек, но идеи вам понравились, то вы можете поддержать проект, перечислив любую незначительную для вас сумму денег. Обещаю, что данные деньги не будут бесцельно потрачены, а мы будем стараться сделать наш мир немного лучше.',

  '': '',
};

const MESSAGES_EN = {
  'title': 'Blockchain community',

  'note': 'Note',
  'details': 'Details',

  'under-construction': 'This feature is currently in work',
  'not-implemented-yet': 'This feature is not implemented yet',

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
  'translation.dialog.p1': 'Currently, the user interface is only supported in languages: <span class="flag-icon flag-icon-ru"></span> ru, <span class="flag-icon flag-icon-us"></span> en.',
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

  'contact-us.donate.header': 'Donate to the project',
  // tslint:disable-next-line:max-line-length
  'contact-us.donate.p1': 'At the moment, this project team is only one person. Unfortunately I am lacking any financial or media resources. I strongly believe that the implementation of the projects listed on this ite can bring make a big positive impact to society. Any help is welcome and your support is highly anticipated and appreciated. Below is a list of my bank cards or wallets.',

  'contact-us.donate.sberbank': 'Sberbank of Russia',
  'contact-us.donate.alphabank': 'Alfa-Bank of Russia',
  'contact-us.donate.web-money.wmr': 'WMR purse',
  'contact-us.donate.web-money.wmz': 'WMZ purse',
  'contact-us.donate.web-money.wmx': 'WMX purse',
  'contact-us.donate.web-money.wmh': 'WMH purse',
  'contact-us.donate.bitcoin': 'Bitcoin Wallet',
  'contact-us.donate.bitcoin-cash': 'BitcoinCash Wallet',

  'contact-us.donate.alert': 'At the moment no wallets are listed since the project has not even reached the stage of the pilot version.',

  'contact-us.feedback.header': 'Feedback',
  // tslint:disable-next-line:max-line-length
  'contact-us.feedback.p1': 'You can use this form to contact me. My resources including time are very limited, so I apologize in advance if I can’t answer you.',

  'contact-us.feedback.form.email': 'Your email',
  'contact-us.feedback.form.message': 'Message',

  'contact-us.feedback.form.validation-error.field-required': 'Required.',

  'contact-us.feedback.action-result.success': 'Your message was successfully sent.',
  'contact-us.feedback.action-result.fail': 'An error occurred while sending the message.',

  // tslint:disable-next-line:max-line-length
  'contact-us.feedback.alert': 'Email service is not enabled at the moment since it is paid so it is not connected yet. You can send an email to blockchain.ussr@gmail.com.',

  'project.bank.challenge.header': 'Challenge',
  // tslint:disable-next-line:max-line-length
  'project.bank.challenge.p1': 'Today banks operations are non-transparent. Occasionally bank became a bankrupt that is followed by problems for clients. Money transfer fees are usually high. Software capabilities (API) for account management are absent.',

  'project.bank.proposal.header': 'General reasoning',
  // tslint:disable-next-line:max-line-length
  'project.bank.proposal.p1': 'A public bank foundation will enable people to set the rules of the game by themselves. Certainly traditional banks will stay in place since full customer service is necessary and till the day a bigger number of blockchain communities a full-fledged bank will be required.',
  // tslint:disable-next-line:max-line-length
  'project.bank.proposal.p2': 'Standard bank operations should be available: account refill, withdrawal, interbank transfers. All these operations must be performed quickly, with no fees (or with a minimal fees), with an option to cancel the operation.',
  // tslint:disable-next-line:max-line-length
  'project.bank.proposal.p3': 'Blockchain banks could become fully open banks, or at least be much more transparent. Such banks can guarantee to clients that their funds will not be lost. They should become separate entities, not just an new division of any closed bank, transparency could not be achieved when only a small part of the operations will be revealed.',
  // tslint:disable-next-line:max-line-length
  'project.bank.proposal.p4': 'Bank secrecy act and transparency are conflicting and here is a big question: what information about the account activities should be available to everyone and what should be private and encrypted. However encryption does not guarantee that the data will not be eventually decoded.',
  // tslint:disable-next-line:max-line-length
  'project.bank.proposal.p5': 'A lot of questions should be answered prior to creation of such public banks. Initial "pilot" implementations could have a number of vulnerabilities and problems but first steps in this direction must be made. Best case scenario is to implement such public banks within the central banks because of this could reduce the back pressure of commercial banks and also serve as an incentive for others to integrate with it.',

  'project.municipal-services.challenge.header': 'Challenge',
  'project.municipal-services.challenge.p1': 'Housing services and management are ones of the hottest and hardest topics for our society.',

  'project.municipal-services.proposal.header': 'General reasoning',
  // tslint:disable-next-line:max-line-length
  'project.municipal-services.proposal.p1': 'Blockchain technology has a great potential to revolutionize those services. Management system with a fully open accounting and transparent voting system would bring a service quality to a new heights.',
  // tslint:disable-next-line:max-line-length
  'project.municipal-services.proposal.p2': 'As a starting point - create a platform aimed to collect interesting ideas and start a public discussions. Further implementation of the best ones should follow.',

  'project.pension-fund.challenge.header': 'Challenge',
  'project.pension-fund.challenge.p1': 'The Social Security Retirement Age Increases for Russian citizens in nearest future',

  'project.pension-fund.proposal.header': 'General reasoning',
  // tslint:disable-next-line:max-line-length
  'project.pension-fund.proposal.p1': 'There is a need for alternative ideas for pension reform. There is no magic bullet that will will resolve issues an will make everyone happy. But there is a proposal for those who want to manage their own lives: Let\'s unite and create our own pension fund and take over the management ourselves. And we will define the rules, according to which out fund will operate:',
  'project.pension-fund.proposal.p1.i1': 'everyone manages his own funds by himself',
  // tslint:disable-next-line:max-line-length
  'project.pension-fund.proposal.p1.i2': 'there are several investment options (for the most desperate - we can even include crypto-currency)',
  // tslint:disable-next-line:max-line-length
  'project.pension-fund.proposal.p1.i3': 'there is an opportunity to withdraw the savings (perhaps this is contrary to the law, but the laws vary ...)',
  'project.pension-fund.proposal.p1.i4': 'any other rule that we will come up with in future',
  'project.pension-fund.proposal.p1.i4.badge': 'New',
  // tslint:disable-next-line:max-line-length
  'project.pension-fund.proposal.p2': 'Unfortunately, such a fund also has its shortcomings. For example: due to the lack of staff customer service will be limited. Although in the modern days of digital technologies the service can be automated, we just have to work on it.',

  'project.ussr-2.0.challenge.header': 'Challenge',
  'project.ussr-2.0.challenge.p1': 'It is obvious that no investors “from the west” will ever come to make us happy.',

  'project.ussr-2.0.proposal.header': 'General thoughts',
  // tslint:disable-next-line:max-line-length
  'project.ussr-2.0.proposal.p1': 'Most of the socialist countries fell down by same scenario: public property privatization, tax cuts, the destruction of the social state.',
  // tslint:disable-next-line:max-line-length
  'project.ussr-2.0.proposal.p2': 'No one but ourselves will change our life to better. Everything that happens in our country is our own responsibility.',
  // tslint:disable-next-line:max-line-length
  'project.ussr-2.0.proposal.p3': 'A fair society, social security, worry free retirement - are goals we need to achieve. And today’s world technologies allow the community to take care of those problems.',
  // tslint:disable-next-line:max-line-length
  'project.ussr-2.0.proposal.p4': 'The project goal is to start an investment fund that would select and finance socially important projects.',

  'project.ussr-2.0.money.header': 'About the money',
  // tslint:disable-next-line:max-line-length
  'project.ussr-2.0.money.p1': 'All money is a matter of belief. Few centuries ago people believed that gold is an equivalent of value, today they believe that special ”paper" is such value equivalent. And in a past decade some people who believe that "nothing" (crypto-currencies) also have value began to appear.',
  // tslint:disable-next-line:max-line-length
  'project.ussr-2.0.money.p2': 'There are crypto-anarchists who think that crypto-currencies can become a non-government money and existence of crypto-currencies will allow society to take money issue and flow under public control. But if you want to win you have be smarter than your opponent. In modern society questions about what the money really is and how to take them under public control are not even discussed.',
  // tslint:disable-next-line:max-line-length
  'project.ussr-2.0.money.p3': 'Society does not need money itself, instead the real needs are goods and services created as a result of labor. In order for society to break free the very faith in money and its necessity should be destroyed. But bursting this bubble and getting an anarchy is not the goal, instead we need to blow off this bubble with no upheaval in society.',

  'project.ussr-2.0.goal.header': 'Purpose of the project',
  // tslint:disable-next-line:max-line-length
  'project.ussr-2.0.goal.p1': 'The ultimate goal of this project is to build a society of free people. A free man is one who is master of his own and no other man exploits him or his labor. It is crucial to create a national economy that would ensure that every person could be supplied with everything necessary for a worthy life.',
  // tslint:disable-next-line:max-line-length
  'project.ussr-2.0.goal.p2': 'A great capitalist country goal is to take the first place in the list of countries in terms of GDP. A great socialist country goal is to take the last place on this list (with a value of zero US dollars).',
  // tslint:disable-next-line:max-line-length
  'project.ussr-2.0.goal.p3': 'This does not mean that we have to ruin all the industry and stop to produce anything, on the contrary, we make production so effective that the cost of products became zero.',
  // tslint:disable-next-line:max-line-length
  'project.ussr-2.0.goal.p4': 'Based on the fact that all resources belong to the people, there are two small problems humanity has to deal with: artificial intelligence and free energy. After that it will became realistic to build production chains of any complexity at zero cost price.',
  // tslint:disable-next-line:max-line-length
  'project.ussr-2.0.goal.p5': 'Certainly, these "simple" tasks will not be solved in the nearest future. But why do not we start moving in this direction?',

  'project.gdp.china': '1. <span class="flag-icon flag-icon-cn"></span> China 23,159 billions $',
  'project.gdp.usa': '2. <span class="flag-icon flag-icon-us"></span> USA 19,391 billions $',
  'project.gdp.russia': '6. <span class="flag-icon flag-icon-ru"></span> Russia 4,008 billions $',

  'project.ussr-2.0.rules.header': 'Fund rules and principles',
  // tslint:disable-next-line:max-line-length
  'project.ussr-2.0.rules.p1': 'The fund is non profit the goal is implementation of interesting projects. Anyone can become a member of our foundation. Then we start looking for interesting ideas. Anyone can contribute an idea and get support from the participants of our fund in the form of financing. Ownership type of a business does not matter. Projects can even have negative profit margin from finance point of view.',
  'project.ussr-2.0.rules.p1.i1': 'Foundation of a federal construction company (charges at prime-cost level)',
  'project.ussr-2.0.rules.p1.i2': 'Foundation of the federal retail network (charges at prime-cost level)',
  'project.ussr-2.0.rules.p1.i3': 'Construction of a secure shopping complex (with a minimum fee for tenants)',
  'project.ussr-2.0.rules.p1.i4': 'Construction of a new bridge',
  'project.ussr-2.0.rules.p1.i5': 'Construction of a new cosmodrome',
  'project.ussr-2.0.rules.p1.i6': 'Erection of the monument to V Churkin',
  'project.ussr-2.0.rules.p1.i7': 'Conducting children\'s cycling competitions in',
  'project.ussr-2.0.rules.p1.i7.badge': 'Your City',

  'project.ussr-2.0.management.header': 'Management',
  // tslint:disable-next-line:max-line-length
  'project.ussr-2.0.management.p1': 'To implement projects we need managers. People make decisions having their own interests in mind. Fighting corruption is worthless, it is impossible to fight human nature.',
  // tslint:disable-next-line:max-line-length
  'project.ussr-2.0.management.p2': 'Soviet leadership was a good example of a top-ranked managers who did not think just about their own well-being but about something more, despite of how much negativity and criticism was about it. That type of leaders is what we need to find denote and support.',

  'project.housing-cooperative.challenge.header': 'Challenge',
  'project.housing-cooperative.challenge.p1': 'High mortgage annual percentage rate that can be raised at any time',

  'project.housing-cooperative.proposal.header': 'General thoughts',
  // tslint:disable-next-line:max-line-length
  'project.housing-cooperative.proposal.p1': 'An alternative mechanism for real estate acquisition is needed. The existence of such a public mechanism should serve as a motivation for commercial banks to reduce an effective APR to 1-2 %. This mechanism should be sustainable, and work for decades.',

  'project.housing-cooperative.goal.header': 'Project goal',
  // tslint:disable-next-line:max-line-length
  'project.housing-cooperative.goal.p1': 'Foundation of a cooperative for the real estate acquisition. This cooperative will be with open accounting: all internal operations and documentation will be publicly available. Operational principles will be as transparent as possible. The cooperative functions should be automated as much as possible. We might not be able to implement it 100 percent right away but this is a goal to achieve.',

  'project.housing-cooperative.rules.header': 'Cooperative operation principles',
  // tslint:disable-next-line:max-line-length
  'project.housing-cooperative.rules.p1': 'We open a cooperative account and on this account we will accumulate money for the purchase of housing.',
  // tslint:disable-next-line:max-line-length
  'project.housing-cooperative.rules.p2': 'Anyone can participate in the cooperative. The participant is determined with the real estate cost and the period for which he undertakes to pay off the debt. Further on, the participant contributes 1/3 of the cost to the cooperative account and joins the queue.',
  // tslint:disable-next-line:max-line-length
  'project.housing-cooperative.rules.p3': 'When you accumulate the required amount on the account, the acquires a real estate to the first participant in the queue. After that, the participant of the cooperative begins to repay its debts on a monthly basis.',
  // tslint:disable-next-line:max-line-length
  'project.housing-cooperative.rules.p4': 'Cooperative takes the ownership over the property. This stimulate the participant to repay his debt to the cooperative. The participant himself is an encumbrancer (a scheme reverse to a bank mortgage) and this prevents cooperative founders from selling acquired property and leave in an unknown direction.',
  // tslint:disable-next-line:max-line-length
  'project.housing-cooperative.rules.p5': 'When participant repays his debt to the cooperative he becomes a property legal owner and it ends participation in the cooperative.',
  // tslint:disable-next-line:max-line-length
  'project.housing-cooperative.rules.p6': 'Each participant makes monthly cooperative contributions of 1000 rubles. Co-op member starts to pay contribution fee since the moment he acquires a housing. Member stop paying fees when he repays a debt to the cooperative.',

  'project.housing-cooperative.overpayments.header': 'Loan cost',
  // tslint:disable-next-line:max-line-length
  'project.housing-cooperative.overpayments.i1': 'Bank transfer fee is 2 %. Perhaps we’ll find a way to transfer without fees, or to reduce it.',
  // tslint:disable-next-line:max-line-length
  'project.housing-cooperative.overpayments.i2': 'Documents fee - about 50 000 rubles. All document fees will be on you. An employee of the cooperative will have to come and settle the deal. In the beginning of our cooperative it might require a trip to another city, with the growth of our community, employees will appear in different cities. Also you can include in costs mandatory real estate insurance.',
  // tslint:disable-next-line:max-line-length
  'project.housing-cooperative.overpayments.i3': 'Membership fees are 1000 rubles per month. Total for 10 years, the total fee paid is 120,000 rubles. Those funds are intended for support and development of the cooperative operations.',

  'project.housing-cooperative.participants.header': 'Participant requirements',
  // tslint:disable-next-line:max-line-length
  'project.housing-cooperative.participants.i1': 'We do not need to know your legal name. But since all documents on the cooperative will be in the public domain, your name will be exposed during documentation.',
  // tslint:disable-next-line:max-line-length
  'project.housing-cooperative.participants.i2': 'We do not need personal income tax forms. We do not care where do you work and your role (banks might not give a mortgage to Sole Proprietors). But you must take a responsible approach to determining the value of the property you are purchasing. Your monthly payments should be reasonable for you.',
  // tslint:disable-next-line:max-line-length
  'project.housing-cooperative.participants.i3': 'We do not care about your citizenship to participate in the cooperative. But you have to be a citizen at the time when you pay off in order for take real estate ownership.',

  'project.housing-cooperative.withdraw-funds.header': 'Withdrawal from the cooperative',
  'project.housing-cooperative.withdraw-funds.p1': 'You can apply to full or partial funds withdraw from the cooperative at any time.',
  // tslint:disable-next-line:max-line-length
  'project.housing-cooperative.withdraw-funds.p2': 'Withdraw application is also a queue but the difference is they have a higher priority. When cooperative account accumulates necessary amount this application will be processed in the order of the queue.',
  // tslint:disable-next-line:max-line-length
  'project.housing-cooperative.withdraw-funds.p3': 'If the property has not yet been purchased, then your losses will be 4 % (two bank transfers).',
  // tslint:disable-next-line:max-line-length
  'project.housing-cooperative.withdraw-funds.p4': 'If the property had already been acquired, then it will sold at market price, this amount repays the debt to the cooperative, and the rest is returned to the former participant. In this case a participant can earn or lose depending on the housing market situation.',

  'project.housing-cooperative.defaulter.header': 'Non payers',
  // tslint:disable-next-line:max-line-length
  'project.housing-cooperative.defaulter.p1': 'We’re trying to create a transparent and beneficial scheme for everyone. Honest participation in our scheme is advantageous and overpayment is quite small when compared to others.',
  // tslint:disable-next-line:max-line-length
  'project.housing-cooperative.defaulter.p2': 'If a participant agrees to a peaceful default adjustment then the property is sold at market value, this debt is repaid to the cooperative, and the rest is returned to the former participant. In this case a participant can both earn or lose depending on the housing market situation.',
  // tslint:disable-next-line:max-line-length
  'project.housing-cooperative.defaulter.p3': 'If a participant does not agree to a peaceful default adjustment then the proceeding goes through the court. Despite the fact that it is long and painful, we have no other way out.',

  'project.housing-cooperative.about-us.header': 'We are a pyramid',
  // tslint:disable-next-line:max-line-length
  'project.housing-cooperative.about-us.p1': 'Pyramid principle lies behind our cooperative\'s business. Housing is acquired because of new members are coming in. We proceed from the fact that the pyramid is not always bad it all depends on the founders will and how honest their intentions are. The main thing is that the pyramid is stable.',
  // tslint:disable-next-line:max-line-length
  'project.housing-cooperative.about-us.p2': 'Main assets of our cooperative are acquired real estate and funds on the cooperative account. If we sell all the property we own we will get the amount (except for the transfer fees) funded by our members. In this case, we can spread out and everyone will get their own. Only thing we’ll not be able to refund is membership fee since those funds already spent on the cooperative operation and development.',
  // tslint:disable-next-line:max-line-length
  'project.housing-cooperative.about-us.p3': 'Guarantees that we can offer you: our accounting book will be fully open - blockchain technology used for it. We will accept card transfers from Visa / MasterCard which allow you to issue a chargeback procedure in case you consider the work of our cooperative as fraud.',
  // tslint:disable-next-line:max-line-length
  'project.housing-cooperative.about-us.p4': 'At this moment our project does not have an investor and it is unlikely that it will come in. Investments for zero or negative percent are not attractive. Another projects, such as: "Public Pension Fund", "Community of Soviet People" could become investors in our cooperative. But for now the money we have will only be the money of our participants.',
  // tslint:disable-next-line:max-line-length
  'project.housing-cooperative.about-us.p5': 'This project in nature is a queue, and you have to wait for the moment of your turn. Everything will depend on the number of participants in our community.',

  'home.jumbotron.header': 'Blockchain Community - digital revolution',
  // tslint:disable-next-line:max-line-length
  'home.jumbotron.p1': 'A new world order under the control of society. In the name of all who live today and those who will .. and those who are no longer with us ...',

  'home.motivation.header': 'Motivation',
  'home.motivation.p1': 'Building a fair society, stop exploitation of man by man (hidden or explicit).',

  'home.principles.header': 'Principles',
  // tslint:disable-next-line:max-line-length
  'home.principles.p1': 'We proceed from the fact that honest people have nothing to hide. The technologies we are going to use allow us to create the most open and transparent systems that will make data available to any participant.',
  'home.principles.p2': 'We are not going to violate any law of any country.',

  'home.goal.header': 'Our goal',
  'home.goal.p1': 'To create a public tools that help to solve urgent social problems and remove unnecessary intermediaries.',
  // tslint:disable-next-line:max-line-length
  'home.goal.p2': 'We propose to the society to take over the management, as we believe that public administration can work much more efficiently than the state one.',
  'home.goal.p3': 'The \'mediators\' include: the state and financial institutions (such as banks). Fighting them is not our goal.',

  'home.technologies.header': 'Technology',
  'home.technologies.blockchain.term': 'Distributed Ledger, Blockchain',
  'home.technologies.blockchain.definition': '- an open ledger available to all users. Data can not be changed or forged.',
  'home.technologies.smart-contracts.term': 'Smart Contracts',
  // tslint:disable-next-line:max-line-length
  'home.technologies.smart-contracts.definition': '- A program that runs under certain conditions within blockchain. In other words, these are the "digital laws" the blockchain community lives by.',
  'home.technologies.cloud-technologies.term': 'Cloud Technologies',
  // tslint:disable-next-line:max-line-length
  'home.technologies.cloud-technologies.definition': '- it is a convenient environment for information storage and processing, combining hardware software, communication channels and technical support.',
  'home.technologies.decentralized-applications.term': 'Decentralized Applications',
  // tslint:disable-next-line:max-line-length
  'home.technologies.decentralized-applications.definition': '- Applications that do not have a central point of failure. In the event of failure or outage of any node, the application must continue to function properly, and all its data must remain available.',
  'home.technologies.open-source.term': 'Open Source',
  // tslint:disable-next-line:max-line-length
  'home.technologies.open-source.definition': '- The source code will be open. Open source development offers the potential faster error detection and correction and it can also be an example implementation for other blockchain communities.',

  // tslint:disable-next-line:max-line-length
  'home.technologies.note': 'Cloud technologies and decentralized applications could conflict with each other. The technology choice will depend on the objectives of the specific project.',

  'home.management.header': 'Management',
  // tslint:disable-next-line:max-line-length
  'home.management.p1': 'Management will be performed with voting mechanism. Any community member can offer his ideas. In case if other participants vote for the idea, the corresponding changes can be implemented in a form of a new smart contract or modification of an already existing one.',

  'home.projects.header': 'Projects',
  'home.projects.housing-cooperative.header': 'Public housing cooperative (mortgage 0 %)',
  // tslint:disable-next-line:max-line-length
  'home.projects.housing-cooperative.description': 'Making an alternative to a bank mortgage. This public mechanism should allow the acquisition of real estate and get rid of high bank interest rates.',
  'home.projects.ussr-2.0.header': 'Community of Soviet people',
  // tslint:disable-next-line:max-line-length
  'home.projects.ussr-2.0.description': 'Creating a public fund to implement projects making social impact. For example: founding a nonprofit companies producing quality goods and services, working for the benefit of the society.',
  'home.projects.pension-fund.header': 'Public Pension Fund',
  // tslint:disable-next-line:max-line-length
  'home.projects.pension-fund.description': 'A transparent pension fund with public management. Fraud prevention possible thanks to blockchain immutable and distributed nature that does not allow to make transactions without a trace. Every participant is allowed to dispose its own funds independently.',
  'home.projects.municipal-services.header': 'Transparent Housing Office',
  'home.projects.municipal-services.description': 'Construction of a housing and utilities system with an open ledger.',
  'home.projects.bank.header': 'Public Banking',
  'home.projects.bank.description': 'A bank with public management and inability to steal funds without a trace.',

  // tslint:disable-next-line:max-line-length
  'home.projects.note': 'At the moment we are working on launch “Public Housing Cooperative". All other projects listed are in conceptual phase or in a form of idea. Some projects may be related, for example a public bank can be a bank for other projects, a pension fund can invest in a housing cooperative.',

  'home.introduction.header': 'Introduction',
  // tslint:disable-next-line:max-line-length
  'home.introduction.p1': 'Our main ideas are listed in the following video. The record was made at the time the project was started, so an actual implementation may vary.',
  'home.introduction.p2': 'In the digital era our world changes rapidly. Digital technologies can make the world a better place.',
  // tslint:disable-next-line:max-line-length
  'home.introduction.p3': 'Despite the fact that many issues have yet to be resolved, the current technology level already allows us to solve a big number of problems including switch to collective (public) management.',
  // tslint:disable-next-line:max-line-length
  'home.introduction.p4': 'One of our main goals is to build a society with direct democratic governance instead of representative democracy.',
  // tslint:disable-next-line:max-line-length
  'home.introduction.p5': 'Every community member has right to their opinion in our community. Any ideas can be expressed, a best ones will be implemented.',

  'home.investment.header': 'Investments',
  'home.investment.p1': 'All the described projects are not targeted to make a profit, so we can not offer attractive investment options.',
  // tslint:disable-next-line:max-line-length
  'home.investment.p2': 'If you are a philanthropist or just a rich man, such a ridiculousness as an investment under minus 4 % (fee for a two bank transfers) is not scary, then you can use the feedback form.',
  // tslint:disable-next-line:max-line-length
  'home.investment.p3': 'Even if you are not a rich person but you like the idea - you can support the project by donating any reasonable amount of money. I promise that those funds will not be spent aimlessly, instead we’ll try to make our world a little better.',

  '': '',
};
