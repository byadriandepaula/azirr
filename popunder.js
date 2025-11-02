// popunder.js
(function () {
    document.addEventListener('click', function () {
        if (!localStorage.getItem('popunderMostrado')) {
            localStorage.setItem('popunderMostrado', 'true');
            window.open('https://otieu.com/4/10129495', '_blank');
        }
    }, { once: true });
})();
