document.addEventListener('DOMContentLoaded', () => {
  const infoButton = document.querySelector('button#info');
  infoButton.addEventListener('click', () => {
    const infoSection = document.querySelector('section#info');
    !infoSection.classList.contains('pop-up') ? createPopUp(infoSection) : clearPopUp(infoSection);
  });
});

const createPopUp = (infoSection) => {
  infoSection.innerHTML = '';
  infoSection.classList.add('pop-up');

  const closeButton = createCloseButton(infoSection);
  infoSection.appendChild(closeButton);

  const aboutText = 'Siân Robinson Davies is a writer, performer and teacher living in Edinburgh, Scotland.';
  const about = createParagraph(aboutText);
  infoSection.appendChild(about);

  const emailText = 'sianrobinsondavies@gmail.com'
  const email = createParagraph(emailText);
  infoSection.appendChild(email);
}

const createCloseButton = (infoSection) => {
  const closeButton = document.createElement('button');
  closeButton.textContent = 'X';
  closeButton.id = 'close';
  closeButton.addEventListener('click', () => {
    clearPopUp(infoSection);
  });
  return closeButton;
}

const createParagraph = (content) => {
  const paragraph = document.createElement('p');
  paragraph.textContent = content;
  return paragraph;
}

const clearPopUp = (infoSection) => {
  infoSection.innerHTML = '';
  infoSection.classList.remove('pop-up');
}
