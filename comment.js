const daily_comment =document.getElementById("todayComment");
const buttonComment = document.getElementById("bt_comment");

const workout_goal = document.getElementById("goal");
const buttonGoal = document.getElementById("bt_goal");

buttonComment.onclick = function() {
    let today_comment = prompt("오늘의 한줄 일기");
    localStorage.setItem('getting',today_comment);
    daily_comment.textContent = today_comment;
}

buttonGoal.onclick = function () {
    let work_goal = prompt("운동 목표");
    localStorage.setItem('dream', work_goal);
    workout_goal.textContent = work_goal;
}


const getting = localStorage.getItem("getting")
const dream = localStorage.getItem("dream");

if (getting != null)
    daily_comment.textContent = getting;

if (dream != null)
    workout_goal.textContent = dream;



function shareFacebook() {
    let sendUrl = encodeURI(window.location.href); // 전달할 URL
    if (typeof (window.open) == "function")
        window.open("http://www.facebook.com/sharer/sharer.php?u=" + sendUrl);
    else
        window.location.href = "http://www.facebook.com/sharer/sharer.php?u=" + sendUrl
    console.log(encodeURI(window.location.href))
}


