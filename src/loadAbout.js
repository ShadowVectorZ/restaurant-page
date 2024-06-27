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


    const zeffP=document.createElement('p')
    zeffP.classList.add('employeesText')
    zeffP.textContent='Cofounder and captain of the restaurant, Zeff is our head chef!'
    content.appendChild(zeffP)

    const sanjiPic=document.createElement('img')
    sanjiPic.classList.add('employees')
    sanjiPic.setAttribute('src',sanji)
    content.appendChild(sanjiPic)

    const sanjiP=document.createElement('p')
    sanjiP.classList.add('employeesText')
    sanjiP.textContent='Adopted son of Zeff, Sanji is our sous chef, and cofounded Baratie when he was only nine years old!'
    content.appendChild(sanjiP)


    const pattyPic=document.createElement('img')
    pattyPic.classList.add('employees')
    pattyPic.setAttribute('src',patty)
    content.appendChild(pattyPic)

    const pattyP=document.createElement('p')
    pattyP.classList.add('employeesText')
    pattyP.textContent='One of our main cooks, Patty is our head patissier! (meaning he specializes in cakes and other pastry)'
    content.appendChild(pattyP)

    const carnePic=document.createElement('img')
    carnePic.classList.add('employees')
    carnePic.setAttribute('src',carne)
    content.appendChild(carnePic)

    const carneP=document.createElement('p')
    carneP.classList.add('employeesText')
    carneP.textContent='When it comes to cooking meat, Carne is our best chef! (go figure)'
    content.appendChild(carneP)

    const luffyPic=document.createElement('img')
    luffyPic.classList.add('employees')
    luffyPic.setAttribute('src',luffy)
    content.appendChild(luffyPic)

    const luffyP=document.createElement('p')
    luffyP.classList.add('employeesText')
    luffyP.textContent='Meet our newest member, Chore Boy!'
    content.appendChild(luffyP)
}