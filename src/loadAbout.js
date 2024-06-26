import zeff from './images/Zeff.jpg'
import patty from './images/patty.jpg'
import carne from './images/carne.jpeg'
import sanji from './images/sanji.jpg'
import luffy from './images/chore-boy.jpg'
export function loadAbout(){

    const zeffPic=document.createElement('img')
    zeffPic.classList.add('employees')
    zeffPic.setAttribute('src',zeff)
    content.appendChild(zeffPic)

    const sanjiPic=document.createElement('img')
    sanjiPic.classList.add('employees')
    sanjiPic.setAttribute('src',sanji)
    content.appendChild(sanjiPic)

    const pattyPic=document.createElement('img')
    pattyPic.classList.add('employees')
    pattyPic.setAttribute('src',patty)
    content.appendChild(pattyPic)

    const carnePic=document.createElement('img')
    carnePic.classList.add('employees')
    carnePic.setAttribute('src',carne)
    content.appendChild(carnePic)

    const luffyPic=document.createElement('img')
    luffyPic.classList.add('employees')
    luffyPic.setAttribute('src',luffy)
    content.appendChild(luffyPic)

    
}