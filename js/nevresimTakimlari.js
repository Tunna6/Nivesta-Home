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
