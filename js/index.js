'use strict';

const documentReady = () => {
  const heroTitle = document.querySelector('.hero__title');
  const heroButtonSi = document.getElementById('heroButtonSi');
  const heroButtonNo = document.querySelector('#heroButtonNo');

  const nowZomosNobios = () => {
    alert('Suscrito hasta: ∞/∞/∞');
    alert('💞 Now somos novios 💞');
    alert('bueno, en verdad para mi ya lo eramos desde que nos conocimos solo que tu no sabias, tqm<3')
    location.href = 'https://www.youtube.com/watch?v=yKNxeF4KMsY';
  };

  const evitarKCRompanMyBobo = () => {
    heroButtonNo.style.position = 'absolute';
    heroButtonNo.style.top = (Math.random() * window.innerHeight) + 'px';
    heroButtonNo.style.left = (Math.random() * window.innerWidth) + 'px';
  };

  const partner = prompt('🥰 Cual es tu name? 🥰');
  heroTitle.innerHTML += partner +'?' + ' ❤';

  heroButtonSi.addEventListener('click', nowZomosNobios);
  heroButtonNo.addEventListener('mouseover', evitarKCRompanMyBobo);
};

document.addEventListener('DOMContentLoaded', documentReady);