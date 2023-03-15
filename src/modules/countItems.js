const countItems = () => {
  setTimeout(() => {
    let container = document.getElementsByClassName('item').length;
    let showSpan = document.querySelector('.showSpan');
    showSpan.innerHTML = container;
  }, 1000);
};

export { countItems };
