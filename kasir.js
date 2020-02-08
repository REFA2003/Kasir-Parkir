const waktu = document.getElementById('waktu')
const kendaraan = document.getElementById('kendaraan')
const buttonCount = document.getElementById('countPrice')
const buttonReset = document.getElementById('reset')
const priceText = document.getElementById('price')
const nominal = document.getElementById('nominal')
const buttonBayar = document.getElementById('bayar')
const kembalian = document.getElementById('kembalian')

let price = 0

const countPriceKendaraan = (hargaAwal, hargaPerjam) => {
    if(waktu.value <=2){
        price = hargaAwal
    } else {
        price = hargaAwal + ((waktu.value -2) * hargaPerjam)
    }
    priceText.innerHTML = `Rp. ${price}`
}

const countPrice = () => {
    if(kendaraan.value === 'motor'){
        countPriceKendaraan(5000,2000)
    } else if(kendaraan.value === 'mobil') {
        countPriceKendaraan(10000,4000)
    } else {
        alert('pilih kendaraan!')
    }
}

const bayar = () => {
    if(price > 0){
        if(nominal.value >= price){
            kembalian.innerHTML = `<h1>Kembalian</h1><h2>Rp. ${nominal.value - price}</h2>`
        } else {
            kembalian.innerHTML = `<h2>Uang anda kurang</h2>`
        }
    } else {
        kembalian.innerHTML = `<h2>Isi waktu dan kendaraan</h2>`
    }
}

const reset = () => {
    priceText.innerHTML = 'Rp. 0'
    kembalian.innerHTML = ''
}

buttonCount.addEventListener('click',countPrice)
buttonBayar.addEventListener('click',bayar)
buttonReset.addEventListener('click',reset)