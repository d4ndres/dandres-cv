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
// codigo mejorado en un objeto
class InteractiveBtn{
  constructor( btn , imgPc, subTitle, imgPhone){
    this.btn = btn
    this.imgPc = imgPc  //state = true
    this.imgPhone = imgPhone || undefined//state = false
    this.subTitle = subTitle
    this.state = true
    this.subTitle.innerHTML = 'Desktop'
    this.btn.innerHTML = 'Celular'
    try {
      this.imgPhone.style.display = 'none'
      this.btn.addEventListener('mouseup', () => this.onClcik())
    } catch(error){
      this.btn.style.display = 'none'
    };
  }
  onClcik(){
    this.state = !this.state
    this.togglesValue()
  }

  togglesValue(){
    if (this.state && ( this.imgPc != this.imgPhone )) {
        this.imgPc.style.display = 'initial'
        this.imgPhone.style.display = 'none'
        this.btn.innerHTML = 'Celular'
        this.subTitle.innerHTML = 'Desktop'
    } else {
        this.imgPc.style.display = 'none'
        this.imgPhone.style.display = 'initial'
        this.subTitle.innerHTML = 'Celular'
        this.btn.innerHTML = 'Desktop'
    }
  }
}
// heph
const $btnHeph = document.getElementById('btn-heph')
const $pcImaHeph = document.getElementById('pc-image-heph')
const $phoneImaHeph = document.getElementById('phone-image-heph')
const $imgTitleHeph = document.getElementById('images-title-heph')

const btnHeph = new InteractiveBtn( $btnHeph, $pcImaHeph, $imgTitleHeph, $phoneImaHeph )
// showPhotos

const $btnShowPhotos = document.getElementById('btn-show-photos')
const $pcImaShowPhotos= document.getElementById('pc-image-show-photos')
const $imgTitleShowPhotos= document.getElementById('images-title-show-photos')

const btnShowPhotos = new InteractiveBtn( $btnShowPhotos, $pcImaShowPhotos, $imgTitleShowPhotos)

// ------------------------------------------------------
