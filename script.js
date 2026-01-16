let list = document.querySelectorAll('.item')
let next = document.getElementById('next')
let prev = document.getElementById('prev')

const body = document.body

function carregarCorFundo() {
    const activeItem = document.querySelector('.item.active');
    const bg = getComputedStyle(activeItem).getPropertyValue('--background')
    body.style.backgroundColor = bg
}

carregarCorFundo()

let cont = list.length
let active = 0


next.onclick = () => {
    let activeOld = document.querySelector('.active')
    activeOld.classList.remove('active')


    if (active === (cont - 1)) {
        active = 0
    } else {
        active = active + 1
    }

    list[active].classList.add('active')
    carregarCorFundo()
}


prev.onclick = () => {
    let activeOld = document.querySelector('.active')
    activeOld.classList.remove('active')

    if (active === 0) {
        active = (cont - 1)
    } else {
        active = active - 1
    }

    list[active].classList.add('active')
    carregarCorFundo()
}