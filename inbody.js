let my_weight;
let muscle_mass;
let fat;

/*
const button_inbody = document.getElementById('bt_inbody');
button_inbody.onclick = function () {
    weight = document.getElementById('weight').value;
    document.getElementById('my_weight').innerHTML = my_weight;
}*/


function print_weight() {
    weight = document.getElementById('weight').value;

    document.getElementById('my_weight').innerText = weight;

}


function print_muscle() {
    muscle_mass = document.getElementById('muscle_mass').value;

    document.getElementById('my_muscle').innerText = muscle_mass;    

}

function print_fat() {

    fat = document.getElementById('fat').value;
    document.getElementById('my_fat').innerText = fat;
    

}
