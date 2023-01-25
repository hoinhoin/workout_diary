    const labels = [
        'January',
        'Feburary',
        'March',
        'April',
        'May',
        'June'
    ];

    const data = {
        labels: labels,
        datasets: [{
            label: '나의 체중',
            backgroundColor:'rgb(255,99,132)',
            borderColor: 'rgb(255,99,132)',
            data:[80,75,70,60,65,68,70],
        },
        {
            label: '나의 근골격',
            backgroundColor:'rgb(125,10,132)',
            borderColor: 'rgb(125,10,132)',
            data:[30,20,10,45,35,30,10],
        },
        {
            label: '나의 체지방',
            backgroundColor:'rgb(20,30,240)',
            borderColor: 'rgb(20,30,240)',
            data:[40,35,30,25,20,15,10],
        }]
    };


    const config = {
        type: 'line',
        data:data,
        options:{}
    };


    const myChart = new Chart(
        document.getElementById('myChart'),
        config
    );

    	//데이터 변경
	document.getElementById('reData').onclick = function(){
		
        /*
		//데이터셋 수 만큼 반복
		var dataset = config.data.datasets;
		for(var i=0; i<dataset.length; i++){
			//데이터 갯수 만큼 반복
			var data = dataset[i].data;
			for(var j=0 ; j < data.length ; j++){
				data[j] = prompt('인바디값')
                //data[j] = Math.floor(Math.random() * 50);
			}
		}*/
		
        which_month = prompt('기입할 월');
        input_value = prompt('인바디 체중')
        input_muscle = prompt('인바디 근골격')
        input_fat = prompt('인바디 체지방')
        
        data_month = config.data.labels //라벨 불러오기
        //console.log(data_month[2]);
		//console.log(config.data.datasets[0].data[2]);
        
        for (let i =0; i < labels.length; i++)
        {
            if (which_month == data_month[i]) { //입력한 월 그래프에서 찾기
                config.data.datasets[0].data[i] = input_value; //체중
                config.data.datasets[1].data[i] = input_muscle; //근골격
                config.data.datasets[2].data[i] = input_fat; // 체지방 수정
            }
        }
        myChart.update();	//차트 업데이트
        
	}
