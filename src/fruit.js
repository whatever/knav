import {SquareGrid} from './square-grid.js';

/**
 * Render
 */
export function renderFruit(el, {x, y}) {
  let ctx = el.getContext("2d");


  let grid = new SquareGrid({width: 10, height: 10});


  ctx.transform(1, 0, 0, -1, 0, el.height);

  for (let [i, j, [ul, br]] of grid) {
    let [x0, y0] = ul;
    let [x1, y1] = br;

    if ((i+j)%2) {
      ctx.fillStyle = "green";
    } else {
      ctx.fillStyle = "black";
    }

    console.log(x0, y0, '->', x1, y1);

    ctx.fillRect(x0, y0, x1-x0, y1-y0);
  }





}
