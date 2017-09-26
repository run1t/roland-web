import { RolandGarrosPage } from './app.po';

describe('roland-garros App', () => {
  let page: RolandGarrosPage;

  beforeEach(() => {
    page = new RolandGarrosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
