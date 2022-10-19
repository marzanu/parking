input.onButtonPressed(Button.A, function () {
    plaçes_lliures = plaçes_lliures - 1
})
input.onButtonPressed(Button.B, function () {
    plaçes_lliures = plaçes_lliures + 1
})
let plaçes_lliures = 0
plaçes_lliures = 0
let clients = 0
let aforament = 5
basic.forever(function () {
    let plaçes_lliure = 0
    if (plaçes_lliure == 5) {
        basic.showNumber(5)
    }
    if (plaçes_lliure == 4) {
        basic.showNumber(4)
    }
    if (plaçes_lliure == 3) {
        basic.showNumber(3)
    }
    if (plaçes_lliure == 2) {
        basic.showNumber(2)
    }
    if (plaçes_lliure == 1) {
        basic.showNumber(1)
    }
    if (plaçes_lliure == 0) {
        basic.showIcon(IconNames.No)
    }
})
