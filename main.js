window.onload = () => {
  // let more = false;
  const pre = document.querySelector('.pre-wrapper pre');
  const showMore = document.querySelector('.pre-wrapper .show-more');
  showMore.addEventListener('click', () => {
    // if (!more) {
    pre.className = '';
    showMore.style.display = 'none';
    // showMore.textContent = 'Read Less';
    // more = !more;
    // } else {
    //   pre.className = 'trim fade';
    //   showMore.textContent = 'Read more..';
    //   more = !more;
    // }
  });
};
