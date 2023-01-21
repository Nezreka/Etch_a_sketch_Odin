

function buildGrid(){
    for(i = 0; i < 16; i++){
        for(x = 0; x < 16; x++){
            var square = document.createElement("div");
            square.className = "square"
            document.querySelector(".gridContainer").appendChild(square);
            console.log("here")
        }
    }
}

buildGrid();