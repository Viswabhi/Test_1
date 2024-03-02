function printPyramid(levels) {
    let num = 1;
    for (let i = 1; i <= levels; i++) {
      let row = '';
      
      
      for (let j = 1; j <= levels - i; j++) {
        row += ' ';
      }
      for (let k = 1; k <= num; k++) {
        row += k;
      }
  
      console.log(row+" ");
      num += 2;
    }
  }
  
 
  const numberOfLevels = 5;
  
  printPyramid(numberOfLevels);