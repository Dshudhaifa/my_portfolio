const dashboardShots = {
  '07': ['coffee-sales-dashboard.png','Coffee sales Power BI dashboard screenshot'],
  '08': ['airbnb-austin-dashboard.png','Austin Airbnb Power BI dashboard screenshot'],
  '09': ['hospital-er-dashboard.png','Hospital emergency room Power BI dashboard screenshot'],
  '10': ['phone-sales-dashboard.png','Phone sales Power BI dashboard screenshot'],
  '11': ['store-sales-dashboard.png','Store sales Power BI dashboard screenshot'],
  '12': ['mulham-real-estate-dashboard.png','Mulham real estate Power BI dashboard screenshot'],
  '13': ['media-performance-dashboard.png','Media performance Power BI dashboard screenshot']
};
document.querySelectorAll('#english-projects .project-card').forEach((card, index) => {
  const shot = dashboardShots[projects[index][0]];
  if (!shot) return;
  const [filename, alt] = shot;
  card.querySelector('.project-art').outerHTML = `<a class="project-shot" href="assets/${filename}" target="_blank" rel="noopener" aria-label="Open full-size ${esc(alt)}"><img src="assets/${filename}" alt="${esc(alt)}" loading="lazy" decoding="async"><span class="shot-open">View full image ↗</span></a>`;
});
document.querySelector('.project-note').textContent = 'Figures come from my CV and Power BI project files. Power BI images are actual dashboard screenshots; the other visuals are illustrative.';
