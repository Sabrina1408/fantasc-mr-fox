function handleMouseEnter () {
  this.classList.add('s-card--hovered'); /* this é o próprio elemento */
  document.body.id = `${this.id}-hovered`; /* Add um id com o nome blau pra mudar o back do body pelo id no css */
}

function handleMouseLeave() {
  this.classList.remove('s-card--hovered');
  document.body.id = ``;
}

function addEventListenersToCards() {
  const cardElements = document.getElementsByClassName('s-card');

  for (let index = 0; index < cardElements.length; index++) { /* Loop */
    const card = cardElements[index]; /* Pega o selecionado */
    card.addEventListener("mouseenter", handleMouseEnter) /* hover entrar*/
    card.addEventListener("mouseleave", handleMouseLeave) /* hover sair*/
  }
}

document.addEventListener("DOMContentLoaded", addEventListenersToCards, false); /* Pra carregar o script depois */

/* No html já tem a tag onclick */
function selectCarouselItem(selectedButtonElement) {
  const selectedItem = selectedButtonElement.id; /* Pega o id do elemento clickado */
  const carousel = document.querySelector('.s-cards-carousel');
  const transform = carousel.style.transform;
  const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i); /* match - pesquisar dentro algo que seja correspondente */ /* Expressões regulares */
  const rotateYDeg = -90 * (Number(selectedItem) - 1); /* 360/3 */ /* -1 - pq o id do primeiro é 1 e a conta daria errado */
  const newTransform = transform.replace(rotateY[0], `rotateY(${rotateYDeg}deg)`);

  carousel.style.transform = newTransform;
  console.log(newTransform);

  const activeButtonElement = document.querySelector('.s-controller__button--active');
  activeButtonElement.classList.remove('s-controller__button--active');
  selectedButtonElement.classList.add('s-controller__button--active');
}