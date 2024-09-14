/*const banner = document.querySelector('.banner');
const textSections = document.querySelectorAll('.text-section');

banner.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const width = banner.offsetWidth;
  const percentage = (x / width) * 100;

  banner.style.filter = 'grayscale(${100 - percentage}%)';
  textSections.forEach((textSection, index) => {
    if (index === 0) {
      textSection.style.opacity = 1 - (percentage / 100);
    } else {
      textSection.style.opacity = percentage / 100;
    }
  });
});*/
