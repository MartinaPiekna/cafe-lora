import './style.css';
import { Layer } from '../Layer';

// komponenta pro layer
export const Drink = (props) => {
  const productElm = document.createElement('div');
  productElm.setAttribute('class', 'drink');
  productElm.innerHTML = `
  <div class="drink__product">
    <div class="drink__cup">
      <img src="../assets/cups/${props.id}.png" />
    </div>
    <div class="drink__info">
      <h3>${props.name}</h3>
    </div>
    <div class="drink__controls">
      <button class="order-btn">Objednat</button>
    </div>
  </div>`;

  // zachytit elementy pro objednávku
  const orderButton = productElm.querySelector('.order-btn');
  const drinkCup = productElm.querySelector('.drink__cup');

  // na kliknutí vybrat kafe nebo zrušit objednávku
  orderButton.addEventListener('click', () => {
    if (props.ordered) {
      orderButton.innerHTML = 'Zrušit';
      props.ordered = false;
    } else {
      orderButton.innerHTML = 'Objednat';
      props.ordered = true;
    }
    drinkCup.classList.toggle('drink__cup--selected');
  });

  // zachytit element, kam vložím komponentu Layer
  const productInfo = productElm.querySelector('.drink__info');
  productInfo.appendChild(Layer(props.layers));

  return productElm;
};
