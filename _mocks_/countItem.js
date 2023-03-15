const countLikes = () => {
  setTimeout(() => {
    let container = document.getElementsByClassName('.item').length;
    let showSpan = document.getElementById('showSpans');
    showSpan.innerHTML = container;
  }, 2000);
};
