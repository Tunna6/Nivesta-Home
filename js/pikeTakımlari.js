// ! sidebar 

let btn = document.getElementById('btn')
let sidebar = document.querySelector('.sidebar')
let searchBtn = document.querySelector('.bx-search')
let tooltips = document.querySelectorAll('.toooltip')
console.log(tooltips);

btn.addEventListener('click', function () {
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

searchBtn.addEventListener('click', function () {
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

//! sidebar

//! sepet eski

// let openShopping = document.querySelector('.shopping')
// let closeShopping = document.querySelector('.closeShopping')
// let list = document.querySelector('.list')
// let listCard = document.querySelector('.listCard')
// let body = document.querySelector('body')
// let total = document.querySelector('.total')
// let quantity = document.querySelector('.quantity')

// openShopping.addEventListener('click', () => {
//     body.classList.add('active')
// })

// closeShopping.addEventListener('click', () => {
//     body.classList.remove('active')
// })

// let products = [
//     {
//         id: '1',
//         name: 'Ürün 1',
//         image: 'css/img/451732_5c2bede987074f23bdf77ab3426378e8_mv2.jpg',
//         price: 12444
//     },
//     {
//         id: '2',
//         name: 'Ürün 2',
//         image: 'css/img/451732_5c2bede987074f23bdf77ab3426378e8_mv2.jpg',
//         price: 22444
//     },
//     {
//         id: '3',
//         name: 'Ürün 3',
//         image: 'css/img/pngtree-turquoise-textile-in-3d-a-stunning-square-rendering-image_3641946.jpg',
//         price: 32444
//     }
// ];

// function initApp() {
//     products.forEach((value, key) => {
//         let newDiv = document.createElement('div');
//         newDiv.classList.add('item');
//         newDiv.innerHTML = `
//             <img src='${value.image}'/>
//             <div class='title'>${value.name}</div>
//             <div class='price'>$${value.price.toLocaleString()}</div>
//             <button onclick = 'addToCard(${key})'>Add to Card</button>
//         `;
//         list.appendChild(newDiv);
//     });
// }

// initApp();

// function addToCard(key) {
//     if (listCard[key] == null) {
//         listCard[key] = products[key];
//         listCard[key].quantity = 1;
//     }
//     reloadCard()
// }

// function reloadCard() {
//     listCard.innerHTML = ``;
//     let count = 0;
//     let totalPrice = 0;
//     listCard.forEach((value, key) => {
//         totalPrice = totalPrice + value.price;
//         count = count + value.quantity;

//         if (value != null) {
//             let newDiv = document.createElement('li')
//             newDiv.innerHTML = `
//                 <div><img src="${value.image}"></div>
//                 <div> ${value.name}</div>
//                 <div> ${value.price.toLocaleString()}</div>
//                 <div> ${value.quantity}</div>
//                 <div>
//                     <button onclick='changeQuantity(${key}, ${value.quantity - 1})'>-</button>
//                     <div class="count">${value.quantity}</div>
//                     <button onclick='changeQuantity(${key}, ${value.quantity + 1})'>+</button>
//                 </div>
//             `
//             listCard.appendChild(newDiv);
//         }
//     });
//     total.innerText = totalPrice.toLocaleString();
//     quantity.innerText = count;
// }


//! yeni sepet 

const span = document.querySelector('#span')
span.style.top = '15px'
span.style.padding = '10px 10px'
span.style.position = 'absolute'

let sepet = []

let localItem = localStorage.getItem('sepet')
let toplamSepet = 0

if (localItem) {
    sepet = JSON.parse(localItem)
    // console.log(sepet)
    sepet.forEach((urun) => {
        toplamSepet += urun.quantity
    })

    if (sepet.length == 0) {
        span.textContent = ''
    } else {
        span.textContent = toplamSepet
    }




} 

console.log(window.location.href)
console.log(sepet.length)

if (window.location.href == 'http://127.0.0.1:5500/pikeTak%C4%B1mlari.html') {
    const row = document.querySelector('.row')

   // !! arama butonu

//    const input = document.getElementById('input')

//    input.addEventListener('input', (e) => {
//         console.log(e.target.value.toLowerCase());   
//         let kullanıcıDeger = e.target.value.toLowerCase()

//         const col = document.querySelectorAll('.col-12')

//         for (let i = 0; i < col.length; i++) {
//             // console.log([i].firstChild.firstChild.nextSibling.firstChild.textContent);
//             let urunAdı = col[i].firstChild.firstChild.nextSibling.firstChild.textContent.toLowerCase()

//             let urunAcıklama = col[i].firstChild.firstChild.nextSibling.firstChild.nextSibling.textContent.toLocaleLowerCase()

//             console.log(urunAdı.indexOf(kullanıcıDeger));
           
//             if (urunAdı.indexOf(kullanıcıDeger) != -1  || urunAcıklama.indexOf(kullanıcıDeger) != -1) {
//                 col[i].style.display = 'flex'
//             } else {
//                 col[i].style.display = 'none'
//             }
//         }



        
//         // let urunler = urunler.filter((urun) => {
//         //     return urun.isim.toLowerCase().includes(kullanıcıDeger)
//         // })
//    })


    urunler.forEach((urun) => {

        // console.log(urun)

        urun.quantity = 1

        // console.log(urun)

        const col = document.createElement('div')
        col.classList.add('col-lg-3', 'col-sm-6', 'col-12')
        col.style.padding = '20px'

        const parentDiv = document.createElement('div')
        parentDiv.style.width = '100%'
        parentDiv.style.height = '420px'
        parentDiv.style.border = "1px solid black"
        parentDiv.style['boxShadow'] = '0 50px 50px #757676';
        parentDiv.style['borderRadius'] = '10px';

        const imgDiv = document.createElement('div')
        imgDiv.style.width = "100%"
        imgDiv.style.height = "200px"

        const img = document.createElement('img')
        img.src = urun.fotoğraf
        img.style.width = "100%"
        img.style.height = "100%"
        img.style['borderRadius'] = '10px 10px 0 0';

        const cardBody = document.createElement('div')
        cardBody.style.width = "100%"
        cardBody.style.height = "220px"
        cardBody.classList.add('ms-1')

        const baslik = document.createElement('h5')
        baslik.textContent = urun.isim

        const aciklama = document.createElement('p')
        aciklama.textContent = urun.açıklama
        const aciklama2 = document.createElement('p')
        aciklama2.textContent = `${urun.fiyat}$`

        const btn = document.createElement('button')
        btn.classList.add('btn', 'btn-dark', 'm-auto')
        btn.textContent = 'Sepete Ekle'

        btn.addEventListener('click', () => {

            console.log(sepet.length)

            let found = false

            if (sepet.length == 0) {
                sepet.push(urun)

                found = true
            } else {
                sepet.forEach(sepetUrunu => {
                    // console.log(sepetUrunu.isim == urun.isim)
                    if (sepetUrunu.isim == urun.isim) {
                        sepetUrunu.quantity++
                        found = true
                    }

                })
            }

            if (!found) {
                sepet.push(urun)
            }

            let toplam = 0
            sepet.forEach(Element => {
                toplam += Element.quantity
            })
            localStorage.setItem('sepet', JSON.stringify(sepet))
            span.textContent = toplam
        })

        cardBody.append(baslik)
        cardBody.append(aciklama)
        cardBody.append(aciklama2)
        cardBody.append(btn)

        imgDiv.append(img)

        parentDiv.append(imgDiv)
        parentDiv.append(cardBody)

        col.append(parentDiv)

        row.append(col)

    })
} else if (window.location.href == 'http://127.0.0.1:5500/sepet.html') {
    const container = document.querySelector('.container')

    if (sepet.length == 0) {
        const h4 = document.createElement('h4')
        h4.textContent = 'Sepetinizde Ürün Yok...'

        container.append(h4)
    } else {
        //! Sepetimin uzunluğu 0 dan büyük olduğu sürece burdaki kodlar çalışacak
        sepet.forEach(urun => {
            const div = document.createElement('div')
            div.style.width = "100%"
            div.style.height = '200px'
            div.style.border = "1px solid black"
            div.classList.add('d-flex', 'align-items-center', 'justify-content-between', 'mt-2')

            const imgDiv = document.createElement('div')
            imgDiv.style.width = "25%"
            imgDiv.style.height = "100%"

            const img = document.createElement('img')
            img.src = urun.fotoğraf
            img.style.width = "100%"
            img.style.height = "100%"

            const baslik = document.createElement('h3')
            baslik.textContent = urun.isim

            const price = document.createElement('p')
            let urununFiyati = urun.fiyat * urun.quantity
            price.textContent = urununFiyati.toFixed(2) + '$'
            price.style.fontWeight = 'bold'

            const kacTane = document.createElement('div')
            //? bir şeye ihtiyaç olursa ekleriz
            kacTane.classList.add('d-flex', 'gap-3')

            const sayi = document.createElement('p')
            sayi.textContent = urun.quantity
            sayi.classList.add('mt-3', 'fs-4')

            const azaltBtn = document.createElement('button')
            azaltBtn.textContent = "-"
            azaltBtn.classList.add('btn', 'btn-light')

            const arttirBtn = document.createElement('button')
            arttirBtn.textContent = "+"
            arttirBtn.classList.add('btn', 'btn-light')

            azaltBtn.addEventListener('click', function () {
                if (urun.quantity >= 1) {
                    urun.quantity--
                    sayi.textContent = urun.quantity
                    price.textContent = (urun.fiyat * urun.quantity).toFixed(2) + '$'

                    localStorage.setItem('sepet', JSON.stringify(sepet))

                    if (urun.quantity == 0) {
                        // console.log(this.parentElement.parentElement)
                        this.parentElement.parentElement.remove()

                        //! LocalStorage'dan silme
                        let urunIndex = sepet.indexOf(urun)

                        sepet.splice(urunIndex, 1)

                        localStorage.setItem('sepet', JSON.stringify(sepet))
                        //! LocalStorage'dan silme

                    }
                    let toplam = 0
                    sepet.forEach(Element => {
                        toplam += Element.quantity
                    })
                    if (sepet.length == 0) {
                        span.textContent = ''
                    }else {
                        span.textContent = toplam
                    }
                }
                if (sepet.length == 0) {
                    const h4 = document.createElement('h4')
                    h4.textContent = 'Sepetinizde ürün bırakmadınız...'
            
                    container.append(h4)
                    container.removeChild(hr)
                }
                let toplamSepetFiyatı = 0
                sepet.forEach((e) => {
                toplamSepetFiyatı += e.fiyat * e.quantity
                sepetFiyat.textContent = toplamSepetFiyatı.toFixed(2)
                })
            })

            arttirBtn.addEventListener('click', () => {
                urun.quantity++
                sayi.textContent = urun.quantity
                price.textContent = (urun.fiyat * urun.quantity).toFixed(2) + '$'


                localStorage.setItem('sepet', JSON.stringify(sepet))

                let toplam = 0
                sepet.forEach(Element => {
                    toplam += Element.quantity
                })
                span.textContent = toplam
                // urun.fiyat += urun.quantity
                // price.textContent = urun.fiyat
                let toplamSepetFiyatı = 0
                sepet.forEach((e) => {
                toplamSepetFiyatı += e.fiyat * e.quantity
                sepetFiyat.textContent = toplamSepetFiyatı.toFixed(2)
                })

            })
            

            imgDiv.append(img)

            kacTane.append(azaltBtn)
            kacTane.append(sayi)
            kacTane.append(arttirBtn)

            div.append(imgDiv)
            div.append(baslik)
            div.append(price)
            div.append(kacTane)

            container.append(div)

            const hr = document.createElement('hr')


            container.append(hr)




        })
        const fiyatDiv = document.createElement('div')
        fiyatDiv.classList.add('w-100', 'd-flex', 'justify-content-around')

        let sepetFiyat = document.createElement('h3')

        let toplamSepetFiyatı = 0
        sepet.forEach((e) => {
        toplamSepetFiyatı += e.fiyat * e.quantity
        sepetFiyat.textContent = toplamSepetFiyatı.toFixed(2)
        })

        const sepetBtn = document.createElement('btn')
        sepetBtn.classList.add('btn', 'btn-success', 'w-50')
        sepetBtn.textContent = 'Satın al'
        sepetBtn.addEventListener('click', () => {
            localStorage.setItem('sepet', JSON.stringify(sepet))
            window.location.href = 'http://127.0.0.1:5500/pikeTak%C4%B1mlari.html'
        })

        fiyatDiv.append(sepetFiyat)
        fiyatDiv.append(sepetBtn)

        container.append(fiyatDiv)

    }

}