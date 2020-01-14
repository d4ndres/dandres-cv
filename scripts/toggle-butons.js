const btnFramework = document.getElementById('btn-framework')
const btnMovile = document.getElementById('btn-movile')
const btnDesktop = document.getElementById('btn-desktop')
const imgDesktop = document.getElementById('desktop-crossroad')
const imgMovile = document.getElementById('movile-crossroad')
let timeout = true
let stateBtnDesktop = true


btnFramework.addEventListener('click', () => {
    if ( timeout ) {
        if (stateBtnDesktop) {
            
            imgDesktop.style.display = 'none'
            imgMovile.style.display = 'block'
            
        } else {
            imgDesktop.style.display = 'block'
            imgMovile.style.display = 'none'
            
        }




        btnMovile.classList.toggle('active')
        btnMovile.classList.toggle('opacity1')
        btnDesktop.classList.toggle('active')
        btnDesktop.classList.toggle('opacity0')
        console.log('un click')
        stateBtnDesktop = !stateBtnDesktop
        timeout = false
        setTimeout( () => timeout = true , 400)
    }
})


