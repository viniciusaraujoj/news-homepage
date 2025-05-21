const menuBtn = document.querySelector('.header-menu')
const nav = document.querySelector('.header-nav')
const closeBtn = document.querySelector('.header-close')

menuBtn.addEventListener('click', () => {
  nav.classList.add('open')
  document.body.classList.add('overlay')
})
closeBtn.addEventListener('click', () => {
  nav.classList.remove('open')
  document.body.classList.remove('overlay')
})
