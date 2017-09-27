import { browser, by, element } from 'protractor';

export class RolandGarrosPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-header')).getCssValue('color');
  }
}
