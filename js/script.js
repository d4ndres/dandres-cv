const $overlay = document.getElementById('overlay')
const $modal = document.getElementById('modal')
const $btn = document.getElementById('btn')

$overlay.addEventListener( 'click' , close )
$modal.addEventListener( 'animationend', close )
$btn.addEventListener( 'click' , toggle_overlay )

function close(){
  $overlay.classList.remove('active')
}
function toggle_overlay() {
  $overlay.classList.toggle('active')

}
