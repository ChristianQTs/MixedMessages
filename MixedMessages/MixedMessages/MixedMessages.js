const verbs = ['Lifting', 'Curling', 'Leg Pressing', 'Squatting', 'Deadlifting', 'Overhead Pressing', 'Bench Pressing', 'Climbing on top of' ]
const equipment = ['an empty Barbell', 'the whole gym', 'the full stack of plates', 'light dumbells', 'a 405 lbs barbell', 'a hot girl', 'a treadmill', 'the squat rack']
const adverbs = ['aggressively', 'like a beast', 'gently', 'while screaming really loud', 'violently', 'knowingly', 'absent-mindedly', 'graciously']

function generatePhrase() {
    return `Today's workout includes ${verbs[Math.floor(Math.random()*verbs.length)]} ${equipment[Math.floor(Math.random()*equipment.length)]} ${adverbs[Math.floor(Math.random()*adverbs.length)]}.`
   }
function addPhrase() {
    const randAct = document.getElementById('randAct')
    randAct.innerHTML = generatePhrase()
    randAct.style.display = 'block'
}
document.getElementById('generationTrigger').addEventListener('click', addPhrase)