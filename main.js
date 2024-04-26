// References to DOM elements
const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');
const book = document.querySelector('#book');

// References to paper elements
const papers = document.querySelectorAll('.paper');
const numOfPapers = papers.length;

// Event listeners
prevBtn.addEventListener("click", goPrevious);
nextBtn.addEventListener("click", goNext);

// Business Logic
let currentState = 1;
let maxState = numOfPapers + 1;

function openBook() {
    book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-180px)";
    nextBtn.style.transform = "translateX(180px)";
}

function closeBook(isFirstPage) {
    if (isFirstPage) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }
    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}

function goNext() {
    if (currentState < maxState) {
        switch (currentState) {
            case 1:
                openBook();
                papers[currentState - 1].classList.add("flipped");
                papers[currentState - 1].style.zIndex = 1;
                break;
            case numOfPapers:
                closeBook(false);
                papers[currentState - 1].classList.add("flipped");
                papers[currentState - 1].style.zIndex = numOfPapers;
                break;
            default:
                papers[currentState - 1].classList.add("flipped");
                papers[currentState - 1].style.zIndex = currentState;
                break;
        }

        currentState++;
    }
}

function goPrevious() {
    if (currentState > 1) {
        switch (currentState) {
            case 2:
                closeBook(true);
                papers[currentState - 2].classList.remove("flipped");
                papers[currentState - 2].style.zIndex = numOfPapers;
                break;
            case maxState:
                openBook();
                papers[currentState - 2].classList.remove("flipped");
                papers[currentState - 2].style.zIndex = 1;
                break;
            default:
                papers[currentState - 2].classList.remove("flipped");
                papers[currentState - 2].style.zIndex = maxState - currentState + 1;
                break;
        }

        currentState--;
    }
}
