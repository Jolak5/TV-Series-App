const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const dom = new JSDOM(
  '<section class="whole-item"><p class="kayode">Hello i am lanzz</p><p class="kayode">Hello i am lanzz</p></section> <span class="showSpan"></span>'
);
const { document } = dom.window;
let item = document.getElementsByClassName('kayode').length;
const showSpan = document.querySelector('.showSpan');

describe('countLikes to be a number', () => {
  test('should be defined', () => {
    showSpan.innerHTML = item;
    expect(showSpan).toBeDefined();
  });

  test('should be defined', () => {
    expect(item).toEqual(2);
  });
});
