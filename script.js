

var gridSize = 16;
var button = document.querySelector('.button');
button.addEventListener('click', () => {
        resetGrid();
});

function resetGrid(){
    gridSize = prompt("Enter grid size: 16 - 100")
    while(gridSize < 16 || gridSize > 100){
        gridSize = prompt("Enter grid size: 16 - 100")
    }
    removeAllBoxes();
    buildGrid();
    
}

function removeAllBoxes(){
    document.querySelector(".gridContainer").replaceChildren();
}

function buildGrid(){
            var newHeight = 100/gridSize + "%"
            var newWidth = 100/gridSize + "%"
    for(i = 0; i < gridSize; i++){
        for(x = 0; x < gridSize; x++){
            var square = document.createElement("div");
            
            square.style.width = newWidth;
            square.style.height = newHeight;
            square.dataset.brightness = "1"
            square.className = "square"
            document.querySelector(".gridContainer").appendChild(square);
        }
    }
    setSquareAttributes();
}

function getRndInteger() {
    var min = 0;
    var max = 256
    return Math.floor(Math.random() * (max - min) ) + min;
  }

function setSquareAttributes(){
    var squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            var baseColor = ['0', '0', '0'];
            var color = getComputedStyle(square).backgroundColor.replace('rgb(', '').replace(")", "").replace(' ', '').replace(' ', '').split(',');
            if(color[0] == baseColor[0] && color[1] == baseColor[1] && color[2] == baseColor[2]){
                square.style.backgroundColor = 'rgb(' + getRndInteger() + ',' + getRndInteger() + ',' + getRndInteger() + ')';
            }else{
                var currentBrightness = ((square.dataset.brightness * 100) - 10)/100
                square.dataset.brightness = currentBrightness;
                square.style.filter = "brightness(" + currentBrightness + ")";
            }
        });
     });
}


buildGrid();



