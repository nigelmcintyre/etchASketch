let inputXSquares = prompt('please input number or squares along x axis'); 
let inputYSquares = prompt('please input number or squares along y axis'); 

let container = document.getElementById('container');

function generateGrid(numXSquares, numYSquares){
    //trying to make it print out 4x4,4x3,4x2,4x1,3x4,3x3,3x2 etc.
    while(numYSquares>0){
        while(numXSquares>0){
            let dimensionsX = numXSquares.toString();
            let dimensionsY = numYSquares.toString();
            const div = document.createElement('div')
            div.setAttribute('id', dimensionsX+'x'+dimensionsY);
            console.log(dimensionsX+'x'+dimensionsY);
            div.setAttribute('class','square');
            numXSquares--;
        }
        numYSquares--;
    }
        
}

generateGrid(inputXSquares,inputYSquares);
