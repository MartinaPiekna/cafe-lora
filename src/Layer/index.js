import './style.css';

// komponenta pro layer
export const Layer = (props) => {
  const layerElm = document.createElement('div');
  for (let i = 0; i < props.length; i++) {
    layerElm.setAttribute('class', 'layer');
    layerElm.innerHTML += `<div class="layer__color" style="background-color: ${props[i].color}"></div><div class="layer__label">${props[i].label}</div>`;
  }
  return layerElm;
};
