let input2 = game.askForString("What is your name?")
let text_list = ["a", "b", "c"]
game.splash("Hello " + input2 + "!")
let mySprite = sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    ................................
    ..........888888888888..........
    ........8887777777777888........
    ......88877666666666677888......
    .....8877666667777666667788.....
    ....887666667788887766666788....
    ....866666677888888996666678....
    ...88666667788877889976666688...
    ...88666677888677688877666688...
    ...88666778888888888887766688...
    ...88667788888888888888776688...
    ..cc866788866777777668887668cc..
    .ccbc8668866666666666688668cbcc.
    .fcbcc86666666666666666668ccbcf.
    .fcbbcc886666666666666688ccbdcf.
    .f8bbbccc88888888888888cccbddcf.
    .f8cbbbbccccccccccccccccbdddbcf.
    .f8ccbbbbbccccccccccccb11dddccf.
    .f6ccccbbbdddddddddddd111ddcccf.
    .f6ccccccbbddddddddddd11dbbcccf.
    .f6cccccccccccccbbbbbbbbbdbcccf.
    ..f6cccccccccbbbbbbbbbbbddbccf..
    ..f6cccccccccbbbbbbbbbbbddbccf..
    ..ff6ccccccccbbbbbbbbbbbddbcff..
    ...ff6cccccccbbbbbbbbbbbddbff...
    ....ffcccccccbbbbbbbbbbbdbff....
    ......ffccccbbbbbbbbbbbbff......
    ........ffffffffffffffff........
    `, SpriteKind.Player)
