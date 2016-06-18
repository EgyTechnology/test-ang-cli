import { TestAngCliPage } from './app.po';

describe('test-ang-cli App', function() {
  let page: TestAngCliPage;

  beforeEach(() => {
    page = new TestAngCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
