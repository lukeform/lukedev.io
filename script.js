let box;
let row;
let normalMode = false;
let rainbowMode = true;
let eraserMode = false;

createGrid();

function createGrid(){
    let gridSize = 40;
    console.log(gridSize)
    
    const container =  document.querySelector("#contactMe");


    for(i=0; i < gridSize; i++){
        
        let row = document.createElement("div");
        row.classList.add("row");
        row.style.backgroundColor = "white";
        container.appendChild(row);
            for (x=0; x < gridSize; x++){

            
                let box = document.createElement("div");
                box.classList.add("box");
                box.style.backgroundColor = "white";   
                row.appendChild(box);
                box.addEventListener("mouseover", () => {
                    
                    if (rainbowMode === true){
                        box.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
                    }


                    });
                }

            }
         }
    

        


        createGrid();

