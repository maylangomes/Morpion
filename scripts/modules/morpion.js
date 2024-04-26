export class Morpion {
    constructor(grid) {
        //console.log(grid);
        //this.row1 = document.getElementById("grid").getElementsByClassName("row")[0];
        this.case1 = document.getElementById("grid").getElementsByClassName("row")[0].getElementsByClassName("cell")[0];
        this.case2 = document.getElementById("grid").getElementsByClassName("row")[0].getElementsByClassName("cell")[1];
        this.case3 = document.getElementById("grid").getElementsByClassName("row")[0].getElementsByClassName("cell")[2];
        this.case4 = document.getElementById("grid").getElementsByClassName("row")[1].getElementsByClassName("cell")[0];
        this.case5 = document.getElementById("grid").getElementsByClassName("row")[1].getElementsByClassName("cell")[1];
        this.case6 = document.getElementById("grid").getElementsByClassName("row")[1].getElementsByClassName("cell")[2];
        this.case7 = document.getElementById("grid").getElementsByClassName("row")[2].getElementsByClassName("cell")[0];
        this.case8 = document.getElementById("grid").getElementsByClassName("row")[2].getElementsByClassName("cell")[1];
        this.case9 = document.getElementById("grid").getElementsByClassName("row")[2].getElementsByClassName("cell")[2];
        this.whoPlays = document.getElementById("currentPlayer");
        this.replay = document.getElementById("replay");
        this.replay.addEventListener("click", () => {
            window.location.reload();
        })
        this.win1 = localStorage.getItem("Win1");
        this.win2 = localStorage.getItem("Win2");
        this.score1 = document.getElementById("playerOne");
        this.score2 = document.getElementById("playerTwo");
        this.score1.innerHTML = this.win1;
        this.score2.innerHTML = this.win2;
        // this.whoWins = document.createElement("span");
        // this.whoWins.innerHTML = "WINNER";
        // this.li = document.createElement('li');
        // this.li.appendChild(this.whoWins);
        //document.getElementsByClassName("win-display").id = "winner";
        // this.whoWins = document.getElementsByClassName("win-display");
        // console.log(this.whoWins.id);
        // //document.getElementById("winner").classList.add();
        // this.whoWins.style.display = "inline-block";
        // this.whoWins.innerHTML = "WINNER";

        this.currentPlayer = 1;
        this.whoPlays.innerHTML = "Joueur 1";
        this.case1.addEventListener("click", () => {
            if (this.currentPlayer === 1 && this.case1.innerHTML === "") {
                this.case1.innerHTML = "X";
                this.currentPlayer = 2;
                this.whoPlays.innerHTML = "Joueur 2";
                this.isWinner();
            } else if (this.currentPlayer === 2 && this.case1.innerHTML === "") {
                this.case1.innerHTML = "O";
                this.currentPlayer = 1;
                this.whoPlays.innerHTML = "Joueur 1";
                this.isWinner();
            }
        });
        this.case2.addEventListener("click", () => {
            if (this.currentPlayer === 1 && this.case2.innerHTML === "") {
                this.case2.innerHTML = "X";
                this.currentPlayer = 2;
                this.whoPlays.innerHTML = "Joueur 2";
                this.isWinner();
            } else if (this.currentPlayer === 2 && this.case2.innerHTML === "") {
                this.case2.innerHTML = "O";
                this.currentPlayer = 1;
                this.whoPlays.innerHTML = "Joueur 1";
                this.isWinner();
            }
        });
        this.case3.addEventListener("click", () => {
            if (this.currentPlayer === 1 && this.case3.innerHTML === "") {
                this.case3.innerHTML = "X";
                this.currentPlayer = 2;
                this.whoPlays.innerHTML = "Joueur 2";
                this.isWinner();
            } else if (this.currentPlayer === 2 && this.case3.innerHTML === "") {
                this.case3.innerHTML = "O";
                this.currentPlayer = 1;
                this.whoPlays.innerHTML = "Joueur 1";
                this.isWinner();
            }
        });
        this.case4.addEventListener("click", () => {
            if (this.currentPlayer === 1 && this.case4.innerHTML === "") {
                this.case4.innerHTML = "X";
                this.currentPlayer = 2;
                this.whoPlays.innerHTML = "Joueur 2";
                this.isWinner();
            } else if (this.currentPlayer === 2 && this.case4.innerHTML === "") {
                this.case4.innerHTML = "O";
                this.currentPlayer = 1;
                this.whoPlays.innerHTML = "Joueur 1";
                this.isWinner();
            }
        });
        this.case5.addEventListener("click", () => {
            if (this.currentPlayer === 1 && this.case5.innerHTML === "") {
                this.case5.innerHTML = "X";
                this.currentPlayer = 2;
                this.whoPlays.innerHTML = "Joueur 2";
                this.isWinner();
            } else if (this.currentPlayer === 2 && this.case5.innerHTML === "") {
                this.case5.innerHTML = "O";
                this.currentPlayer = 1;
                this.whoPlays.innerHTML = "Joueur 1";
                this.isWinner();
            }
        });
        this.case6.addEventListener("click", () => {
            if (this.currentPlayer === 1 && this.case6.innerHTML === "") {
                this.case6.innerHTML = "X";
                this.currentPlayer = 2;
                this.whoPlays.innerHTML = "Joueur 2";
                this.isWinner();
            } else if (this.currentPlayer === 2 && this.case6.innerHTML === "") {
                this.case6.innerHTML = "O";
                this.currentPlayer = 1;
                this.whoPlays.innerHTML = "Joueur 1";
                this.isWinner();
            }
        });
        this.case7.addEventListener("click", () => {
            if (this.currentPlayer === 1 && this.case7.innerHTML === "") {
                this.case7.innerHTML = "X";
                this.currentPlayer = 2;
                this.whoPlays.innerHTML = "Joueur 2";
                this.isWinner();
            } else if (this.currentPlayer === 2 && this.case7.innerHTML === "") {
                this.case7.innerHTML = "O";
                this.currentPlayer = 1;
                this.whoPlays.innerHTML = "Joueur 1";
                this.isWinner();
            }
        });
        this.case8.addEventListener("click", () => {
            if (this.currentPlayer === 1 && this.case8.innerHTML === "") {
                this.case8.innerHTML = "X";
                this.currentPlayer = 2;
                this.whoPlays.innerHTML = "Joueur 2";
                this.isWinner();
            } else if (this.currentPlayer === 2 && this.case8.innerHTML === "") {
                this.case8.innerHTML = "O";
                this.currentPlayer = 1;
                this.whoPlays.innerHTML = "Joueur 1";
                this.isWinner();
            }
        });
        this.case9.addEventListener("click", () => {
            if (this.currentPlayer === 1 && this.case9.innerHTML === "") {
                this.case9.innerHTML = "X";
                this.currentPlayer = 2;
                this.whoPlays.innerHTML = "Joueur 2";
                this.isWinner();
            } else if (this.currentPlayer === 2 && this.case9.innerHTML === "") {
                this.case9.innerHTML = "O";
                this.currentPlayer = 1;
                this.whoPlays.innerHTML = "Joueur 1";
                this.isWinner();
            }
        });
        //console.log(this.case1.innerHTML);
        this.winner = () => {
            console.log(this.case1.innerHTML);
        }
        window.onload = () => {
            //console.log("win");
            this.isWinner();
        }
    }

    isWinner() {
        if (this.case1.innerHTML === this.case2.innerHTML && this.case2.innerHTML === this.case3.innerHTML && this.case2.innerHTML != "") {
            if (this.currentPlayer === 1) {
                this.whoPlays.innerHTML = "Joueur 2 Win";
                localStorage.setItem("Win2", ++this.win2);
                this.score2.innerHTML = this.win2;
            } else {
                this.whoPlays.innerHTML = "Joueur 1 Win";
                localStorage.setItem("Win1", ++this.win1);
                this.score1.innerHTML = this.win1;
            }
        }
        if (this.case4.innerHTML === this.case5.innerHTML && this.case5.innerHTML === this.case6.innerHTML && this.case5.innerHTML != "") {
            if (this.currentPlayer === 1) {
                this.whoPlays.innerHTML = "Joueur 2 Win";
                localStorage.setItem("Win2", ++this.win2);
                this.score2.innerHTML = this.win2;
            } else {
                this.whoPlays.innerHTML = "Joueur 1 Win";
                localStorage.setItem("Win1", ++this.win1);
                this.score1.innerHTML = this.win1;
            }
        }
        if (this.case7.innerHTML === this.case8.innerHTML && this.case8.innerHTML === this.case9.innerHTML && this.case8.innerHTML != "") {
            if (this.currentPlayer === 1) {
                this.whoPlays.innerHTML = "Joueur 2 Win";
                localStorage.setItem("Win2", ++this.win2);
                this.score2.innerHTML = this.win2;
            } else {
                this.whoPlays.innerHTML = "Joueur 1 Win";
                localStorage.setItem("Win1", ++this.win1);
                this.score1.innerHTML = this.win1;
            }
        }
        if (this.case1.innerHTML === this.case4.innerHTML && this.case4.innerHTML === this.case7.innerHTML && this.case4.innerHTML != "") {
            if (this.currentPlayer === 1) {
                this.whoPlays.innerHTML = "Joueur 2 Win";
                localStorage.setItem("Win2", ++this.win2);
                this.score2.innerHTML = this.win2;
            } else {
                this.whoPlays.innerHTML = "Joueur 1 Win";
                localStorage.setItem("Win1", ++this.win1);
                this.score1.innerHTML = this.win1;
            }
        }
        if (this.case2.innerHTML === this.case5.innerHTML && this.case5.innerHTML === this.case8.innerHTML && this.case5.innerHTML != "") {
            if (this.currentPlayer === 1) {
                this.whoPlays.innerHTML = "Joueur 2 Win";
                localStorage.setItem("Win2", ++this.win2);
                this.score2.innerHTML = this.win2;
            } else {
                this.whoPlays.innerHTML = "Joueur 1 Win";
                localStorage.setItem("Win1", ++this.win1);
                this.score1.innerHTML = this.win1;
            }
        }
        if (this.case3.innerHTML === this.case6.innerHTML && this.case6.innerHTML === this.case9.innerHTML && this.case6.innerHTML != "") {
            if (this.currentPlayer === 1) {
                this.whoPlays.innerHTML = "Joueur 2 Win";
                localStorage.setItem("Win2", ++this.win2);
                this.score2.innerHTML = this.win2;
            } else {
                this.whoPlays.innerHTML = "Joueur 1 Win";
                localStorage.setItem("Win1", ++this.win1);
                this.score1.innerHTML = this.win1;
            }
        }
        if (this.case1.innerHTML === this.case5.innerHTML && this.case5.innerHTML === this.case9.innerHTML && this.case5.innerHTML != "") {
            if (this.currentPlayer === 1) {
                this.whoPlays.innerHTML = "Joueur 2 Win";
                localStorage.setItem("Win2", ++this.win2);
                this.score2.innerHTML = this.win2;
            } else {
                this.whoPlays.innerHTML = "Joueur 1 Win";
                localStorage.setItem("Win1", ++this.win1);
                this.score1.innerHTML = this.win2;
            }
        }
        if (this.case3.innerHTML === this.case5.innerHTML && this.case5.innerHTML === this.case7.innerHTML && this.case5.innerHTML != "") {
            if (this.currentPlayer === 1) {
                this.whoPlays.innerHTML = "Joueur 2 Win";
                localStorage.setItem("Win2", ++this.win2);
                this.score2.innerHTML = this.win2;
            } else {
                this.whoPlays.innerHTML = "Joueur 1 Win";
                localStorage.setItem("Win1", ++this.win1);
                this.score1.innerHTML = this.win1;
            }
        }
        if (this.case1.innerHTML != "" && this.case2.innerHTML != "" && this.case3.innerHTML != "" && this.case4.innerHTML != "" && this.case5.innerHTML != "" && this.case6.innerHTML != "" && this.case7.innerHTML != "" && this.case8.innerHTML != "" && this.case9.innerHTML != "") {
            console.log("null");
        }
    }
}