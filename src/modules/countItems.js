const countItems = () => {
  setTimeout(() => {
    const container = document.getElementsByClassName('item').length;
    const showSpan = document.querySelector('.showSpan');
    showSpan.innerHTML = container;
  }, 1000);
};

export default countItems;
