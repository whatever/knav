import {SquareGrid} from './square-grid.js';
import {renderFruit} from './fruit.js';


/**
 * Return a rate-limited function
 */
export function throttle(ms, f) {
  let captured = false;

  function del() {
    captured = false;
  }

  return function () {
    if (!captured) {
      captured = true;
      f.apply(this, arguments);

      // Apply again at the end
      setTimeout(function () {
        captured = false;
        f.apply(this, arguments);
      }, ms);
    }
  };
}

let topEl = {};
let botEl = {}
let fruitEl = {};

/**
 * Initiate ...
 */
export function afterLoad(ev) {
  topEl = document.getElementById("knav");
  botEl = document.getElementById("knav-bottom");
  fruitEl = document.getElementById("fruits");

  let floatingClass = "knav-floating";
  let stickingClass = "knav-sticking";

  window.addEventListener('scroll', scroll);

  renderFruit(fruitEl, {});
}


/**
 * Set KNAV to floating on bottom mode
 */
function setFloating() {
  console.log("[Floating]");
}


/**
 * Set KNAV to sticking to bottom mode
 */
function setSticking() {
  console.log("[Sticking]");
}


/**
 * Set state of nav
 */
let scroll = throttle(333, function (ev) {
  if (pageYOffset > topEl.offsetHeight) {
    setFloating();
  } else {
    setSticking();
  }
});

export {scroll};
