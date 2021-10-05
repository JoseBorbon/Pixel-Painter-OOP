// Pixel Painter

// Objects
// 1. Canvas
// - Cells

class Canvas {
  constructor(sideSize) {
    // Shape
    this.sideSize = sideSize;
    // 2
    // [
    //   [ X, Y ],
    //   [ Z, A ]
    //  ]
    this.cells = [];
    // Looping over a number of times equal to the size
    for (let j = 0; j < this.sideSize; j++) {
      // Create a new row
      const row = [];
      // Loop over a number of times equal to the cell count
      for (let i = 0; i < this.sideSize; i++) {
        // Push into that row
        row.push(new Cell());
      }
      // Push the row into the overall cells
      this.cells.push(row);
    }
  }

  getAllColorStrings() {
    let colorString = '';
    //iterate through canvas columns row until we go out of bounds
    for (let i = 0; i < this.cells.length; i++) {
      //access specific column
      for (let j = 0; j < this.sideSize; j++) {
        //add color to string
        colorString += this.cells[i][j].color + ' ';
      }
      //added newline to seperate rows in string format
      colorString += '\n';
    }
    return colorString;
  }
}

class Cell {
  constructor(color = '#FFFFFF') {
    this.color = color;
  }

  setColor(color) {
    this.color = color;
  }
}

const joses = new Canvas(2);
joses.cells[0][1].setColor('#CCC');
joses.cells;
console.log(joses.getAllColorStrings()); // <- Logged the evaluated result of Invoking function to see if output matched the output on lines 61-63 and it did (wasn't sure if I needed to remove the extra FFF's or not)

/*
    #FFF #CCC
    #FFF #FFF
  */
