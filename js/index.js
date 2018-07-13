document.addEventListener('DOMContentLoaded', () => {
  const infoButton = document.querySelector('button#info');
  infoButton.addEventListener('click', () => {
    const info = document.querySelector('section#info');

    if (!info.classList.contains('pop-up')) {
      info.innerHTML = '';
      info.classList.add('pop-up');

      const closeButton = document.createElement('button');
      closeButton.textContent = 'X';
      closeButton.id = 'close';
      closeButton.addEventListener('click', () => {
        info.innerHTML = '';
        info.classList.remove('pop-up');
      });
      info.appendChild(closeButton);

      const infoText = document.createElement('p');
      infoText.textContent = 'Siân Robinson Davies is a writer, performer and teacher living in Edinburgh, Scotland.';
      info.appendChild(infoText);
      const email = document.createElement('p');
      email.textContent = 'sianrobinsondavies@gmail.com';
      info.appendChild(email);
    } else {
      info.innerHTML = '';
      info.classList.remove('pop-up');
    }
  });
});
