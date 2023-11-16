const txtElement = ['Mei Rosa Widyawati'];
let count = 0;
let txtIndex = '';
let currentTxt;
let words = '';

(function mengetik() {
  if (count == txtElement.length) {
    count = 0;
  }
  currentTxt = txtElement[count];
  words = currentTxt.slice(0, ++txtIndex);
  document.querySelector('.efek-ngetik').textContent = words;
  setTimeout(mengetik, 500);
})();
