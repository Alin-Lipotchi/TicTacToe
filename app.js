// Variables

const checkBoxes = $(".check-box");
const oTurn = $(".o-turn");
const xTurn = $(".x-turn");
let locationArr = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];
let progress = 0;

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
    });
});

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
};
