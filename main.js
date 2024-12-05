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
    <ul id="listing"></ul>
  </div>
`;
buildListing(document.querySelector('#listing')); //starting point!