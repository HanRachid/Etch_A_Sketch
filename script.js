

const choiseur = document.querySelector('#choisisseur');
let gridColor = choiseur.value;
   
const slider = document.querySelector('#rangeur');
let size = slider.value;
function deleteGrid(){
    const grid = document.querySelector(".grid");
    grid.replaceChildren();
    
    createGrid(size);
}    


function fillGrid(color=""){
    const grid = document.querySelector(".grid");
    const children = Array.from(grid.children);
    children.forEach((element) =>{ 
        element.style.backgroundColor = color;
    });
}

let isGridOn = true;
function addOutline(){
    const grid = document.querySelector(".grid");
    const children = Array.from(grid.children);
    children.forEach((element) =>{ 
        element.style.outlineStyle = "solid";
        
    });
    isGridOn = true;
}

function removeOutline(){
    const grid = document.querySelector(".grid");
    const children = Array.from(grid.children);
    children.forEach((element) =>{ 
        element.style.outlineStyle = "none";
    });
    isGridOn = false;
}


function createGrid(size){
    let square = (100/size)+'%';
    const grid = document.querySelector(".grid");
    
    for (let i=0; i<size ; i++){
        for (let j = 0 ; j < size ; j++){
            const cell = document.createElement("div");
            cell.className = "cell";
            cell.style.width = square;
            cell.style.height = square;
            cell.ondragstart = function () { return false; };
            grid.appendChild(cell);

        }
    }
    const children = Array.from(grid.children);
    children.forEach((element) =>{
        element.addEventListener('contextmenu', (e)=>{
            e.preventDefault();
           
        });
        
        element.addEventListener('mouseover', (e) => {
           
            if (e.buttons==1) {
                console.log(gridColor);
                
                element.style.backgroundColor=gridColor;

            } else if (e.buttons==2) {
                
                element.style.backgroundColor='';
            }
            

            
        });

        element.addEventListener('mousedown', (e) => {
           
             
            element.style.backgroundColor=gridColor;

            if (e.buttons==2) {
                
                element.style.backgroundColor='';
            }
            

            
        });

    });

    

    
  
}
createGrid(size);




slider.addEventListener('change', (e) => {
    size = slider.value;
    deleteGrid();
    
});



choiseur.addEventListener('change', (e)=> {
    gridColor = choiseur.value;
    
});

const grider = document.querySelector("#grider");

grider.addEventListener('click' , (e) => {
    console.log("lol");
    if (isGridOn){
        removeOutline();
    }else{
        addOutline();
    }

});

const fill = document.querySelector("#filler");
const reset = document.querySelector("#reseter");

fill.addEventListener('click', (e)=>{
    fillGrid(gridColor);
});

reset.addEventListener('click', (e)=>{
    fillGrid()

});