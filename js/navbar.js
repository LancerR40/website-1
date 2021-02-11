let nav = document.querySelector('.navbar nav');
let showNav = false;

const showNavEvent = () => {
    if (showNav === false) {
        nav.classList.add('active');
        return showNav = true;
    };

    if (showNav === true) {
        nav.classList.remove('active');
        return showNav = false;
    }
};