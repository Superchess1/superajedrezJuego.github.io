document.addEventListener('DOMContentLoaded', function () {
    // Chessboard interaction
    const chessboardCells = document.querySelectorAll('#game-board1 td, #game-board td');
    let selectedPiece = null;

    chessboardCells.forEach(cell => {
        cell.addEventListener('click', function () {
            if (!selectedPiece) {
                // If no piece is selected, store the selected piece
                if (this.textContent.trim() !== '') {
                    selectedPiece = this;
                    this.classList.add('selected');
                }
            } else {
                // If a piece is already selected, move it to the new position
                this.innerHTML = selectedPiece.innerHTML;
                selectedPiece.innerHTML = '';
                selectedPiece.classList.remove('selected');
                selectedPiece = null;
            }
            
        });
    });

    // Navigation functionality
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetSectionId = this.getAttribute('href');
            const targetSection = document.querySelector(targetSectionId);

            if (targetSection) {
                // Scroll to the target section smoothly
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});



