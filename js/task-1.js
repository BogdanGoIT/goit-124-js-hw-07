const categories = document.querySelectorAll('#categories .item');

console.log('Number of categories:', categories.length);

categories.forEach(category => {
  const categ = category.querySelector('h2').textContent;
  console.log('Category:', categ);
  const elem = category.querySelectorAll('li').length;
  console.log('Element:', elem);
});
