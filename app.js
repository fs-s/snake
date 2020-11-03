function convertToPixels(n) {
    if (n > 79) {
        n = 79
    }
    if (n < 0) {
        n = 0
    }
    return n * 8
}
function updateSnake() {
    context.strokeStyle = "white"
    context.lineWidth = 1

    snakeCoordinates.forEach(c => {
        context.fillRect(convertToPixels(c[0]), convertToPixels(c[1]), 8, 8)
        context.strokeRect(convertToPixels(c[0]), convertToPixels(c[1]), 8, 8)
    })
}
let snakeCoordinates = [
    [40, 40],
    [40, 41],
    [39, 41],
    [38, 41]
]

const canvas = document.getElementById('GameBorder')
const context = canvas.getContext('2d')

updateSnake()
