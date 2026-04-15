const addNumbers = (first, second) => {
  return first + second;
}

if (typeof module !== 'undefined') {
  module.exports = {
    addNumbers
  }
}

document.querySelector('#button').addEventListener('click', () => {
  document.querySelector('#output').textContent = 'world';
});