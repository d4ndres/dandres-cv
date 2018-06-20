// ---------------------modal---------------------------
const $overlay = document.getElementById('overlay')
const $modal = document.getElementById('modal')
const $btn = document.getElementById('btn')

$overlay.addEventListener( 'click' , close )
$modal.addEventListener( 'animationend', close )

function close(){
  $overlay.classList.remove('active')
}

// ------------------------------------------------------
const $downDescriptionHeph = document.getElementById('down-description-heph')
const $downDescriptionShowPhotos = document.getElementById('down-description-show-photos')
const $descriptionHeph = document.getElementById('images-description-down-heph')
const $descriptionShowPhotos = document.getElementById('images-description-down-show-photos')


$downDescriptionShowPhotos.addEventListener( 'click' , () => $descriptionShowPhotos.classList.toggle('active') )
$downDescriptionHeph.addEventListener( 'click' , () => $descriptionHeph.classList.toggle('active') )

// ------------------------------------------------------
const $btnDesktopHeph = document.getElementById('btn-desktop-heph')
const $btnPhoneHeph = document.getElementById('btn-phone-heph')
const $pcImageHeph = document.getElementById('pc-image-heph')
const $phoneImageHeph = document.getElementById('phone-image-heph')
const $imageTitleHeph = document.getElementById('images-title-heph')

// mejorar esste codigo (este es codigo prueva)
$btnDesktopHeph.addEventListener( 'click' , ABC )
$btnPhoneHeph.addEventListener( 'click' , CBA )
let boolDesktop = true
let boolPhone = false

function ABC(){
  if(boolDesktop == false)
  {
    boolDesktop = true
    boolPhone = false
    saludar()
    despedir()
    $pcImageHeph.style.display = 'initial'
    $phoneImageHeph.style.display = 'none'
    $imageTitleHeph.classList.toggle('active')
  }
}
function CBA(){
  if(boolPhone == false)
  {
    boolDesktop = false
    boolPhone = true
    saludar()
    despedir()
    $pcImageHeph.style.display = 'none'
    $phoneImageHeph.style.display = 'initial'
    $imageTitleHeph.classList.toggle('active')
  }
}

function saludar(){
  $btnDesktopHeph.classList.toggle('active')
}
function despedir(){
  $btnPhoneHeph.classList.toggle('active')
}
// _________________________



// ------------------------------------------------------
