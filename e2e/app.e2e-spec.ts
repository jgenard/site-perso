import { SitePersoPage } from './app.po';

describe('site-perso App', () => {
  let page: SitePersoPage;

  beforeEach(() => {
    page = new SitePersoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
