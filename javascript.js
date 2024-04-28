let box;
let row;
let normalMode = true;
let rainbowMode = false;
let eraserMode = false;


const rainbowButton = document.querySelector('#rainbow');
rainbowButton.addEventListener("click", () =>{

    rainbowMode = true;
    normalMode = false;
    eraserMode = false;

    console.log(rainbowMode, normalMode, eraserMode);

});

const standardButton = document.querySelector('#standard');
standardButton.addEventListener("click", () =>{

    rainbowMode = false;
    normalMode = true;
    eraserMode = false; 

    console.log(rainbowMode, normalMode, eraserMode);


});


const eraserButton = document.querySelector('#eraser');
eraserButton.addEventListener("click", () =>{

    rainbowMode = false;
    normalMode = false;
    eraserMode = true; 

    console.log(rainbowMode, normalMode, eraserMode);


});



const newGrid = document.querySelector("#newGrid")
newGrid.addEventListener("click", () =>{

        destroyGrid();
        createGrid();

});

function destroyGrid(){
        
        document.querySelector("#container").innerHTML = "";


    
}

function createGrid(theColor){
    let gridSize = prompt("Please choose a grid size (Less than 100 recommended)");
    console.log(gridSize)
    
    const container =  document.querySelector("#container");


    for(i=0; i < gridSize; i++){
        
        let row = document.createElement("div");
        row.classList.add("row");
        row.style.backgroundColor = "white";
        container.appendChild(row);
            for (x=0; x < gridSize; x++){

                

                let box = document.createElement("div");
                box.classList.add("box");
                box.style.backgroundColor = "white";
                let opacity = box.style.opacity = 0.1;     
                row.appendChild(box);
                box.addEventListener("mouseover", () => {
                    
                    if (rainbowMode === true){
                        box.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
                    }
                    else if (eraserMode === true){
                        box.style.backgroundColor = "white";
                    }
                    else{
                        box.style.backgroundColor = "black";

                    }
                    opacity = box.style.opacity = opacity + 0.1;});

            };
         }
    

        
        }