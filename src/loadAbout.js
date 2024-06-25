import baratie from './images/Baratie_Before_Timeskip.jpg'
export function loadAbout(){
   
    const header=document.createElement('h1')
    header.textContent='Eat at Baratie!'
    content.appendChild(header)
    
    const baratiePic=document.createElement('img')
    baratiePic.classList.add('baratie')
    baratiePic.setAttribute('src',baratie)
    content.appendChild(baratiePic)

    
}