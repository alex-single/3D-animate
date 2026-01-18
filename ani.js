const WIDTH = 800;
const HEIGHT = 800;

let canvas = document.getElementById('canv')
let ctx = canvas.getContext("2d")

function clearScreen(){
    ctx.fillStyle = 'black'
    ctx.fillRect(0,0,WIDTH,HEIGHT)
}

function point({x, y}){
    const dimension = 20
    ctx.fillStyle = 'green'
    ctx.fillRect(x - dimension/2, y - dimension/2, dimension, dimension)
    console.log(x - dimension/2, y- dimension/2)
}

function normalizeCoord(point){
    //normalized point w canvas
return({
    // 
    x: (point.x + 1)/2 * WIDTH,
    y: (1- (point.y + 1)/2) * HEIGHT
})
}

function project({x,y,z}){

    
}
//main call
clearScreen()
point(normalizeCoord({x:1,y:1}))