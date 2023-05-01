let stars = document.getElementById('stars')
let moon = document.getElementById('moon')
let mountain_behind = document.getElementById('mountain_behind')
let move = document.getElementById('move')
let btn = document.getElementById('btn')
let samurai_front = document.getElementById('samurai_front')
let header = document.querySelector('header')

window.addEventListener('scroll', function () {
  let value = window.scrollY
  stars.style.left = value * 0.25 + 'px'
  moon.style.top = value * 1.05 + 'px'
  mountain_behind.style.top = value * 3 + 'px'
  samurai_front.style.top = value * 3 + 'px'
  // text.style.marginRight = value * 1 + 'px'
  move.style.marginTop = value * 1.5 + 'px'
  // btn.style.marginTop = value * 1 + 'px'
  header.style.top = value * 0.5 + 'px'
})
