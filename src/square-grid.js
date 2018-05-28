/**
 *
 */
export class SquareGrid {

  /**
   * Construct a grid
   */
  constructor({width, height}) {
    this.dx = width;
    this.dy = height;
  }

  /**
   * Return a
   */
  get(i, j) {
    return [
      i*this.dx,
      j*this.dy,
    ];
  }

  getBoxCenter(i, j) {
    return [
      (i+0.5)*this.dx,
      (j+0.5)*this.dy,
    ];
  }

  /**
   * Return a
   */
  getBox(i, j) {
    return [
      [i*this.dx, j*this.dy],
      [(i+1)*this.dx, (j+1)*this.dy],
    ];
  }

  [Symbol.iterator]() {
    let i = 0;
    let j = 0;

    let boxes = [];

    for (let i=0; i < 10; i++) {
      for (let j=0; j < 10; j++) {
        boxes.push([i, j, this.getBox(i, j)]);
      }
    }

    return boxes.values();
  }
}
