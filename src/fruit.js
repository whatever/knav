import {SquareGrid} from './square-grid.js';

/**
 * Render
 */
export function renderFruit(el, x, y) {
  let ctx = el.getContext("2d");


  console.log("[fruits] [w, h] =", [el.width, el.height]);

  let w = (el.width / x);
  let h = (el.height / y);

  let grid = new SquareGrid({width: w, height: h});

  ctx.transform(1, 0, 0, -1, 0, el.height);

  for (let i=0; i < x; i++) {
    for (let j=0; j < y; j++) {

      let [x, y] = grid.getBoxCenter(i, j);

      let x0 = Math.floor(x-4.5);
      let x1 = Math.ceil(x+4.5);
      let y0 = Math.floor(y-4.5);
      let y1 = Math.ceil(y+4.5);

      if ((i+j)%2) {
        ctx.fillStyle = "green";
      } else {
        ctx.fillStyle = "black";
      }

      ctx.fillRect(x0, y0, x1-x0, y1-y0);

    }
  }

}
