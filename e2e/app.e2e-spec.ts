import { ImageGaleryPage } from './app.po';

describe('image-galery App', function() {
  let page: ImageGaleryPage;

  beforeEach(() => {
    page = new ImageGaleryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
