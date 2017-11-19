function setup() {
  createCanvas(500,400);
}

function draw() {
  var x = 5;

  background('white');
  fill(250)
  
 //for ( var count = 0; count < 4; count += 1 ) {
    //ellipse(x + (50 * count), height/2, 40, 40);
    //ellipse(x + (50 * count), height/2 + 50, 40, 40);
 //}
 for(var row = 0; row < 10; row += 1){
   if  (row % 2 === 0) {
   var firstColor = 'black'
   var secondColor = 'orange'
   } else {
    var firstColor = 'orange'
   var secondColor = 'black'
   }
   

 for ( var count = 0; count < 8; count += 1 ) {
   if (count % 2 === 0) {
         fill(firstColor)
     } else {
         fill(secondColor)
     }
    rect(x + (50 * count), 50 * row, 50, 50);
     
 }
}



  
}