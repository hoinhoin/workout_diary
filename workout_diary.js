let weight, height, age,sex; 

const ButtonBmi = document.getElementById('bt_bmi');

ButtonBmi.onclick = function () {
    weight = prompt ("몸무게 입력하세요 XX","");
    height = prompt ("키 입력하세요 XXX","");
    age = prompt ("(만)나이 입력하세요","");
    sex = prompt ("성별 입력하세요 남성/여성","");

    let bmi = weight / ((height / 100) *(height / 100))
    if (bmi <= 18.5)
        document.getElementById('your_bmi').innerHTML = "당신의 bmi: 저체중"+ "<br>";
    else if (bmi <= 22.9)
        document.getElementById('your_bmi').innerHTML = "당신의 bmi: 정상"+ "<br>";
    else if (bmi <= 24.9)
        document.getElementById('your_bmi').innerHTML = "당신의 bmi: 과체중"+ "<br>";
    else
        document.getElementById('your_bmi').innerHTML = "당신의 bmi: 비만"+ "<br>";
    
    if (sex == '남성') {
        let metabolism = 88.4 + (13.4 * weight) + (4.8 * height) - (5.68 * age);
        document.getElementById('your_metabolism').innerHTML = "당신의 기초 대사량 해리스-베네딕트 공식"+"<br>" + metabolism.toFixed(1) + "kcal<br>";
        metabolism = (9.99 * weight) + (6.25 * height) -(4.95 * age) + 5;
        document.getElementById('your_metabolism2').innerHTML = "당신의 기초 대사량 미플린-지어 공식"+"<br>" +metabolism.toFixed(1) + "kcal<br>";
    }
    else if (sex == '여성')
    {
        let metabolism = (447.6 + (9.25 * weight) + (3.1 * height) - (4.33 * age));
        document.getElementById('your_metabolism').innerHTML = "당신의 기초 대사량 해리스-베네딕트 공식"+"<br>" +metabolism.toFixed(1) + "kcal<br>";
        metabolism = (9.99 * weight) + (6.25 * height) -(4.95 * age) + 5- 161;
        document.getElementById('your_metabolism2').innerHTML = "당신의 기초 대사량 미플린-지어 공식"+"<br>" +metabolism.toFixed(1) + "kcal<br>";
        
    }


}



