import { RequestsHttpPage } from './app.po';

describe('requests-http App', () => {
  let page: RequestsHttpPage;

  beforeEach(() => {
    page = new RequestsHttpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
