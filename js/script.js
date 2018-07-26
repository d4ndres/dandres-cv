
// Prototipe buttons
class btnChanger{


  constructor(btn , imgDesktop, imgCellPhone){
    this.btn = btn
    this.imgDesktop = imgDesktop // state = true
    this.imgCellPhone = imgCellPhone || undefined //state = flase
    this.state = true
    this.imgCellPhone.style.display = 'none'
    this.btn.addEventListener('mouseup', () => this.onClcik())
  }
  onClcik(){

    this.state = !this.state
    if (this.state) {
      this.imgDesktop.style.display = 'initial'
      this.imgCellPhone.style.display = 'none'      
      this.btn.style.background = 'radial-gradient(circle, red, #000)'
    } else {
      this.imgDesktop.style.display = 'none'
      this.imgCellPhone.style.display = 'initial'
      this.btn.style.background = '#ff0000'
    }
  }
}

class btnSlideDescription{
  constructor(btn, slide){
    this.btn = btn
    this.slide = slide
    this.state = false 
    this.btn.addEventListener('mouseup', () => this.onClcik())
  }
  onClcik(){
    this.state = !this.state
    if (this.state) {
      this.slide.style.width = '50vw'
      this.slide.style.fontSize = '16px'
      this.btn.style.background = '#0078FF'
    } else {
      this.slide.style.width =  '0'
      this.slide.style.fontSize = '0' 
      this.btn.style.background = 'radial-gradient(circle, #0078FF, #000)'
    }



  }
}
//arreglar este codigo
class ModalImg{
  constructor(btn,box,overlay){
    this.btn = btn
    this.box = box
    this.overlay = overlay
    this.state = false
    this.btn.addEventListener('click', () => this.onClcik())
    this.overlay.addEventListener('click', () => this.closeModal())
  }
  onClcik(){
    this.overlay.classList.add('active')
    this.box.classList.add('active')
  }
  closeModal(){

    this.overlay.classList.remove('active')
    this.box.classList.remove('active')
  }
  
}


//heph
const $btnHeph = document.getElementById('change-btn')
const $pcImaHeph = document.getElementById('pc-image-heph')
const $phoneImaHeph = document.getElementById('phone-image-heph')

const $btnSlideHeph = document.getElementById('btn-slide-heph')
const $descriptionSlideHeph = document.getElementById('description-slide-heph')

const $images = document.getElementById('images')
const $box = document.getElementById('box')
const $overlay = document.getElementById('dark-overlay')

const hephChanger = new btnChanger( $btnHeph, $pcImaHeph, $phoneImaHeph )
const hephSlide = new btnSlideDescription ( $btnSlideHeph, $descriptionSlideHeph)

const modal = new ModalImg( $images, $box, $overlay )

// class InteractiveBtn{
//   constructor( btn , imgPc, imgPhone){
//     this.btn = btn
//     this.imgPc = imgPc  //state = true
//     this.imgPhone = imgPhone || undefined//state = false
//     this.state = true
//     try {
//       this.imgPhone.style.display = 'none'
//       this.btn.addEventListener('mouseup', () => this.onClcik())
//     } catch(error){
//       this.btn.style.display = 'none'
//     };
//   }
//   onClcik(){
//     this.state = !this.state

//     if (this.state && ( this.imgPc != this.imgPhone )) {
//       this.imgPc.style.display = 'initial'
//       this.imgPhone.style.display = 'none'

//     } else {
//       this.imgPc.style.display = 'none'
//       this.imgPhone.style.display = 'initial'

//     }
//   }
// }
// heph

// showPhotos

// const $btnShowPhotos = document.getElementById('btn-show-photos')
// const $pcImaShowPhotos= document.getElementById('pc-image-show-photos')
// const $imgTitleShowPhotos= document.getElementById('images-title-show-photos')

// const btnShowPhotos = new InteractiveBtn( $btnShowPhotos, $pcImaShowPhotos, $imgTitleShowPhotos)

// ------------------------------------------------------
