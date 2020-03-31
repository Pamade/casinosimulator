let yourMoney = 100;
let betValue = 2;
let winValue = 0;
const slotsContainer = document.querySelector('.slots-container')
let allImages = document.querySelectorAll('.img-slot')
const column1 = document.querySelectorAll('.column-1')
const column2 = document.querySelectorAll('.column-2')
const column3 = document.querySelectorAll('.column-3')
const betValueSpan = document.querySelector('.bet-value')
const winValueSpan = document.querySelector('.win-value')
const spinBtn = document.querySelector('.spin-panel')
const imgSlots = document.querySelectorAll('.img-slot')
const yourMoneyValueText = document.querySelector('.your-money-value')
const betValueText = document.querySelector('.bet-value')
const singleBox = document.querySelectorAll('.single-box')
const result = document.querySelector('.result')
const plusBet = document.querySelector('.plus-bet')
const minusBet = document.querySelector('.minus-bet')
allImages = [...allImages]


const images = [{
        id: 0,
        src: 'apple.png',
        item: 'apple',
    },
    {
        id: 1,
        src: 'cherry.png',
        item: 'cherry',
    },
    {
        id: 2,
        src: 'kiwi.png',
        item: 'kiwi',
    },
    {
        id: 3,
        src: 'orange.png',
        item: 'orange',
    },
    {
        id: 4,
        src: 'strawberry.png',
        item: 'strawberry',
    },
]

imgSlots.forEach(slot => slot.src = images[0].src)

const SlideAnimations = () => {
    allImages.forEach(img => img.style.display = 'none')
    const slideColumn1 = () => {
        column1.forEach(column => column.classList.add('animation-slots'))
        column1.forEach(img => img.style.display = 'block')
    }
    const slideColumn2 = () => {
        column2.forEach(column => column.classList.add('animation-slots'))
        column2.forEach(img => img.style.display = 'block')

    }
    const slideColumn3 = () => {
        column3.forEach(column => column.classList.add('animation-slots'))
        column3.forEach(img => img.style.display = 'block')

    }
    setTimeout(function () {
        spinBtn.classList.remove('spin-active')
    }, 2500)
    setTimeout(slideColumn1, 1000)
    setTimeout(slideColumn2, 1500)
    setTimeout(slideColumn3, 2000)
    
    spinBtn.classList.add('spin-active')

}
const GenerateRandom = () => {
    imgSlots.forEach(slot => {
        slot.classList.remove('orange', 'kiwi', 'strawberry', 'cherry', 'apple')
        let randomSrc = images[Math.floor(Math.random() * images.length)];
        slot.src = randomSrc.src
        slot.classList.add(randomSrc.item)
        
    })
    
}

const WhenWin = () => {

    let apples = []
    let cherries = []
    let kiwis = []
    let oranges = []
    let strawberries = []
    
    allImages.forEach(img => {
        if(img.classList.contains('apple')){
            apples.push(img)
        }
        else if(img.classList.contains('cherry')){
            cherries.push(img)
        }
        else if(img.classList.contains('kiwi')){
            kiwis.push(img)
        }
        else if(img.classList.contains('orange')){
            oranges.push(img)
        }
        else if(img.classList.contains('strawberry')){
            strawberries.push(img)
        }
    })

    if (apples.length >= 6){
        yourMoney += betValue * 3
        result.textContent = '6 or more apples. You have won x3 of wagered money'
        winValueSpan.textContent = 'Win Value: ' + betValue * 3
    }
    else if (cherries.length >= 6){
        yourMoney += betValue * 10
        result.textContent = '6 or more cherries. You have won x10 of wagered money'
        winValueSpan.textContent = 'Win Value: ' + betValue * 10
    }
    else if (kiwis.length >= 5){        
        yourMoney += betValue * 2
        result.textContent = '5 or more kiwis. You have won x2 of wagered money'
        winValueSpan.textContent = 'Win Value: ' + betValue * 2
    }
    else if (oranges.length >= 4){
        yourMoney += betValue * 3
        result.textContent = '4 or more oranges. You have won x3 of wagered money'
        winValueSpan.textContent = 'Win Value: ' + betValue * 3
    }
    else if (strawberries.length >= 7){
        yourMoney += betValue * 20
        result.textContent = '7 or more strawberries. You have won x20 of wagered money'
        winValueSpan.textContent = 'Win Value: ' + betValue * 20
    }
    else{
        result.textContent = 'You have lost. Try again!'
        winValueSpan.textContent = 'Win Value: 0'
    }

}

const StartSlots = () => {
    if (betValue > yourMoney) return result.textContent = 'NOT ENOUGH MONEY TO PLAY'
    else {      
        SlideAnimations()
        GenerateRandom()
        WhenWin()
        yourMoney -= betValue
        yourMoneyValueText.textContent = yourMoney        
        
    }
}

spinBtn.addEventListener('click', function () {
    StartSlots()
})
plusBet.addEventListener('click', function () {
    betValue++
    betValueText.textContent = betValue
    minusBet.classList.remove('minus-color')

})

minusBet.addEventListener('click', function () {
    if (betValue <= 1) return
    betValue--
    if (betValue === 1) {
        minusBet.classList.add('minus-color')
    } else {
        minusBet.classList.remove('minus-color')
    }
    betValueText.textContent = betValue
    
})

yourMoneyValueText.textContent = yourMoney
betValueText.textContent = betValue
