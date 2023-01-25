let back_workout=["턱걸이", "바벨로우", "덤벨로우", "렛풀다운", "루마니안 데드", "암풀다운"];
let chest_workout=["벤치프레스","덤벨 벤치프레스", "펙덱플라이", "케이블크로스오버", "푸쉬업", "딥스"];
let shoulder_workout=["밀리터리 프레스", "덤벨프레스", "아놀드프레스","슈러그", "사이드레터럴레이즈", "벤트오버레터럴레이즈"];
let leg_workout=["스쿼트","레그프레스","헥스쿼트","런지", "프론트스쿼트", "레그컬"];

const button_back = document.getElementById("back");
const button_chest = document.getElementById("chest");
const button_shoulder = document.getElementById("shoulder");
const button_leg = document.getElementById("leg");



button_back.onclick = function () {
    let list= document.getElementById("back_routine");


    let list_item;
    for (let i =0; i < back_workout.length; i++) //back_workout요소 list_item에 넣기
    {
        list_item = document.createElement('li');
        list_item.innerHTML = back_workout[i];
        list.appendChild(list_item); //등 루틴 목록에 추가

    }
    list.onclick = function () {
        //let routine_list = document.getElementById('back_routine').getElementsByTagName('li');
        document.getElementById('routine_list').insertAdjacentHTML = Math.random();
    }
}
button_chest.onclick = function () {
    let list= document.getElementById("chest_routine");
    let list_item;
    for (let i =0; i < chest_workout.length; i++)
    {
        list_item = document.createElement('li');
        list_item.innerHTML = chest_workout[i];
        list.appendChild(list_item);

    }
}


button_shoulder.onclick = function () {
    let list= document.getElementById("shoulder_routine");
    let list_item;
    for (let i =0; i < shoulder_workout.length; i++)
    {
        list_item = document.createElement('li');
        list_item.innerHTML = shoulder_workout[i];
        list.appendChild(list_item);

    }
}
button_leg.onclick = function () {
    let list= document.getElementById("leg_routine");
    let list_item;
    for (let i =0; i < leg_workout.length; i++)
    {
        list_item = document.createElement('li');
        list_item.innerHTML = leg_workout[i];
        list.appendChild(list_item);

    }
}

