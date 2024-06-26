

import { loadHome } from './loadHome.js'
import {loadMenu} from './loadMenu.js'
import { loadAbout } from './loadAbout.js'

import './styles.css';

const content=document.querySelector('#content')
const homeButton=document.querySelector('#home')
const menuButton=document.querySelector('#menu')
const aboutButton=document.querySelector('#about')


homeButton.addEventListener('click',() =>{
    clearPage()
    loadHome()
    homeButton.disabled=true
    menuButton.disabled=false
    aboutButton.disabled=false
})

menuButton.addEventListener('click',() =>{
    clearPage()
    loadMenu()
    homeButton.disabled=false
    menuButton.disabled=true
    aboutButton.disabled=false
})


aboutButton.addEventListener('click',() =>{
    clearPage()
    loadAbout()
    homeButton.disabled=false
    menuButton.disabled=false
    aboutButton.disabled=true
})

let clearPage=function(){
    while( content.hasChildNodes() ){
        content.removeChild(content.lastChild);} 
    }

    loadHome()
    homeButton.disabled=true