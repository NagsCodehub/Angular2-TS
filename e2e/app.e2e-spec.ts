import { Angular2TSPage } from './app.po';

describe('angular2-ts App', () => {
  let page: Angular2TSPage;

  beforeEach(() => {
    page = new Angular2TSPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
