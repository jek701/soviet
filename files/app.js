const HiddenInfoWrapper = document.getElementById('hidden-info-wrapper');
const HiddenInfo = document.getElementById('hidden-info');
const HiddenInfoWrapper2 = document.getElementById('hidden-info-wrapper-2');
const HiddenInfo2 = document.getElementById('hidden-info-2');

HiddenInfoWrapper.onclick = () => {
    HiddenInfo.classList.toggle('hidden')
}

HiddenInfoWrapper2.onclick = () => {
    HiddenInfo2.classList.toggle('hidden')
}

const onMouseOver = (i) => {
    const el = document.getElementById(i)
    el.classList.add('active')
    // setTimeout(() => {el.classList.add('visible')}, 200)
}

const onMouseLeave = (i) => {
    const el = document.getElementById(i)
    // setTimeout(() => {el.classList.remove('visible')}, 500)
    // setTimeout(() => {}, 500)
    el.classList.remove('active')
}

const HiddenText = document.getElementById('thank-text');
const MarkWrapper = document.getElementById('mark-wrapper')

HiddentTextT = (i) => {
    HiddenText.classList.remove('hidden');
    MarkWrapper.classList.add('hidden')
}

DropDownShow = (i) => {
    document.getElementById(i).classList.add('active')
}

DropDownHide = (i) => {
    document.getElementById(i).classList.remove('active')
}


const blockData = [
    {img: 'files/img/img.png', title: "Ревность 1", desc: "Как избавиться от ревности к прошлому? Топ-10 способов и четвертая строка", author: 'Рецензия от клинического психолога Шереметьевой А.П', id: 1,},
    {img: 'files/img/img.png', title: "Ревность 2", desc: "Как избавиться от ревности к прошлому? Топ-10 способов и четвертая строка", author: 'Рецензия от клинического психолога Шереметьевой А.П', id: 2,},
    {img: 'files/img/img.png', title: "Ревность 2", desc: "Как избавиться от ревности к прошлому? Топ-10 способов и четвертая строка", author: 'Рецензия от клинического психолога Шереметьевой А.П', id: 2,},
    {img: 'files/img/img.png', title: "Ревность 2", desc: "Как избавиться от ревности к прошлому? Топ-10 способов и четвертая строка", author: 'Рецензия от клинического психолога Шереметьевой А.П', id: 2,},
    {img: 'files/img/img.png', title: "Ревность 2", desc: "Как избавиться от ревности к прошлому? Топ-10 способов и четвертая строка", author: 'Рецензия от клинического психолога Шереметьевой А.П', id: 2,},
    {img: 'files/img/img.png', title: "Ревность 1", desc: "Как избавиться от ревности к прошлому? Топ-10 способов и четвертая строка", author: 'Рецензия от клинического психолога Шереметьевой А.П', id: 1,},
    {img: 'files/img/img.png', title: "Ревность 1", desc: "Как избавиться от ревности к прошлому? Топ-10 способов и четвертая строка", author: 'Рецензия от клинического психолога Шереметьевой А.П', id: 1,},
    {img: 'files/img/img.png', title: "Ревность 1", desc: "Как избавиться от ревности к прошлому? Топ-10 способов и четвертая строка", author: 'Рецензия от клинического психолога Шереметьевой А.П', id: 1,},
]

const filterData = [
    {title: 'Все', id: 0},
    {title: '1', id: 1},
    {title: '2', id: 2},
]

// Filter of array

let selectedBlock = 0


const setNum = (num) => {
    let selectedBlock = num
    function filterArr(item) {
        if (item.id === selectedBlock) {
            return true
        }
        else if (selectedBlock == 0) {
            return true
        }
    }
    let filteredArr = blockData.filter(filterArr)

    const readingNow = filteredArr.map(function (i) {
        return '<div class="reading-now-block">' + `<img src=${i.img} alt="">` + '<div class="text-wrapper">' + '<span>' + i.title + '</span>' + '<p class="reading-now-title">' + i.desc + '</p>' + '<p>' + i.author + '</p>' + '</div>' + '</div>'
            ;
    }).join('');
    document.getElementById('target').innerHTML = readingNow;
}

function filterByID(item) {
  if (item.id == selectedBlock) {
    return true
  }
  else if (selectedBlock == 0) {
      return true
  }
}

let arrByID = blockData.filter(filterByID)

// Filter of array

// Map function

const filter = filterData.map((i, index) => {
    return `<li onclick="setNum(${index})">` + i.title + `</li>`
}).join('');

document.getElementById('filter').innerHTML = filter
// Map function