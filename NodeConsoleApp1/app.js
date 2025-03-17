let randNums = [] 
let operator = null
const questionButton = document.getElementById('questioner')
document.getElementById('viewAvg').addEventListener('click', calculateAverage)
document.getElementById('addRandom').addEventListener('click', randNum)
document.getElementById('addRandom').addEventListener('dblclick', scootIfBothered)
questionButton.addEventListener('click', questionReply)
function questionReply() {
    const num1 = Number(document.getElementById('fnum').value)
    const num2 = Number(document.getElementById('snum').value)
    document.getElementById('reply').innerHTML = `Yeah, you got what you asked for. ${num1} + ${num2} equals ${num1 + num2}.  And ${num1} * ${num2} equals ${num1 * num2}`
}
function scootIfBothered() {
    const bothered = document.getElementById('addRandom')
    bothered.style.marginLeft = '450px'
    document.getElementById('addRandom').removeEventListener('click', randNum)
    document.getElementById('addRandom').innerHTML = 'Button Bothered'
}

function receiveOperator(event) {
    event.preventDefault()
    operatorInput = document.querySelector("input[name=operator]:checked")
    if (operatorInput) {
        operator = operatorInput.value
        alert(`Operator selected: ${operator}`);
    }
     else {
        alert("Please select an operator.");
    }
}
    

function calculate(event) {
    event.preventDefault()
    const num1 = Number(document.getElementById('fnum').value)
    const num2 = Number(document.getElementById('snum').value)
    const resultElement = document.getElementById('result')
    if (!isNaN(num1) && !isNaN(num2)) {
        if (operator == '+') { resultElement.innerHTML = `${num1} + ${num2} equals ${num1 + num2}.` }
        else if (operator == '-') { resultElement.innerHTML = `${num1} - ${num2} equals ${num1 - num2}.` }
        else if (operator == 'x') { resultElement.innerHTML = `${num1} x ${num2} equals ${num1 * num2}.` }
        else if (operator == '/') { resultElement.innerHTML = `${num1} / ${num2} equals ${num1 / num2}.` }
    }
}

function randNum() {
    if (randNums.length <= 9) {
        const num = Math.random() * 1000
        randomNumElement = document.createElement('h2')
        randomNumElement.textContent = `Random number: ${Math.floor(num)}`
        randomNumElement.style.fontsize = '50px'
        document.body.appendChild(randomNumElement)
        randNums.push(num)
    }
    else {
        let butty = document.getElementById('addRandom')
        butty.removeEventListener('click', randNum)
        butty.innerHTML = 'Maximum randomness reached'
        butty.disabled = 'true'
    }
   
}
function calculateAverage() {
    const sum = randNums.reduce((partial, n) => partial + n)
    let avg = document.createElement('p')
    avg.innerHTML = `The average is ${sum / randNums.length}`
    document.body.appendChild(avg)



}


function chooseBackColor(event) {
    event.preventDefault()
    const newColor = document.getElementById('backColor').value
    document.querySelector('body').style.backgroundColor = newColor
}
document.getElementById('backTrigger').onclick = chooseBackColor
function moveAway() {
    const addGuy = document.getElementById('numInnput')
    if (addGuy.style.marginLeft == '50%')
    {
        addGuy.style.marginLeft = '90%'
        document.querySelector('.scootAway').innerHTML = 'Scoot Back to place'
    }


    else {
        addGuy.style.marginLeft = '50%'
        document.querySelector('.scootAway').innerHTML = 'Move Away'
    }
}
document.querySelector('.scootAway').addEventListener('click', moveAway)
function calculateTime(event) {
    const timePassed = event.timeStamp
    let timeElement = document.getElementById('timey')
    timeElement.innerHTML = `You have idled on the page for ${Math.floor(timePassed / 1000)} seconds.`
    document.body.removeEventListener('mousemove',calculateTime)
}
document.body.addEventListener('mousemove', calculateTime)
document.getElementById('timey').onclick = () => {
    document.getElementById('timey').style.display = 'none'
}
function unbother() {
    const butt = document.getElementById('addRandom')
    butt.style.marginLeft = ''
    butt.addEventListener('click', randNum)
    butt.innerHTML = 'throw random number'

}
document.getElementById('unbother').addEventListener('click', unbother)

class myNumber {
    constructor(type) {
        this._type = type
        //this._value = value
    }
    get type() {
        return this._type
    }
}

function createNumber() {
    const numType = document.getElementById('numtype').value
    const newNum = new myNumber(numType)
    document.getElementById('ownNumDesc').innerHTML = `Your number is a ${newNum.type}`

}
document.getElementById('createNum').addEventListener('dblclick', createNumber)