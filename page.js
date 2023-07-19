let color = document.getElementById('black')
color.addEventListener('click', () => {
    color.style.borderColor = "white";
    color2.style.borderColor = "gray"
})
let color2 = document.getElementById('red')
color2.addEventListener('click', () => {
    color2.style.borderColor = "white"
    color.style.borderColor = "gray";
})

let t1 = document.getElementById('t1')
let t2 = document.getElementById('t2')
let image = document.getElementById('Enlarge_photo')
t1.addEventListener('click', () => {
    t1.style.borderColor = "red";
    t1.style.borderStyle = "solid";
    t2.style.borderColor = "white";
    t2.style.borderStyle = "dotted";
    image.style.backgroundImage = "url('M.A.G.A..jpg')";
})
t2.addEventListener('click', () => {
    t2.style.borderColor = "red";
    t2.style.borderStyle = "solid";
    t1.style.borderColor = "white";
    t1.style.borderStyle = "dotted";
    image.style.backgroundImage = "url('SONS A BITCHES ORIGINAL LOGO TEE.webp')";
})

let minus = document.getElementById('minus')
minus.addEventListener('click', () => {
    let valuee = document.getElementById('input').value
    valuee = parseInt(valuee)
    if (valuee <= 0) {
        document.getElementById('warning').innerHTML = "Enter valid positive number";
    } else {
        document.getElementById('input').value = valuee - 1;
        document.getElementById('warning').innerHTML = "";
    }
})

let plus = document.getElementById('plus')
plus.addEventListener('click', () => {
    let valuee = document.getElementById('input').value
    valuee = parseInt(valuee)
    document.getElementById('input').value = valuee + 1;
    document.getElementById('warning').innerHTML = "";
})

document.getElementById('input').addEventListener('change' , ()=>{
    let valuee = document.getElementById('input').value
    valuee = parseInt(valuee)
    if(valuee < 0){
        document.getElementById('input').value = 0;
    }else{
        document.getElementById('warning').innerHTML = "";
    }
})

let size1 = document.getElementById('size_1') 
let size2 = document.getElementById('size_2') 
let size3 = document.getElementById('size_3') 
let size4 = document.getElementById('size_4') 
let size5 = document.getElementById('size_5') 
let size6 = document.getElementById('size_6') 
let size7 = document.getElementById('size_7') 
let size8 = document.getElementById('size_8') 
let size9 = document.getElementById('size_9') 
let price = document.getElementById("price")

