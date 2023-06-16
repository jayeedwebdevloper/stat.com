function clickToggle(plus, minus, ans, head) {
    plus.addEventListener('click', function () {
        ans.style.display = 'block';
        head.style.color = '#d22126';
        minus.style.display = 'block';
        minus.style.backgroundColor = '#d22126';
        this.style.display = 'none';
    });
    minus.addEventListener('click', function () {
        ans.style.display = 'none';
        head.style.color = '#000';
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


window.addEventListener('load', function () {
    const loader = document.getElementById('loader');
    loader.style.display = 'none';
});

let scrollbar = document.getElementById('scroll');
scrollbar.style.opacity = '0';

window.addEventListener('scroll', (e) => {
    if(window.pageYOffset > 5) {
        scrollbar.style.opacity = '1';
    } else {
        scrollbar.style.opacity = '0';
    }
});
scrollbar.addEventListener('click', function(){
    window.scrollTo({ top: 0, behavior: 'smooth' })
})