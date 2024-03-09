const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            
            entry.target.classList.add('show');
        }
         else {
            entry.target.classList.remove('show');
        }
    }),{threshold: 0.5};
});
const observermove = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add('in-scroll');
        }
         else {
            entry.target.classList.remove('in-scroll');
        }
    }),{threshold: 0.5};
});
const observermoveup = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add('in-scroll');
        }
         else {
            entry.target.classList.remove('in-scroll');
        }
    }),{threshold: 0.5};
});


const hiddenElements = document.querySelectorAll('.hidden');
const elementsWithNameMovin = document.querySelectorAll('.to-scroll');
const elementsWithNameMovinup = document.querySelectorAll('.to-scroll-up');
hiddenElements.forEach((el) => observer.observe(el));
elementsWithNameMovin.forEach((el) => observermove.observe(el));
elementsWithNameMovinup.forEach((el) => observermove.observe(el));