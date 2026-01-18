const WIDTH = 800;
const HEIGHT = 800;
const FPS = 60;

let canvas = document.getElementById('canv')
let ctx = canvas.getContext("2d")

function clearScreen(){
    ctx.fillStyle = 'black'
    ctx.fillRect(0,0,WIDTH,HEIGHT)
}

function point({x, y}){
    const dimension = 10
    ctx.fillStyle = 'green'
    ctx.fillRect(x - dimension/2, y - dimension/2, dimension, dimension)
    console.log(x - dimension/2, y- dimension/2)
}

function normalizeCoord(point){
    //normalized point w canvas
return({
    // 
    x: (point.x + 1)/2 * WIDTH,
    y: (1- (point.y + 1)/2) * HEIGHT,
})
}

function project({x,y,z}){

    projectX = x/z;
    projectY = y/z;

    return {x: projectX, y: projectY}
}
//main call

let verts = [
    {x:-.5,y:-.5,z:1},
    {x:-.5,y:.5,z:1},
    {x:.5,y:-.5,z:1},
    {x:.5,y:.5,z:1}

]

function frame({x,y,z}){
    point(normalizeCoord(project({x,y,z})))
}

function draw(){
    clearScreen()
 for(let i = 0; i < verts.length; i++){
    frame(verts[i])
 }
}

function change_z(vert){
    vert.z += 1;
    return vert
}

function rotate({x,y}){
    let angle = 5;
return{
    x: x * Math.cos(angle) - y * Math.sin(angle),
    y: x * Math.sin(angle) + y * Math.cos(angle)
}
}

function play(){
let delay = 1/FPS
draw();
setTimeout(play,delay)

}

play()