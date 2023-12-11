
//! otamatik resim döngüsü


const slides = document.querySelectorAll('.slide')
const next = document.getElementById('next')
const prev = document.getElementById('prev')
const auto = true;
const intervalTime = 3000;
let slideInterval; 

const nextSlide = () => {
    const activeSlide = document.querySelector('.active')
    activeSlide.classList.remove('active')

    if (activeSlide.nextElementSibling){
        activeSlide.nextElementSibling.classList.add('active')

    }else{
        slides[0].classList.add('active')
    }

}
const prevSlide = () => {
    const activeSlide = document.querySelector('.active')
    activeSlide.classList.remove('active')

    if (activeSlide.previousElementSibling){
        activeSlide.previousElementSibling.classList.add('active')

    }else{
        slides[slides.length -1].classList.add('active')
    }

}

next.addEventListener('click',()=>{
    nextSlide()
    if (auto) {
        clearInterval(slideInterval)
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});
prev.addEventListener('click',()=>{
    prevSlide()
});

if (auto) {
    slideInterval = setInterval(nextSlide, intervalTime);
}



//! otamatik resim döngüsü




// ! sidebar 

let btn = document.getElementById('btn')
let sidebar = document.querySelector('.sidebar')
let searchBtn = document.querySelector('.bx-search')
let tooltips = document.querySelectorAll('.toooltip')
console.log(tooltips);

btn.addEventListener('click', function() {
    sidebar.classList.toggle('aktif');
    if (sidebar.classList.contains('aktif')) {
        tooltips.forEach(tool => {
            console.log(tool);
            tool.style.display = 'none';
        })
    } else {
            tooltips.forEach(tool => {
                console.log(tool);
                tool.style.display = 'block';
            })
    }
});

searchBtn.addEventListener('click', function() {
    sidebar.classList.toggle('aktif');
    if (sidebar.classList.contains('aktif')) {
        tooltips.forEach(tool => {
            console.log(tool);
            tool.style.display = 'none';
        })
    } else {
            tooltips.forEach(tool => {
                console.log(tool);
                tool.style.display = 'block';
            })
        }
});



// btn.onclick = function () {
//     sidebar.classList.toggle('active')
// }
// searchBtn.onclick = function () {
//     sidebar.classList.toggle('active')
// }

// ! sidebar 