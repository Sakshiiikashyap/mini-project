let boxes = document.querySelectorAll(".box");
let resetBtn = document.getElementById("reset");
let newGameBtn = document.getElementById("new-btn");
let msgContainer = document.querySelectorAll(".msg-conatainer");
let msg = document.getElementById("msg");

let turnO = true; //playerX, playerO

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    const msgContainer = document.querySelector(".msg-container"); // Select the container again
    if (msgContainer) {
        msgContainer.classList.add("hide"); // Add the "hide" class back
    }
};

// Event listener
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO){
            // playerO
            box.innerText = "O";
            turnO = false;
        } else {
            // palyerX
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    const msg = document.getElementById("msg"); // Selecting the <p> element
    const msgContainer = document.querySelector(".msg-container"); // Selecting the div with class "msg-container"

    if (msg && msgContainer) {
        msg.innerText = `Congratulations, Winner is ${winner}`;
        msgContainer.classList.remove("hide"); // Removing the "hide" class
    }
    disableBoxes();
};

const checkWinner = () => {
    for (let pattern of winPattern) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val == pos2Val && pos2Val == pos3Val) {
                console.log("Winner", pos1Val);
                showWinner(pos1Val);
            }
        }
    }
};


newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

