import './style.css';
import starWarsLogo from '/logo.png';
import { buildListing } from './listing.js';

document.querySelector('#app').innerHTML = `
  <div class="bg"></div>
  <div class="main">
    <div class="title-container">
      <a href="https://www.starwars.com" target="_blank">
        <img src="${starWarsLogo}" class="logo" alt="Star Wars logo" />
      </a>
      <h2 class="title">TOP TRUMPS</h2>
    </div>
    <div class="opponent-container">
    </div>
    <ul id="listing"></ul>
  </div>
`;
buildListing(document.querySelector('#listing')); //starting point!


// Fix the opponentCard function
function opponentCard () {
  return `
    <div class="card opponent-card">
      <div class="opponent-card__back">
        <img src="/public/question-mark.svg" class="opponent-question-mark" alt="Question mark" />
        <p class="opponent-message">Opponent has selected a card</p>
      </div>
    </div>
  `;
}

// Add this after buildListing
const opponentContainer = document.querySelector('.opponent-container');
opponentContainer.innerHTML = opponentCard();
