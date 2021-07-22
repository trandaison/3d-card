const card = document.querySelector('.card');
const container = document.querySelector('.container');
const avatar = document.querySelector('.avatar img');
const name = document.querySelector('.name');
const description = document.querySelector('.description');
const skills = document.querySelector('.skills');
const hire = document.querySelector('.hire');

container.addEventListener('mousemove', (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;

  card.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
});

container.addEventListener('mouseenter', (e) => {
  card.style.transition = 'none';
  avatar.style.transform = 'translateZ(150px)';
  name.style.transform = 'translateZ(120px)';
  description.style.transform = 'translateZ(100px)';
  skills.style.transform = 'translateZ(120px)';
  hire.style.transform = 'translateZ(100px)';
});

container.addEventListener('mouseleave', (e) => {
  card.style.transition = 'all 0.5s ease';
  card.style.transform = 'rotateX(0deg) rotateY(0deg)';
  avatar.style.transform = 'translateZ(0)';
  name.style.transform = 'translateZ(0)';
  description.style.transform = 'translateZ(0)';
  skills.style.transform = 'translateZ(0)';
  hire.style.transform = 'translateZ(0)';
});
