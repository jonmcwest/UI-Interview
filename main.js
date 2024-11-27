import './style.css'
import starWarsLogo from '/logo.png'
import { buildListing } from './listing.js'

document.querySelector('#app').innerHTML = `
  <div class="bg"></div>
  <div class="main">
    <a href="https://www.starwars.com" target="_blank">
      <img src="${starWarsLogo}" class="logo" alt="Star Wars logo" />
    </a>
    <ul id="listing"></ul>
  </div>
`
buildListing(document.querySelector('#listing')) //starting point!