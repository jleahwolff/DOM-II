// Your code goes here
const photoChange = document.querySelector('img');

// photoChange.addEventListener('mouseenter', () => {
//     photoChange.style.transform = 'scale(0.95)'
//     photoChange.style.transition = 'transform 0.3s'
// });

// photoChange.addEventListener('mouseleave', () => {
//     photoChange.style.transform = 'scale(1)'
// });

photoChange.addEventListener('click', () => {
    photoChange.src="../img/destination.jpg"
});

// photoChange.addEventListener('mouseenter', () => {
//     photoChange.src="..img/fun.jpg"
// });