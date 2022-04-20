let comfort_num = rand(document.getElementsByClassName('comfort-switch-btn').length);

var comfort_tab = document.getElementsByClassName('comfort-switch-btn');



comfort_tab[comfort_num].classList.add('active_sw');
document.getElementById('comfort-switch-img').classList.add('comfort-img-' + comfort_num)

function comfort_switch(pos) {
    document.getElementById('comfort-switch-img').classList.remove('comfort-img-' + comfort_num)
    document.getElementsByClassName('active_sw')[0].classList.remove('active_sw');
    comfort_num = pos;
    comfort_tab[pos].classList.add('active_sw')
    document.getElementById('comfort-switch-img').classList.add('comfort-img-' + pos)
}
