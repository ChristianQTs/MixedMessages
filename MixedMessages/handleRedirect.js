// JavaScript source code
document.getElementById('topics').addEventListener('change', function () {
    const selectedPage = this.value
    if (selectedPage) {
        window.location.href = selectedPage
    }
})