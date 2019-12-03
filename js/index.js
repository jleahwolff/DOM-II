// Your code goes here
//photoChange---------------------------------------
const photoChange = document.querySelector('img');

photoChange.addEventListener('click', () => {
    photoChange.src="../img/duluth-lighthouse.jpeg"
});

photoChange.addEventListener('mouseenter', () => {
    photoChange.style.transform = 'scale(1.1)'
    photoChange.style.transition = 'transform 0.3s'
});

photoChange.addEventListener('mouseleave', () => {
    photoChange.style.transform = 'scale(1)'
});
// photoChange.addEventListener('mouseenter', () => {
//     photoChange.src="..img/fun.jpg"
// });

//-------------------------------------------------


