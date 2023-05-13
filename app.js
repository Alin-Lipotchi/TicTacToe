// Variables

const checkBoxes = $(".check-box");
const oTurn = $(".o-turn");
const xTurn = $(".x-turn");
const overlay = $(".overlay");
const overlayBackground = $(".overlay-background");
const result = $(".result");
const winningLineYAxis = $(".winning-line-y-axis");
const winningLineXAxis = $(".winning-line-x-axis");
const winningLineDiagAxis = $(".winning-line-diag-axis");
let locationArr = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];
let progress = 0;

// Winning Conditions

// Win Condition 0 - first line
// Win Condition 1 - second line
// Win Condition 2 - third line
// Win Condition 3 - first column
// Win Condition 4 - second column
// Win Condition 5 - third column
// Win Condition 6 - main diagonal
// Win Condition 7 - secondary diagonal

// Game Logic

checkBoxes.each((i, box) => {
    $(box).click((e) => {
        if (progress % 2 === 0 && locationArr[Math.floor(i / 3)][i % 3] === 0) {
            $(e.currentTarget).children(".x-element").css("opacity", "1");
            progress++;
            locationArr[Math.floor(i / 3)][i % 3] = 1; // 1 represents X
            xTurn.css("opacity", "0");
            oTurn.css("opacity", "1");
        } else if (
            progress % 2 === 1 &&
            locationArr[Math.floor(i / 3)][i % 3] === 0
        ) {
            $(e.currentTarget).children(".o-element").css("opacity", "1");
            progress++;
            locationArr[Math.floor(i / 3)][i % 3] = 2; // 2 represents O
            xTurn.css("opacity", "1");
            oTurn.css("opacity", "0");
        }
        if (progress > 4) {
            // Draw

            if (progress === 9) {
                result.text("It's a Draw!");
                displayOverlay();
            }

            // Win conditions

            // Win Condition 0
            if (
                locationArr[0][0] !== 0 &&
                locationArr[0][0] === locationArr[0][1] &&
                locationArr[0][0] === locationArr[0][2]
            ) {
                if (locationArr[0][0] === 1) {
                    result.text("X has Won!");
                } else {
                    result.text("O has Won!");
                }
                winningLineXAxis.css({
                    transform: "scaleX(1)",
                    top: "16.5%",
                });
                displayOverlay();
            }

            // Win Condition 1
            if (
                locationArr[1][0] !== 0 &&
                locationArr[1][0] === locationArr[1][1] &&
                locationArr[1][0] === locationArr[1][2]
            ) {
                if (locationArr[1][0] === 1) {
                    result.text("X has Won!");
                } else {
                    result.text("O has Won!");
                }
                winningLineXAxis.css({
                    transform: "scaleX(1)",
                    top: "calc(50%)",
                });
                displayOverlay();
            }

            // Win Condition 2
            if (
                locationArr[2][0] !== 0 &&
                locationArr[2][0] === locationArr[2][1] &&
                locationArr[2][0] === locationArr[2][2]
            ) {
                if (locationArr[2][0] === 1) {
                    result.text("X has Won!");
                } else {
                    result.text("O has Won!");
                }
                winningLineXAxis.css({
                    transform: "scaleX(1)",
                    top: "83%",
                });
                displayOverlay();
            }

            // Win Condition 3
            if (
                locationArr[0][0] !== 0 &&
                locationArr[0][0] === locationArr[1][0] &&
                locationArr[0][0] === locationArr[2][0]
            ) {
                if (locationArr[0][0] === 1) {
                    result.text("X has Won!");
                } else {
                    result.text("O has Won!");
                }
                winningLineYAxis.css({
                    transform: "scaleY(1)",
                    left: "16.5%",
                });
                displayOverlay();
            }

            // Win Condition 4
            if (
                locationArr[0][1] !== 0 &&
                locationArr[0][1] === locationArr[1][1] &&
                locationArr[0][1] === locationArr[2][1]
            ) {
                if (locationArr[0][1] === 1) {
                    result.text("X has Won!");
                } else {
                    result.text("O has Won!");
                }
                winningLineYAxis.css({
                    transform: "scaleY(1)",
                    left: "calc(50% - 1.5px)",
                });
                displayOverlay();
            }

            // Win Condition 5
            if (
                locationArr[0][2] !== 0 &&
                locationArr[0][2] === locationArr[1][2] &&
                locationArr[0][2] === locationArr[2][2]
            ) {
                if (locationArr[0][2] === 1) {
                    result.text("X has Won!");
                } else {
                    result.text("O has Won!");
                }
                winningLineYAxis.css({
                    transform: "scaleY(1)",
                    left: "82.7%",
                });
                displayOverlay();
            }

            // Win Condition 6
            if (
                locationArr[0][0] !== 0 &&
                locationArr[0][0] === locationArr[1][1] &&
                locationArr[0][0] === locationArr[2][2]
            ) {
                if (locationArr[0][0] === 1) {
                    result.text("X has Won!");
                } else {
                    result.text("O has Won!");
                }
                winningLineDiagAxis.css({
                    transform: "rotate(-45deg)",
                    opacity: "1",
                });
                displayOverlay();
            }

            // Win Condition 7
            if (
                locationArr[0][2] !== 0 &&
                locationArr[0][2] === locationArr[1][1] &&
                locationArr[0][2] === locationArr[2][0]
            ) {
                if (locationArr[0][2] === 1) {
                    result.text("X has Won!");
                } else {
                    result.text("O has Won!");
                }
                winningLineDiagAxis.css({
                    transform: "rotate(45deg)",
                    opacity: "1",
                });
                displayOverlay();
            }
        }
    });
});

const displayOverlay = () => {
    overlay.css("transform", "scale(1) translateY(0)");
    overlayBackground.show();
    setTimeout(() => {
        overlayBackground.css("opacity", "1");
    }, 1);
};

// Reset

const resetButton = $(".reset-button");
const overlayResetButton = $(".overlay-reset-button");

resetButton.click(() => {
    reset();
});

overlayResetButton.click(() => {
    reset();
});

const reset = () => {
    locationArr = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ];
    progress = 0;
    checkBoxes.each((i, box) => {
        $(box).children().css("opacity", "0");
    });
    xTurn.css("opacity", "1");
    oTurn.css("opacity", "0");
    overlay.css("transform", "scale(0) translateY(500px)");
    overlayBackground.css("opacity", "0");
    setTimeout(() => {
        overlayBackground.hide();
    }, 500);
    winningLineYAxis.css("transform", "scaleY(0)");
    winningLineXAxis.css("transform", "scaleX(0)");
    winningLineDiagAxis.css("opacity", "0");
};
