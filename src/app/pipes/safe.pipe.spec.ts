import { SafePipe } from './safe.pipe';
import { DomSanitizerImpl } from '@angular/platform-browser/src/security/dom_sanitization_service';

describe('SafePipe', () => {
  it('create an instance', () => {
    const pipe = new SafePipe(new DomSanitizerImpl(null));
    expect(pipe).toBeTruthy();
  });
});
