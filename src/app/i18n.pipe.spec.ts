import { I18nPipe } from './i18n.pipe';
import { I18nService } from './services/i18n.service';

describe('I18nPipe', () => {
  it('create an instance', () => {
    const pipe = new I18nPipe(new I18nService());
    expect(pipe).toBeTruthy();
  });
});
