const topic = JSON.parse(localStorage.getItem('currentTopic'))
if (!topic) {
    window.location.href = 'Main_page.html'
}
function generatePhrase() {
    return `Today's activities include ${topic.verbs[Math.floor(Math.random()*topic.verbs.length)]} ${topic.equipment[Math.floor(Math.random()*topic.equipment.length)]} ${topic.adverbs[Math.floor(Math.random()*topic.adverbs.length)]}.`
   }
function addPhrase() {
    const randAct = document.getElementById('randAct')
    if (randAct)
    {randAct.innerHTML = generatePhrase()
    randAct.style.display = 'block'}
}

document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('generationTrigger')
    if (button) {
        button.addEventListener('click', addPhrase)
    }
})