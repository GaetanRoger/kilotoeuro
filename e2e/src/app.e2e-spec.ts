import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display title Kilo to Euro', () => {
    page.navigateTo();
    expect(page.getTitle()).toEqual('Kilo to Euro');
  });
});
