import { Component, OnInit } from '@angular/core';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private i18nService: I18nService) { }

  lang: string;
  flag: string;

  ngOnInit(): void {
    this.useLang(this.i18nService.lang);
  }

  useLang(lang: string) {
    this.lang = lang;
    if (lang === 'en') {
      this.flag = 'us';
    } else {
      this.flag = lang;
    }

    this.i18nService.use(lang);
  }

}
