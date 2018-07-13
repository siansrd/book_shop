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

  const aboutText = 'Siân Robinson Davies is a writer, performer and teacher living in Edinburgh, Scotland.';
  const about = createParagraph(aboutText);
  info.appendChild(about);

  const emailText = 'sianrobinsondavies@gmail.com'
  const email = createParagraph(emailText);
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

const createParagraph = (content) => {
  const paragraph = document.createElement('p');
  paragraph.textContent = content;
  return paragraph;
}

const clearPopUp = (info) => {
  info.innerHTML = '';
  info.classList.remove('pop-up');
}
