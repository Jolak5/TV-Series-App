const countItems = () => {
  setTimeout(() => {
    const container = document.getElementsByClassName('item').length;
    const showSpan = document.querySelector('.showSpan');
    showSpan.innerHTML = container;
  }, 2000);
};

export default countItems;
