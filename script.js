document.addEventListener('DOMContentLoaded', function () {

    let headerLinks = document.querySelectorAll('.header-socials');

    function spin(event) {
        // Remove existing animation
        event.target.style.animation = 'none';
        
        // Trigger reflow to restart the animation
        void event.target.offsetWidth;

        // Apply the spin animation
        event.target.style.animation = 'turn 1000ms';
    }

    headerLinks.forEach(function (link) {
        link.addEventListener('mouseover', spin);
    });
});