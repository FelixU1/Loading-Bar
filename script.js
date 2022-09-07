const counterItem = document.querySelector('.counter')
const barItem = document.querySelector('.loading-bar-front')

var idx = 0;

numUpdate()

function numUpdate(){
    counterItem.innerText = idx + '%'
    barItem.style.width = idx + '%'
    idx++
    if (idx < 101) {
        setTimeout(numUpdate, 250)
    }
}
