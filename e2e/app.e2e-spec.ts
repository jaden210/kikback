import { KikbackPage } from './app.po';

describe('kikback App', () => {
  let page: KikbackPage;

  beforeEach(() => {
    page = new KikbackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
