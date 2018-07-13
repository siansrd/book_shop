document.addEventListener('DOMContentLoaded', () => {
  const infoButton = document.querySelector('button#info');
  infoButton.addEventListener('click', () => {
    const info = document.querySelector('section#info');
    !info.classList.contains('pop-up') ? createPopUp(info) : clearPopUp(info);
  });
});

const createPopUp = (info) => {
  info.innerHTML = '';
  info.classList.add('pop-up');

  const closeButton = createCloseButton();
  info.appendChild(closeButton);

  const infoText = document.createElement('p');
  infoText.textContent = 'Siân Robinson Davies is a writer, performer and teacher living in Edinburgh, Scotland.';
  info.appendChild(infoText);
  const email = document.createElement('p');
  email.textContent = 'sianrobinsondavies@gmail.com';
  info.appendChild(email);
}

const createCloseButton = () => {
  const closeButton = document.createElement('button');
  closeButton.textContent = 'X';
  closeButton.id = 'close';
  closeButton.addEventListener('click', () => {
    info.innerHTML = '';
    info.classList.remove('pop-up');
  });
  return closeButton;
}

const clearPopUp = (info) => {
  info.innerHTML = '';
  info.classList.remove('pop-up');
}
