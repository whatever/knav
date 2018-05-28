import {SquareGrid} from './square-grid.js';
import {renderFruit} from './fruit.js';
import {getOffset, getViewport} from './hacks.js';


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

var topEl = {};
var botEl = {}
var fruitEl = {};

/**
 * Initiate ...
 */
export function afterLoad(ev) {
  knav.render(params.x, params.y, params.xspacing, params.yspacing);
}

export function render(x, y, w, h) {
  topEl = document.getElementById("knav");
  botEl = document.getElementById("knav-bottom");
  fruitEl = document.getElementById("fruits");

  let floatingClass = "knav-floating";
  let stickingClass = "knav-sticking";

  window.addEventListener('scroll', scroll);

  renderFruit(fruitEl, x, y, w, h);
}

/**
 * Set KNAV to floating on bottom mode
 */
function setFloating() {
  let botEl = document.getElementById("knav-bottom");
  botEl.className = "floating";
  console.log("[Floating]");
}

/**
 * Set KNAV to sticking to bottom mode
 */
function setSticking() {
  let botEl = document.getElementById("knav-bottom");
  botEl.className = "sticking";
  console.log("[Sticking]");
}


/**
 * Set state of nav
 */
let scroll = throttle(0, function (ev) {
  let bot = getOffset(document.getElementById("complete-bottom"));
  let vp = getViewport();
  console.log(bot, vp);
  if (pageYOffset > topEl.offsetHeight && pageYOffset < bot.top - vp[1]) {
    setFloating();
  } else {
    setSticking();
  }
});

export {scroll};
