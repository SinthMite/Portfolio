document.addEventListener('DOMContentLoaded', function () {

let headerLinks = document.querySelectorAll('.header-socials');

function spin(event) {
    event.target.style.animationName = 'turn';
    event.target.style.animationDuration = '1s';

}
headerLinks.forEach(function (link) {
    link.addEventListener('mouseover', spin);
});
});