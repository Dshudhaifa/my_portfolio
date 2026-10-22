const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.project-card');
filters.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.dataset.filter;
    filters.forEach(item => {
      const selected = item === button;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    cards.forEach(card => {
      card.hidden = category !== 'all' && !card.dataset.category.split(' ').includes(category);
    });
  });
});
document.getElementById('year').textContent = new Date().getFullYear();
