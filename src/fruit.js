import {SquareGrid} from './square-grid.js';


const CHERRIES_SOURCE = "/cherry.png";
let CHERRIES_IMAGE = new Image();
CHERRIES_IMAGE.src = CHERRIES_SOURCE;

/**
 * Render
 */
export function renderFruit(el, x, y, dx, dy) {
  let ctx = el.getContext("2d");
  ctx.clearRect(0, 0, el.width, el.height);

  console.log(x, y, dx, dy);

  console.log("[fruits] [w, h] =", [el.width, el.height]);

  let w = (el.width / x);
  let h = (el.height / y);

  let grid = new SquareGrid({width: w, height: h});

  // ctx.transform(1, 0, 0, -1, 0, el.height);
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";


  for (let i=0; i < x; i++) {
    for (let j=0; j < y; j++) {

      let [x, y] = grid.getBoxCenter(i, j);

      let x0 = Math.floor(x-dx);
      let x1 = Math.floor(x+dx);
      let y0 = Math.floor(y-dy);
      let y1 = Math.floor(y+dy);

      if ((i+j) % 2) {
        ctx.fillStyle = "green";
      } else {
        ctx.fillStyle = "black";
        ctx.drawImage(CHERRIES_IMAGE, x0, y0, x1-x0, y1-y0);
      }

    }
  }

}
