const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const sizeDisplay = document.getElementById('sizeDisplay')
const decrease = document.getElementById('decrease')
const increase = document.getElementById('increase')
const clear = document.getElementById('clear')
const colorSet = document.getElementById('colorSet')

let size = 20
let isPressed = false
let color = 'black'
let x
let y



canvas.addEventListener('mousedown', (e) => {
    isPressed = true

    x = e.offsetX
    y = e.offsetY

    //testing coords vars
    // console.log(x, y)
})

canvas.addEventListener('mouseup', (e) => {
    isPressed = false

    x = undefined
    y = undefined

    //testing coords vars
    // console.log(isPressed, x, y)
})

canvas.addEventListener('mousemove', (e) => {
    if (isPressed) {
        const x2 = e.offsetX
        const y2 = e.offsetY

        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)

        x = x2
        y = y2

        //testing coords by movin
        // console.log(x2, y2)
    }
})

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)

    ctx.strokeStyle = color

    //line width is a radius!!!! 
    ctx.lineWidth = size * 2

    ctx.stroke()

}


//tests for canvas
// drawCircle(200, 200)
// drawLine(20, 20, 150, 150)


// self made here
decrease.addEventListener('click', () => {

    if (size > 0) {
        size = size - 5
        sizeDisplay.innerHTML = size
    }

    //testing
    //console.log(size)
})

increase.addEventListener('click', () => {
    size = size + 5
    sizeDisplay.innerHTML = size

    //testing
    // console.log(size)
})

clear.addEventListener('click', () => {
    location.reload()
})

colorSet.addEventListener('change', (e)=> {
    color = e.target.value
})

