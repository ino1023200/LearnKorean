document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navigationList = document.querySelector('.navigation_list');

    menuToggle.addEventListener('click', function () {
        navigationList.classList.toggle('show'); // Toggle class "show"
    });
});
