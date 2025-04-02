// JavaScript source code
const topicData = {
    'GymHTML.html': {
        verbs: ['lifting', 'curling', 'leg pressing', 'squatting', 'deadlifting', 'overhead pressing', 'bench pressing', 'climbing on top of'],
        equipment: ['an empty Barbell', 'the whole gym', 'the full stack of plates', 'light dumbells', 'a 405 lbs barbell', 'a hot girl', 'a treadmill', 'the squat rack'],
        adverbs: ['aggressively', 'like a beast', 'gently', 'while screaming really loud', 'violently', 'knowingly', 'absent-mindedly', 'graciously']
    },
    'SchoolHTML.html': {
        verbs : ['studying', 'reading', 'waiting for recess', 'taking a test', 'taking an oral test', 'bullying the malfunctioning heaters', 'doing homework'],
        equipment : ['on the teacher desk', 'in the hallway', 'in the cafeteria', 'in the principal office', 'inside a locker', 'from under a desk'],
        adverbs : ['nervously', 'quietly', 'in a rush', 'while screaming', 'extermely loud', 'while trembling', 'like a tiger']
    }
}
document.getElementById('topics').addEventListener('change', function () {
    const selectedPage = this.value
    if (topicData[selectedPage]) {
        localStorage.setItem('currentTopic', JSON.stringify(topicData[selectedPage]))
        window.location.href = selectedPage
    }
})