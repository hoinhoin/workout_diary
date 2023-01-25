const tempString = localStorage.getItem("data"); //일정 불러오기
const index_temp = localStorage.getItem("index_temp");

const temp = JSON.parse(tempString); //불러온 json형태 일정 풀어서 temp에 저장


let index=1;
let calendar_data = [
    {}
  ];

if (temp != null)
{
    calendar_data = temp;
}


if (index_temp == null)
{
    index = 0;
}
else
{
    index = index_temp;
}



function input_value()
{
    /*
    //오늘 날짜 자동으로 기입
    let year = new Date(date).getFullYear();
    let month = new Date(date).getMonth() + 1;
    if (month < 10)
        month = "0" + month;
    day = new Date(date).getDate();
     if (day < 10)
        day = "0" + day;
    today = year+ "-" + month +"-" + day;
    data[0].date = today;
    */
    let check_date_blank = prompt("날짜를 입력하세요 20xx-xx-xx");
    if (check_date_blank != "") { //빈칸을 입력한것인지
        let check_content_blank= prompt("내용"); 
        if (check_content_blank != "") {//빈칸이 아니면
            calendar_data[index] = {date:"", content:""}; //새 인덱스 만들기

            calendar_data[index].content = check_content_blank;
            calendar_data[index].date = check_date_blank;
            index++;
        
            let temp_calendar = [
                {}
            ];
            temp_calendar = calendar_data;
            const dataString = JSON.stringify(temp_calendar);
            localStorage.setItem("data", dataString); //json형태로 localstorage에 저장
            localStorage.setItem("index_temp", index);

        }
        else //내용 미기입
            alert("빈칸이네요");

    }
    else //날짜 미기입
        alert("빈칸이네요");

}
    //


// pad method (2 -> 02)
Number.prototype.pad = function() {
  return this > 9 ? this : '0' + this;
}


//달력 생성
const makeCalendar = (date) => {
    //현재 년도와 월 받기
    const currentYear = new Date(date).getFullYear();
    const currentMonth = new Date(date).getMonth() + 1; //getMonth는 0~11까지 값 반환
    //첫날의 요일 구하기(0~6)
    const firstDay = new Date(date.setDate(1)).getDay();
    //마지막 날짜 구하기
    const lastDay = new Date(currentYear, currentMonth, 0).getDate();
    
    //남은공간 다음달 날자 표시
    const limitDay = firstDay + lastDay;
    const nextDay = Math.ceil(limitDay /7) *7;

    let htmlDummy = '';
    
    //한달전 날짜 표시
    for (let i = 0; i < firstDay; i++) {
        htmlDummy += `<div class = "noColor"></div>`;
    }



    for (let i =1; i <= lastDay; i++)
    {
        const date = `${currentYear}-${currentMonth.pad()}-${i.pad()}`;
        if (index == 0) //일정이 하나도 없다면
        {
            htmlDummy += `
            <div id = "dates">
            ${i}
            <p>
            </p>
            </div>
        `;
        }
        else
        {
            for (let j=0; j<index; j++) //일정이 있다면, 일정이 저장된 배열의 인덱스만큼 반복해서 찾기
            {
                if(date == calendar_data[j].date) //날짜와 입력한 데이터상의 날짜가 같다면
                {
                    htmlDummy += `
                    <div>
                    ${i}
                    <p>
                            ${calendar_data[j].content}
                    </p>
                    </div>
                `;
                break;
                }
                else if (j>index-2) //일정이 없는날, j의 최댓값은 (index-1) 즉 (index-2)보다 크다는 것은 모든일정을 비교했는데 해당 날짜가 아니라는 것
                //else
                {
                    htmlDummy += `
                    <div>
                    ${i}
                    <p>
                    </p>
                    </div>
                `;
                }
            }
        }



    }

    

    //다음달 날짜 표시
    for (let i = limitDay; i < nextDay; i++) {
        htmlDummy += `<div class = "noColor"></div>`;
    }
    document.querySelector(`.dateBoard`).innerHTML = htmlDummy;
    document.querySelector(`.dateTitle`).innerText = `${currentYear}년 ${currentMonth}월`



}

function loaded() {
    const data = localStorage.getItem(Local_DATA)
    if (data == NULL)
        add();
    else
        1+1;
        
}


const date = new Date();

//calendar_data.splice(4,1); //원하는 일정삭제
//index--;
makeCalendar(date); //캘린더 불러오기
//localStorage.removeItem("data"); //모든 일정 삭제
//localStorage.removeItem("index_temp");


document.querySelector(`.prevDay`).onclick = () => {

    //document.write(5)
    makeCalendar(new Date(date.setMonth(date.getMonth() -1)));
}
document.querySelector(`.nextDay`).onclick = () => {
    makeCalendar(new Date(date.setMonth(date.getMonth() + 1)));
}

document.querySelector(`.schedule`).onclick = () => { //일정 추가
    input_value();
    makeCalendar(new Date(date.setMonth(date.getMonth())));

}

//loaded();

