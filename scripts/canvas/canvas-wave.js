// const gui = new dat.GUI();

const containerWave = document.getElementById('container-wave');
const canv = document.getElementById('canvas-wave');
const inputY = document.getElementById('input-y');
const inputAmplitude = document.getElementById('input-amplitude');
const inputLength = document.getElementById('input-length');
const inputFrequency = document.getElementById('input-frequency');

canv.style.background = "#000";



let cH, cW;
function defineSize() {
  cW = canv.width 
  cH = canv.height 
}
defineSize();

inputY.addEventListener('input', ev => {
  let value = ev.target.value
  value = value * cH / 100
  wave.y = value
})

inputAmplitude.addEventListener('input', ev => {
  let value = ( ev.target.value - 50 ) * 2
  value = value / 2
  wave.amplitude = value
})

inputLength.addEventListener('input', ev => {
  let value = ( ev.target.value - 50 ) * 2
  value = value / 10000
  wave.length = value
})

inputFrequency.addEventListener('input', ev => {
  let value = ( ev.target.value - 50 ) * 2
  value = value * 3 / 10000
  wave.frequency = value
})

const ctxWave = canv.getContext('2d')
let frame = 0;
let incrementColor = 0;
const wave = {
  y: cH/2,
  amplitude: 20,
  length: 0.01,
  frequency: 0.1
}

function animateWave() {
  ctxWave.beginPath();
  ctxWave.moveTo( 0, cH/2);
  for ( let i = 0; i < cW; i++) {
    ctxWave.lineTo( i,
                wave.y + Math.sin(i * wave.length + frame ) * wave.amplitude
              );
  }
  
  
  ctxWave.strokeStyle = `hsl(${incrementColor}, 50%, 50%)`;
  ctxWave.stroke();
  ctxWave.closePath();
}


function animate() {
  requestAnimationFrame( animate);
  if( (window.pageYOffset < containerWave.offsetTop + canv.offsetHeight ) &&
      (window.pageYOffset + window.innerHeight > containerWave.offsetTop)
  ) {
    
    ctxWave.fillStyle = 'rgba( 0, 0, 0, 0.02)'
    ctxWave.fillRect( 0, 0, cW, cH);
    animateWave();
    frame += wave.frequency;
    incrementColor++;
  } 
}
animate()