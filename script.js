const grid = document.querySelector('.grid');

function createGrid (dimension){

    for (let row = 0; row < dimension; row++) {
        const rowDiv = document.createElement('div');

        for (let col = 0; col < dimension; col++) {
            const cellDiv = document.createElement('div');
            cellDiv.classList.add('gridCell');

            cellDiv.style.backgroundColor = 'white';
            
            let cellDimension = grid.offsetWidth * (1/dimension)
            cellDiv.style.width = cellDimension.toString() + "px";
            cellDiv.style.height = cellDimension.toString() + "px";

            rowDiv.appendChild(cellDiv);
        }
        
        grid.appendChild(rowDiv);
    }

}

const cells = document.querySelectorAll('.gridCell')





createGrid(16);