import './less/index.less'

// Your code goes here!

//1
window.addEventListener('load', (evt) => {
    console.log("Everything is loaded, let's freaking go!!!")
})    
//2
const logoHeading = document.querySelector('.logo-heading');
logoHeading.addEventListener('mouseover', (evt) => {
    logoHeading.textContent = 'No double decker buses here!!!'
})

//3
logoHeading.addEventListener('mouseleave', (evt) => {
    logoHeading.textContent = 'Fun Bus'
})

//4
const homeLink = document.querySelector('.nav-link:nth-child(1)');
homeLink.addEventListener('click', (evt) => {
    alert('Are you sure you want to go home?')
})

//5
const aboutLink = document.querySelector('.nav-link:nth-child(2)');
aboutLink.addEventListener('mouseenter', (evt) => {
    aboutLink.style.border = "solid 2px red"
})
aboutLink.addEventListener('mouseleave', (evt) => {
    aboutLink.style.border = ""
})

//6
const blogLink = document.querySelector('.nav-link:nth-child(3)');
blogLink.addEventListener('click', (evt) => {
    blogLink.title = "Surprise"
    blogLink.href = "https://www.tatlerasia.com/lifestyle/travel/inside-lufthansa-explorer-325-million-party-plane"
})

//7
const myHeader = document.querySelector('header')
const myBody = document.querySelector('body')
myBody.addEventListener("click", (evt) => {
    myBody.style.backgroundColor = "salmon"
})
myHeader.addEventListener("click", (evt) => {
    myHeader.style.backgroundColor = "#34ebeb"
})


//8
const funInSun = document.querySelector('h4')
funInSun.addEventListener('mouseenter', (evt) => {
    funInSun.textContent = "Bring some SPF"
})
funInSun.addEventListener('mouseleave', (evt) => {
    funInSun.textContent = "Fun In The sun"
})

//9
const mountainExcursion = document.querySelector('.destination:nth-child(2) h4')
mountainExcursion.addEventListener('mouseenter', (evt) => {
    mountainExcursion.textContent = "Pack your hiking boots"
})
mountainExcursion.addEventListener('mouseleave', (evt) => {
    mountainExcursion.textContent = "Mountain Excursion"
})
//10
const islandGetaway = document.querySelector('.destination:nth-child(3) h4')
islandGetaway.addEventListener('mouseenter', (evt) => {
    islandGetaway.textContent = "Watch out for sharks!"
})
islandGetaway.addEventListener('mouseleave', (evt) => {
    islandGetaway.textContent = "Island Getaway"
})


// const mapImage = document.querySelector("img-content");
// const mapSpinning = [
//     { transform: "rotate(0) scale (1)" },
//     { transform: "rotate(360deg) scale (0)" }
// ];
// const mapTiming = {
//     duration: 1000,
//     iterations: 1,
// }
// mapImage.addEventListener("click", () => {
//     mapImage.animate(mapSpinning, mapTiming)
// })
//9

