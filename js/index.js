// Your code goes here
const photoChange = document.querySelector('.intro img');
//1 click--------------------------
photoChange.addEventListener('click', (event) => {
    // photoChange.src="../img/duluth-lighthouse.jpeg"
    photoChange.setAttribute('src', '../img/duluth-lighthouse.jpeg')
    event.stopPropagation();
});
    //2 mouse enter--------------------
photoChange.addEventListener('mouseenter', () => {
    photoChange.style.transform = 'scale(1.1)'
    photoChange.style.transition = 'transform 0.3s'
});
//3 mouseleave----------------------
photoChange.addEventListener('mouseleave', () => {
    photoChange.style.transform = 'scale(1)'
});

//4 resize--------------------------
const reSize = document.querySelector('body');
window.addEventListener('resize', () => {
    reSize.style.backgroundColor = 'dodgerblue'
});
// photoChange.addEventListener('mouseenter', () => {
//     photoChange.src="..img/fun.jpg"
// });

//-------------------------------------------------
//resizeWindow attempt-----------------------------
// const resizeWindow = document.querySelectorAll('.btn');

// resizeWindow.addEventListener('resize', () => {
//     resizeWindow.style.background = 'pink';
// })
//--------------------------------------------------
//--------------------------------------------------
//toDuluth------------------------------------------
// const toDuluth = document.querySelector('.text-content h2').textContent;

// toDuluth.addEventListener('mouseenter', () => {
//     toDuluth.textContent = 'Lets Go To Duluth!'
// });
//--------------------------------------------------
//

// const textScroll = document.querySelector('text-content');
// textScroll.addEventListener('scroll', () => {
//     if document.body.scrollTop > 40 || document.documentElement.scrollTop > 40 {
//         textScroll.color = "pink";
//     } else { 
//         textScroll.color = 'black';
//     }
// });

//blurEffect----------------------------------------
// const blurEffect = document.getElementsByClassName('content-destination');

// blurEffect.addEventListener('blur', () =>{
//     blurEffect.target.style.background = '';
// });

//5 keydown----------------------------------------

const pinkMode = document.querySelector('*');
document.addEventListener('keydown', () => {
if(pinkMode.style.backgroundColor != 'pink'){
    pinkMode.style.backgroundColor = 'pink';
    pinkMode.style.color = 'dodgerblue';
}
});
//---------------------------------------------------


// 6 dblclick---------------------------------------
const body = document.querySelector('.intro');
body.addEventListener('dblclick', () => {
    body.style.backgroundColor = 'lightblue';
})
//--------------------------------------------------

// 7 mouseover--------------------------------------
const whiteText = document.querySelectorAll('.destination p').forEach(item => {
item.addEventListener('mouseover', () => {
    item.style.color = 'white';
})
});
const headerText = document.querySelectorAll('.destination h4').forEach(item => {
item.addEventListener('mouseover', () => {
    item.style.color = 'yellow';
});
});
const contentPick = document.querySelectorAll('.content-pick').forEach(item => {
item.addEventListener('mouseover', () => {
    item.style.backgroundColor = 'dodgerblue';
});
});
//---------------------------------------------------

// const contentSize = document.querySelectorAll('.content-pick').forEach(item => {
//     item.addEventListener('resize', () =>{
//         item.style.backgroundColor = 'black';
//     });

//     });

//8 keypress---------------------------------------
document.addEventListener('keypress', () => {
if (pinkMode.style.backgroundColor != 'white') {
pinkMode.style.backgroundColor = 'white';
pinkMode.style.color = 'pink';
}
});
//---------------------------------------------------

//9 mouseout-----------------------------------------
const normalText = document.querySelectorAll('.destination p').forEach(item => {
    item.addEventListener('mouseout', () => {
    item.style.color = 'black';
})
});
const headerTextBlack = document.querySelectorAll('.destination h4').forEach(item => {
item.addEventListener('mouseout', () => {
    item.style.color = 'black'
})
});
//---------------------------------------------------

//10 focus-------------------------------------------
const emailField = document.querySelector('#email');
emailField.addEventListener('focus', () => {
emailField.style.backgroundColor = 'yellow';  
});
//---------------------------------------------------
//stop Nav ------------------------------------------
const stopDefault = document.querySelectorAll('.nav a');

stopDefault.addEventListener ('click', () => {
    stopDefault.preventDefault;
})
//---------------------------------------------------

//stretch---
Draggable.create(document.querySelectorAll('.nav a'), {type: 'x,y'});
//----------