import paella from './images/paella.jpg'
import risotto from './images/Seafood_risotto.jpg'
import friedRice from './images/fried-rice.jpg'
import ramen from './images/ramen.jpg'
import sashimi from './images/sashimi.jpg'
import curry from './images/curry.jpg'
import squid from './images/squid.jpg'


export function loadMenu(){

    const paellaH=document.createElement('h3')
    paellaH.classList.add('foodHeader')
    paellaH.textContent='Dress Shrimp Paella'
    content.appendChild(paellaH)

    const paellaPic=document.createElement('img')
    paellaPic.classList.add('food')
    paellaPic.setAttribute('src',paella)
    content.appendChild(paellaPic)

    const paellaT=document.createElement('p')
    paellaT.classList.add('foodText')
    paellaT.textContent='Made from stir-fried rice and mix of seafood such as clams, lobster, shrimps, mussels, and calamari.'
    content.appendChild(paellaT)

    const risottoH=document.createElement('h3')
    risottoH.classList.add('foodHeader')
    risottoH.textContent='Seafood Risotto'
    content.appendChild(risottoH)

    const risottoPic=document.createElement('img')
    risottoPic.classList.add('food')
    risottoPic.setAttribute('src',risotto)
    content.appendChild(risottoPic)

    const risottoT=document.createElement('p')
    risottoT.classList.add('foodText')
    risottoT.textContent='Risotto made with a variety of seafood such as shrimp, calamari rings, and octopus tentacles.'
    content.appendChild(risottoT)

    const friedRiceH=document.createElement('h3')
    friedRiceH.classList.add('foodHeader')
    friedRiceH.textContent='Seafood Fried Rice'
    content.appendChild(friedRiceH)

    const friedRicePic=document.createElement('img')
    friedRicePic.classList.add('food')
    friedRicePic.setAttribute('src',friedRice)
    content.appendChild(friedRicePic)

    const friedRiceT=document.createElement('p')
    friedRiceT.classList.add('foodText')
    friedRiceT.textContent='One of our specialty dishes, Seafood Fried Rice is a dish of cooked rice that has been stir-fried in a frying pan and uses octopus, squid, and shrimp as its main ingredients, along with eggs and vegetables.'
    content.appendChild(friedRiceT)


    const ramenH=document.createElement('h3')
    ramenH.classList.add('foodHeader')
    ramenH.textContent='Ramen'
    content.appendChild(ramenH)

    const ramenPic=document.createElement('img')
    ramenPic.classList.add('food')
    ramenPic.setAttribute('src',ramen)
    content.appendChild(ramenPic)

    const ramenT=document.createElement('p')
    ramenT.classList.add('foodText')
    ramenT.textContent='A hot noodle soup that combines thin wheat noodles with a fish-based broth, served with vegetables.'
    content.appendChild(ramenT)


    const sashimiH=document.createElement('h3')
    sashimiH.classList.add('foodHeader')
    sashimiH.textContent='Sashimi'
    content.appendChild(sashimiH)

    const sashimiPic=document.createElement('img')
    sashimiPic.classList.add('food')
    sashimiPic.setAttribute('src',sashimi)
    content.appendChild(sashimiPic)

    const sashimiT=document.createElement('p')
    sashimiT.classList.add('foodText')
    sashimiT.textContent='Sashimi consists of very fresh, raw fish, sliced into pieces.'
    content.appendChild(sashimiT)

    const curryH=document.createElement('h3')
    curryH.classList.add('foodHeader')
    curryH.textContent='Curry Rice'
    content.appendChild(curryH)

    const curryPic=document.createElement('img')
    curryPic.classList.add('food')
    curryPic.setAttribute('src',curry)
    content.appendChild(curryPic)

    const curryT=document.createElement('p')
    curryT.classList.add('foodText')
    curryT.textContent='Served with rice, our curry consists of a mixture of potatos, carrots, beef, and a spicy sauce made from a combination of spices and herbs.'
    content.appendChild(curryT)

    const squidH=document.createElement('h3')
    squidH.classList.add('foodHeader')
    squidH.textContent='Rose Squid Ink Pasta'
    content.appendChild(squidH)

    const squidPic=document.createElement('img')
    squidPic.classList.add('food')
    squidPic.setAttribute('src',squid)
    content.appendChild(squidPic)

    const squidT=document.createElement('p')
    squidT.classList.add('foodText')
    squidT.textContent='Dyed black with squid ink, this dish is a combination of seafood pasta with squid as the main ingredient.'
    content.appendChild(squidT)



}