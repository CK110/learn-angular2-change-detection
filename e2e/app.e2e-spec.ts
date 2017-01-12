import { LearnAngular2ChangeDetectionPage } from './app.po';

describe('learn-angular2-change-detection App', function() {
  let page: LearnAngular2ChangeDetectionPage;

  beforeEach(() => {
    page = new LearnAngular2ChangeDetectionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
