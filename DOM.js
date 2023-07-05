// 1
// Document Objekt Model

// 2
// можно получать с JS данные от HTML

// 3
const txt = document.getElementById("txt")
txt.innerText = 'Новый текст'

// 4
console.log(txt.innerText);

// 5
const master = document.getElementsByClassName("master")

// 6
const master1 = document.getElementById("master1")

// 7
// const div = document.getElementsByTagName("div")

// 8,9,10
const tit = document.querySelector('[title]')
const tit1 = document.querySelector('[title="someText"]')
const tit2 = document.getElementsByTagName("div")

// 11
const someTextt = document.querySelector(".someTextt")

// 12
const someTexttt = document.getElementById("#someTexttt")

// 13
// const rrr = document.querySelector("div")

// 14
const inp = document.getElementsByTagName("input")
inp.number = "99"


// 15
 const block = document.getElementById("block")
// block.style = 'background: red'

// 16
const n16 = document.getElementById("n16")
n16.title = "message"

// 17
// createElement

// 18
// removeChild

// 19
// appendChild

// 20
// replaceChild

// 21
// write