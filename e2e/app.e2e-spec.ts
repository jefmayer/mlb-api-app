import { MlbApiAppPage } from './app.po';

describe('mlb-api-app App', () => {
  let page: MlbApiAppPage;

  beforeEach(() => {
    page = new MlbApiAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
