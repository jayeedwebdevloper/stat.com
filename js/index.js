function clickToggle(plus, minus, ans, head) {
    plus.addEventListener('click', function () {
        ans.style.display = 'block';
        head.style.color = '#d22126';
        minus.style.display = 'block';
        minus.style.backgroundColor = '#d22126';
        minus.style.color = '#fff';
        minus.style.padding = '14px';
        minus.style.fontSize = '20px';
        minus.style.paddingTop = '2px';
        minus.style.paddingBottom = '2px';
        this.style.display = 'none';
    });
    minus.addEventListener('click', function () {
        ans.style.display = 'none';
        head.style.color = '#000';
        plus.style.display = 'block';
        this.style.display = 'none';
    });
}
function clickToggleDark(plus, minus, ans, head) {
    plus.addEventListener('click', function () {
        ans.style.display = 'block';
        head.style.color = '#d22126';
        minus.style.display = 'block';
        minus.style.backgroundColor = '#d22126';
        minus.style.color = '#fff';
        minus.style.padding = '14px';
        minus.style.fontSize = '20px';
        minus.style.paddingTop = '2px';
        minus.style.paddingBottom = '2px';
        this.style.display = 'none';
    });
    minus.addEventListener('click', function () {
        ans.style.display = 'none';
        head.style.color = '#adb5bd';
        plus.style.display = 'block';
        this.style.display = 'none';
    });
}

let plus1 = document.getElementById('p1');
let minus1 = document.getElementById('m1');

let plus2 = document.getElementById('p2');
let minus2 = document.getElementById('m2');

let plus3 = document.getElementById('p3');
let minus3 = document.getElementById('m3');

let plus4 = document.getElementById('p4');
let minus4 = document.getElementById('m4');

let plus5 = document.getElementById('p5');
let minus5 = document.getElementById('m5');

let plus6 = document.getElementById('p6');
let minus6 = document.getElementById('m6');

let plus7 = document.getElementById('p7');
let minus7 = document.getElementById('m7');

let plus8 = document.getElementById('p8');
let minus8 = document.getElementById('m8');

let ans1 = document.getElementById('ans1');
let head1 = document.getElementById('he1');

let ans2 = document.getElementById('ans2');
let head2 = document.getElementById('he2');

let ans3 = document.getElementById('ans3');
let head3 = document.getElementById('he3');

let ans4 = document.getElementById('ans4');
let head4 = document.getElementById('he4');

let ans5 = document.getElementById('ans5');
let head5 = document.getElementById('he5');

let ans6 = document.getElementById('ans6');
let head6 = document.getElementById('he6');

let ans7 = document.getElementById('ans7');
let head7 = document.getElementById('he7');

let ans8 = document.getElementById('ans8');
let head8 = document.getElementById('he8');

clickToggle(plus1, minus1, ans1, head1);
clickToggle(plus2, minus2, ans2, head2);
clickToggle(plus3, minus3, ans3, head3);
clickToggle(plus4, minus4, ans4, head4);
clickToggle(plus5, minus5, ans5, head5);
clickToggle(plus6, minus6, ans6, head6);
clickToggle(plus7, minus7, ans7, head7);
clickToggle(plus8, minus8, ans8, head8);


let head1D = document.getElementById('he1-dark');

let head2D = document.getElementById('he2-dark');

let head3D = document.getElementById('he3-dark');

let head4D = document.getElementById('he4-dark');

let head5D = document.getElementById('he5-dark');

let head6D = document.getElementById('he6-dark');

let head7D = document.getElementById('he7-dark');

let head8D = document.getElementById('he8-dark');

clickToggleDark(plus1, minus1, ans1, head1D);
clickToggleDark(plus2, minus2, ans2, head2D);
clickToggleDark(plus3, minus3, ans3, head3D);
clickToggleDark(plus4, minus4, ans4, head4D);
clickToggleDark(plus5, minus5, ans5, head5D);
clickToggleDark(plus6, minus6, ans6, head6D);
clickToggleDark(plus7, minus7, ans7, head7D);
clickToggleDark(plus8, minus8, ans8, head8D);


// window.addEventListener('load', function () {
//     const loader = document.getElementById('loader');
//     loader.style.display = 'none';
// });

let scrollbar = document.getElementById('scroll');
scrollbar.style.opacity = '0';

window.addEventListener('scroll', (e) => {
    if (window.pageYOffset > 5) {
        scrollbar.style.opacity = '1';
    } else {
        scrollbar.style.opacity = '0';
    }
});
scrollbar.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' })
})

// slide

const next = document.getElementById('next');
const prev = document.getElementById('prev');
const next1 = document.getElementById('next1');
const prev1 = document.getElementById('prev1');
const content = document.getElementById('content');
const next2 = document.getElementById('next2');
const prev2 = document.getElementById('prev2');
const next3 = document.getElementById('next3');
const prev3 = document.getElementById('prev3');
const content2 = document.getElementById('content2');

next.addEventListener('click', function(){
    content.scrollLeft += 500;
});
prev.addEventListener('click', function(){
    content.scrollLeft -= 500;
});
next1.addEventListener('click', function(){
    content.scrollLeft += 350;
});
prev1.addEventListener('click', function(){
    content.scrollLeft -= 350;
});
next2.addEventListener('click', function(){
    content2.scrollLeft += 500;
});
prev2.addEventListener('click', function(){
    content2.scrollLeft -= 500;
});
next3.addEventListener('click', function(){
    content2.scrollLeft += 350;
});
prev3.addEventListener('click', function(){
    content2.scrollLeft -= 350;
});