size1.addEventListener('click' , ()=>{
    price.innerHTML = "$35"
    size1.style.borderColor = "White";
    size1.style.color = "White";
    size2.style.borderColor = "gray";
    size2.style.color = "gray";
    size3.style.borderColor = "gray";
    size3.style.color = "gray";
    size4.style.borderColor = "gray";
    size4.style.color = "gray";
    size5.style.borderColor = "gray";
    size5.style.color = "gray";
    size6.style.borderColor = "gray";
    size6.style.color = "gray";
    size7.style.borderColor = "gray";
    size7.style.color = "gray";
    size8.style.borderColor = "gray";
    size8.style.color = "gray";
    size9.style.borderColor = "gray";
    size9.style.color = "gray";
})
size2.addEventListener('click' , ()=>{
    price.innerHTML = "$35"
    size2.style.borderColor = "White";
    size2.style.color = "White";
    size1.style.borderColor = "gray";
    size1.style.color = "gray";
    size3.style.borderColor = "gray";
    size3.style.color = "gray";
    size4.style.borderColor = "gray";
    size4.style.color = "gray";
    size5.style.borderColor = "gray";
    size5.style.color = "gray";
    size6.style.borderColor = "gray";
    size6.style.color = "gray";
    size7.style.borderColor = "gray";
    size7.style.color = "gray";
    size8.style.borderColor = "gray";
    size8.style.color = "gray";
    size9.style.borderColor = "gray";
    size9.style.color = "gray";
})
size3.addEventListener('click' , ()=>{
    price.innerHTML = "$35"
    size3.style.borderColor = "White";
    size3.style.color = "White";
    size2.style.borderColor = "gray";
    size2.style.color = "gray";
    size1.style.borderColor = "gray";
    size1.style.color = "gray";
    size4.style.borderColor = "gray";
    size4.style.color = "gray";
    size5.style.borderColor = "gray";
    size5.style.color = "gray";
    size6.style.borderColor = "gray";
    size6.style.color = "gray";
    size7.style.borderColor = "gray";
    size7.style.color = "gray";
    size8.style.borderColor = "gray";
    size8.style.color = "gray";
    size9.style.borderColor = "gray";
    size9.style.color = "gray";
})
size4.addEventListener('click' , ()=>{
    price.innerHTML = "$38"
    size4.style.borderColor = "White";
    size4.style.color = "White";
    size2.style.borderColor = "gray";
    size2.style.color = "gray";
    size3.style.borderColor = "gray";
    size3.style.color = "gray";
    size1.style.borderColor = "gray";
    size1.style.color = "gray";
    size5.style.borderColor = "gray";
    size5.style.color = "gray";
    size6.style.borderColor = "gray";
    size6.style.color = "gray";
    size7.style.borderColor = "gray";
    size7.style.color = "gray";
    size8.style.borderColor = "gray";
    size8.style.color = "gray";
    size9.style.borderColor = "gray";
    size9.style.color = "gray";
})
size5.addEventListener('click' , ()=>{
    price.innerHTML = "$38"
    size5.style.borderColor = "White";
    size5.style.color = "White";
    size2.style.borderColor = "gray";
    size2.style.color = "gray";
    size3.style.borderColor = "gray";
    size3.style.color = "gray";
    size4.style.borderColor = "gray";
    size4.style.color = "gray";
    size1.style.borderColor = "gray";
    size1.style.color = "gray";
    size6.style.borderColor = "gray";
    size6.style.color = "gray";
    size7.style.borderColor = "gray";
    size7.style.color = "gray";
    size8.style.borderColor = "gray";
    size8.style.color = "gray";
    size9.style.borderColor = "gray";
    size9.style.color = "gray";
})
size6.addEventListener('click' , ()=>{
    price.innerHTML = "$40"
    size6.style.borderColor = "White";
    size6.style.color = "White";
    size2.style.borderColor = "gray";
    size2.style.color = "gray";
    size3.style.borderColor = "gray";
    size3.style.color = "gray";
    size4.style.borderColor = "gray";
    size4.style.color = "gray";
    size5.style.borderColor = "gray";
    size5.style.color = "gray";
    size1.style.borderColor = "gray";
    size1.style.color = "gray";
    size7.style.borderColor = "gray";
    size7.style.color = "gray";
    size8.style.borderColor = "gray";
    size8.style.color = "gray";
    size9.style.borderColor = "gray";
    size9.style.color = "gray";
})
size7.addEventListener('click' , ()=>{
    price.innerHTML = "$40"
    size7.style.borderColor = "White";
    size7.style.color = "White";
    size2.style.borderColor = "gray";
    size2.style.color = "gray";
    size3.style.borderColor = "gray";
    size3.style.color = "gray";
    size4.style.borderColor = "gray";
    size4.style.color = "gray";
    size5.style.borderColor = "gray";
    size5.style.color = "gray";
    size6.style.borderColor = "gray";
    size6.style.color = "gray";
    size1.style.borderColor = "gray";
    size1.style.color = "gray";
    size8.style.borderColor = "gray";
    size8.style.color = "gray";
    size9.style.borderColor = "gray";
    size9.style.color = "gray";
})
size8.addEventListener('click' , ()=>{
    price.innerHTML = "$41"
    size8.style.borderColor = "White";
    size8.style.color = "White";
    size2.style.borderColor = "gray";
    size2.style.color = "gray";
    size3.style.borderColor = "gray";
    size3.style.color = "gray";
    size4.style.borderColor = "gray";
    size4.style.color = "gray";
    size5.style.borderColor = "gray";
    size5.style.color = "gray";
    size6.style.borderColor = "gray";
    size6.style.color = "gray";
    size7.style.borderColor = "gray";
    size7.style.color = "gray";
    size1.style.borderColor = "gray";
    size1.style.color = "gray";
    size9.style.borderColor = "gray";
    size9.style.color = "gray";
})
size9.addEventListener('click' , ()=>{
    price.innerHTML = "NOT FIXED"
    size9.style.borderColor = "White";
    size9.style.color = "White";
    size2.style.borderColor = "gray";
    size2.style.color = "gray";
    size3.style.borderColor = "gray";
    size3.style.color = "gray";
    size4.style.borderColor = "gray";
    size4.style.color = "gray";
    size5.style.borderColor = "gray";
    size5.style.color = "gray";
    size6.style.borderColor = "gray";
    size6.style.color = "gray";
    size7.style.borderColor = "gray";
    size7.style.color = "gray";
    size8.style.borderColor = "gray";
    size8.style.color = "gray";
    size1.style.borderColor = "gray";
    size1.style.color = "gray";
})
size1.addEventListener('click' , ()=>{
    size1.style.borderColor = "White";
    size1.style.color = "White";
    size2.style.borderColor = "gray";
    size2.style.color = "gray";
    size3.style.borderColor = "gray";
    size3.style.color = "gray";
    size4.style.borderColor = "gray";
    size4.style.color = "gray";
    size5.style.borderColor = "gray";
    size5.style.color = "gray";
    size6.style.borderColor = "gray";
    size6.style.color = "gray";
    size7.style.borderColor = "gray";
    size7.style.color = "gray";
    size8.style.borderColor = "gray";
    size8.style.color = "gray";
    size9.style.borderColor = "gray";
    size9.style.color = "gray";
})

let star1 = document.getElementById('star1');
let star2 = document.getElementById('star2');
let star3 = document.getElementById('star3');
let star4 = document.getElementById('star4');
let star5 = document.getElementById('star5');

star1.addEventListener('mouseenter' , ()=>{
    star1.style.color = '#FFDF00'
    star2.style.color = 'white'
    star3.style.color = 'white'
    star4.style.color = 'white'
    star5.style.color = 'white'
})
star2.addEventListener('mouseenter' , ()=>{
    star1.style.color = '#FFDF00'
    star2.style.color = '#FFDF00'
    star3.style.color = 'white'
    star4.style.color = 'white'
    star5.style.color = 'white'
})
star3.addEventListener('mouseenter' , ()=>{
    star1.style.color = '#FFDF00'
    star2.style.color = '#FFDF00'
    star3.style.color = '#FFDF00'
    star4.style.color = 'white'
    star5.style.color = 'white'
})
star4.addEventListener('mouseenter' , ()=>{
    star1.style.color = '#FFDF00'
    star2.style.color = '#FFDF00'
    star3.style.color = '#FFDF00'
    star4.style.color = '#FFDF00'
    star5.style.color = 'white'
})
star5.addEventListener('mouseenter' , ()=>{
    star1.style.color = '#FFDF00'
    star2.style.color = '#FFDF00'
    star3.style.color = '#FFDF00'
    star4.style.color = '#FFDF00'
    star5.style.color = '#FFDF00'
})