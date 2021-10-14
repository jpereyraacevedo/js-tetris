document.addEventListener('DOMContentLoaded', () => {

    const grid = document.querySelector('.grid')
    let squares = Array.from(document.querySelectorAll(".grid div"))
    const ScoresDisplay = document.querySelector("#score")
    const StartButton = document.querySelector("#start-button")
    const width = 10

    const lTetromino = [
        [1, width+1, width*2+1, 2],
        [width, width+1, width+2, width*2+2],
        [1, width+1, width*2+1, width*2],
        [width, width*2, width*2+1, width*2+2]
    ]

    const zTetromino = [
        [0, width, width+1, width*2+1],
        [width+1, width+2, width*2, width*2+1],
        [0, width, width+1, width*2+1],
        [width+1, width+2, width*2, width*2+1]
    ]

    const tTetromino = [
        [1, width, width+1, width+2],
        [1, width+1, width+2, width*2+1],
        [width, width+1, width+2, width*2+1],
        [1, width, width+1, width*2+1]
      ]
    
      const oTetromino = [
        [0, 1, width, width+1],
        [0, 1, width, width+1],
        [0, 1, width, width+1],
        [0, 1, width, width+1]
      ]
    
      const iTetromino = [
        [1, width+1, width*2+1, width*3+1],
        [width, width+1, width+2, width+3],
        [1, width+1, width*2+1, width*3+1],
        [width, width+1, width+2, width+3]
      ]

    const tetrominos = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino]

    let posicionActual = 4
    let rotacionActual = 0


    // Eleccion random del tetromino y su primera rotacion
    let random = Math.floor(Math.random()*tetrominos.length)
    console.log(random)
    let actual = tetrominos[random][0]

    // Funcion para dibujar la forma del tetromino
    function draw() {
      actual.forEach(index => {
        squares[posicionActual + index].classList.add("tetromino")
      })
    }

    // Funcion para deshacer el dibujo del tetromino
    function unDraw() {
      actual.forEach(index => {
        squares[posicionActual + index].classList.remove("tetromino")
      })
    }



    // Funcion para que el tetromino baje en el tiempo
    timerId = setInterval(moveDown, 1000)


    // Funcion de mover hacia abajo el tetromino



})