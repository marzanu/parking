input.onButtonPressed(Button.A, function () {
    plaçes_lliures = plaçes_lliures - 1
})
input.onButtonPressed(Button.B, function () {
    plaçes_lliures = plaçes_lliures + 1
})
let plaçes_lliures = 0
plaçes_lliures = 5
let clients = 0
let aforament = 5
basic.forever(function () {
    let plaçes_lliure = 0
    basic.showNumber(plaçes_lliures)
    clients = aforament - plaçes_lliure
    if (plaçes_lliures == 5 || plaçes_lliures > 5) {
        plaçes_lliures = 5
    }
    if (plaçes_lliures == 0 || plaçes_lliures < 0) {
        plaçes_lliures = 0
    }
})
basic.forever(function () {
    if (plaçes_lliures == 0) {
        basic.showString("PLE")
    } else if (plaçes_lliures == 5) {
        basic.showString("BUIT")
    }
})
