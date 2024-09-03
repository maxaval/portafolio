const imagen = document.querySelector('.efecto-imagen');
const mask = document.querySelector('.mask');

imagen.addEventListener('mousemove', (e) => {
  const rect = imagen.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const grayscaleAmount = x / rect.width;
  imagen.style.filter = `grayscale(${grayscaleAmount})`;
});

imagen.addEventListener('mouseout', () => {
  imagen.style.filter = 'grayscale(0)';
});