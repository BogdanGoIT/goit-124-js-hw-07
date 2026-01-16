const categories = document.querySelectorAll('#categories .item');

console.log('Number of categories:', categories.length);

categories.forEach(category => {
  const categ = category.children[0].textContent;
  console.log('Category:', categ);
  const elem = category.children[1].children.length;
  console.log('Element:', elem);
});
