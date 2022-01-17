import _ from 'lodash';
import './style.css';

function component() {
    const element = document.createElement('div');
  
    // Lodash, now imported by this script
    element.innerHTML = _.join(['I', 'am', 'Vahan.', 'Lets be friends.'], ' ');
    element.classList.add('hello');
  
    return element;
  }
  
  document.body.appendChild(component());