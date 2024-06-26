import paella from './images/paella.jpg'
import risotto from './images/Seafood_risotto.jpg'
import friedRice from './images/fried-rice.jpg'
import ramen from './images/ramen.jpg'
import sashimi from './images/sashimi.jpg'
import curry from './images/curry.jpg'
import squid from './images/squid.jpg'


export function loadMenu(){
    const paellaPic=document.createElement('img')
    paellaPic.classList.add('food')
    paellaPic.setAttribute('src',paella)
    content.appendChild(paellaPic)

    const risottoPic=document.createElement('img')
    risottoPic.classList.add('food')
    risottoPic.setAttribute('src',risotto)
    content.appendChild(risottoPic)

    const friedRicePic=document.createElement('img')
    friedRicePic.classList.add('food')
    friedRicePic.setAttribute('src',friedRice)
    content.appendChild(friedRicePic)

    const ramenPic=document.createElement('img')
    ramenPic.classList.add('food')
    ramenPic.setAttribute('src',ramen)
    content.appendChild(ramenPic)

    const sashimiPic=document.createElement('img')
    sashimiPic.classList.add('food')
    sashimiPic.setAttribute('src',sashimi)
    content.appendChild(sashimiPic)

    const curryPic=document.createElement('img')
    curryPic.classList.add('food')
    curryPic.setAttribute('src',curry)
    content.appendChild(curryPic)

    const squidPic=document.createElement('img')
    squidPic.classList.add('food')
    squidPic.setAttribute('src',squid)
    content.appendChild(squidPic)



}