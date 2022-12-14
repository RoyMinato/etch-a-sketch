const grid = document.querySelector('.grid');
let cells;
let mousedown = false;

const resetBtn = document.querySelector('.reset');
resetBtn.addEventListener('click', resetGrid);

const gridLineBtn = document.querySelector('.toggleLines');
gridLineBtn.addEventListener('click', toggleLines);

const slider = document.querySelector('.slider')
const dimensions = document.querySelector('.gridDimensions')

const colorSelector = document.querySelector('.colorPicker')


slider.oninput = function() {
    replaceGrid(slider.value);
    dimensions.textContent = slider.value + " x " + slider.value;
}


function replaceGrid(dimension) {

    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }

    createGrid(dimension);
}


function createGrid (dimension){

    for (let row = 0; row < dimension; row++) {
        const rowDiv = document.createElement('div');

        for (let col = 0; col < dimension; col++) {
            const cellDiv = document.createElement('div');
            cellDiv.classList.add('gridCell');

            cellDiv.style.border = '1px solid black'
            cellDiv.style.backgroundColor = 'white';

            let cellDimension = grid.offsetWidth * (1/dimension);
            cellDiv.style.width = cellDimension.toString() + "px";
            cellDiv.style.height = cellDimension.toString() + "px";

            rowDiv.appendChild(cellDiv);
        }
        
        grid.appendChild(rowDiv);
    }

    cells = document.querySelectorAll('.gridCell');

    cells.forEach ( cell => {
        cell.addEventListener('mousedown', function() {
            cell.style.backgroundColor = colorSelector.value;
            mousedown = true;
            
            //use window so still works if mouse moved out of grid then mouseup event occurs
            window.addEventListener('mouseup', function(){
                mousedown = false;
            });
        })
    });

    cells.forEach ( cell => {
        cell.addEventListener('mouseover', function() {
            if(mousedown){
                cell.style.backgroundColor = colorSelector.value;
            }
        })
    });
}


function resetGrid() {
    cells.forEach ( cell => {
        cell.style.backgroundColor = 'white';
    });
}


function toggleLines() {
    cells.forEach ( cell => {
        if(cell.style.border === '1px solid black') {
            cell.style.border = 'none';
        }   
        else {
            cell.style.border = '1px solid black';
        }
    });
}


createGrid(slider.value);