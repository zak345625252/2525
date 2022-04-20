function rand(max) {
    return Math.floor(Math.random() * max)
}

localStorage.setItem('adv-num', rand(6));
var picked_adv = localStorage.getItem('adv-num');
var adv_list = document.getElementsByClassName('adv-li-item');
var adv_img = document.getElementsByClassName('adv-img');

adv_list[picked_adv].classList.add('active');
adv_list[picked_adv].classList.remove('inactive');

adv_img[picked_adv].classList.remove('hidden');
adv_img[picked_adv].classList.add('visible');

function active_sw(pos) {
    for (let i = 0; i < adv_list.length; i++) {
        adv_list[i].classList.remove('active');
        adv_list[i].classList.add('inactive');
        adv_img[i].classList.remove('visible');
        adv_img[i].classList.add('hidden');
    }
    adv_list[pos].classList.add('active');
    adv_list[pos].classList.remove('inactive');
    adv_img[pos].classList.remove('hidden');
    adv_img[pos].classList.add('visible');
}