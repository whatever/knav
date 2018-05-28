console.log("x_x");


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

export function afterLoad(ev) {
  topEl = document.getElementById("knav");
  botEl = document.getElementById('knav-bottom');

  let floatingClass = "knav-floating";
  let stickingClass = "knav-sticking";


  window.addEventListener('scroll', scroll);
  console.log(topEl.offsetHeight);
}


/**
 *
 */
function setFloating() {
  console.log("[Floating]");
}


/**
 *
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
