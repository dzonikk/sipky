const toggleButton = document.getElementById('zmena-pozadia');

toggleButton.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Svetlý režim';
    } else {
        toggleButton.textContent = 'Tmavý režim';
    }
});