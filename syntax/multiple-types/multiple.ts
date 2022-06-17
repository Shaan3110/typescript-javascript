interface typeOptions {
    shape: string | undefined | number;  //multiple types to same parameter
    xPos?: number;  //optional parameters
    yPos?: number;  //optional parameters
  }
function randomfunc(arg: typeOptions) {
    // ...
  }
  randomfunc({ shape:"check1" });
  randomfunc({ shape:undefined, xPos: 100 });
  randomfunc({ shape:2, yPos: 100 });
  randomfunc({ shape:"check1", xPos: 100, yPos: 100 });