$(document).ready(function() {

    createCircleChart();


    var mapContainer = document.getElementById('map'), // 지도를 표시할 div  
    mapOption = { 
        center: new kakao.maps.LatLng(37.480064, 126.880873), // 지도의 중심좌표
        level: 13 // 지도의 확대 레벨
    };

	var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
	 
	// 마커를 표시할 위치와 내용을 가지고 있는 객체 배열입니다 
	var positions = [
	    {
	        content: 
	        	'<div>(주)빛컨</div>' + 
	        	'<div>서울 금천구 가산디지털1로 165, 1202호</div>',
	        latlng: new kakao.maps.LatLng(37.480064, 126.880873)
	    },
	    {
	        content: '<div>인천국제공항</div>', 
	        latlng: new kakao.maps.LatLng(37.448711, 126.451168)
	    },
	    {
	        content: '<div>강남역 9번 출구</div>', 
	        latlng: new kakao.maps.LatLng(37.497907, 127.026906)
	    },
	    {
	        content: '<div>강릉</div>', 
	        latlng: new kakao.maps.LatLng(37.805408, 128.907896)
	    },
	    {
	        content: '<div>광주</div>', 
	        latlng: new kakao.maps.LatLng(35.165299, 126.909243)
	    },
	    {
	        content: '<div>대구</div>', 
	        latlng: new kakao.maps.LatLng(35.876417, 28.596168)
	    },
	    {
	        content: '<div>부산</div>', 
	        latlng: new kakao.maps.LatLng(35.115376, 129.040609)
	    },
	    {
	        content: '<div>대전역</div>', 
	        latlng: new kakao.maps.LatLng(36.331418, 127.432709)
	    },
	    {
	        content: '<div>가평역</div>', 
	        latlng: new kakao.maps.LatLng(37.814244, 127.510554)
	    },
	    {
	        content: '<div>부산 사직 야구장</div>', 
	        latlng: new kakao.maps.LatLng(35.193883, 129.061615)
	    }
	];
	
	var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
	
	// 마커 이미지의 이미지 크기 입니다
    var imageSize = new kakao.maps.Size(24, 35); 
    
    // 마커 이미지를 생성합니다    
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
	
    var imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png', // 마커이미지의 주소입니다    
    imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
    imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
	
    var markerImageA = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
    markerPosition = new kakao.maps.LatLng(37.54699, 127.09598); // 마커가 표시될 위치입니다
    
	for (var i = 0; i < positions.length; i++) {
		
		var maker;
		
		if(i == 0 || i== 1 || i == 3 || i == 8) {
			 // 마커를 생성합니다
		    marker = new kakao.maps.Marker({
		        map: map, // 마커를 표시할 지도
		        position: positions[i].latlng // 마커의 위치
		    });
		} else if(i == 9) {
			marker = new kakao.maps.Marker({
		        map: map, // 마커를 표시할 지도
		        position: positions[i].latlng, // 마커의 위치
		        image : markerImageA // 마커 이미지 
			});
		} else {
			marker = new kakao.maps.Marker({
		        map: map, // 마커를 표시할 지도
		        position: positions[i].latlng, // 마커의 위치
		        image : markerImage // 마커 이미지 
			});
		}
		
	    // 마커에 표시할 인포윈도우를 생성합니다 
	    var infowindow = new kakao.maps.InfoWindow({
	        content: positions[i].content // 인포윈도우에 표시할 내용
	    });
	    
	    // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
	    // 이벤트 리스너로는 클로저를 만들어 등록합니다 
	    // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
	    kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
	    kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
	}
	
	/*
	var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
	var options = { //지도를 생성할 때 필요한 기본 옵션
		center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
		level: 3 //지도의 레벨(확대, 축소 정도)
	};

	var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
	*/	
	

});

//인포윈도우를 표시하는 클로저를 만드는 함수입니다 
function makeOverListener(map, marker, infowindow) {
    return function() {
        infowindow.open(map, marker);
    };
  }
  
  //인포윈도우를 닫는 클로저를 만드는 함수입니다 
  function makeOutListener(infowindow) {
    return function() {
        infowindow.close();
    };
  }




function createCircleChart() {
	
	Highcharts.chart('container', {
	  chart: {
	    plotBackgroundColor: null,
	    plotBorderWidth: 0,
	    plotShadow: false
	  },
	  credits: {
	    enabled: false
	  },
	  title: {
	    text: '가동',
	    align: 'center',
	    verticalAlign: 'middle',
	    y: 60
	  },
	  tooltip: {
	    pointFormat: '{series.name}: <b>71.9%</b>'
	  },
	  accessibility: {
	    point: {
	      valueSuffix: '%'
	    }
	  },
	  plotOptions: {
	    pie: {
	      allowPointSelect: true,
	      cursor: 'pointer',
	      showInLegend: true,
	      dataLabels: {
	        distance: -50,
	        style: {
	          fontWeight: 'bold',
	          color: 'white'
	        }
	      },
	      startAngle: -90,
	      endAngle: 90,
	      center: ['50%', '75%'],
	      size: '140%'
	    }
	  },
	  series: [{
	    type: 'pie',
	    name: '가동',
	    innerSize: '50%',
	    data: [
	    	 {name: '71.9%', y:71.9, color: '#E1594B'},
	    	 {name: '28.1%', y:28.1, color: '#EDE9EB'}
	    ]
	  }]
	});
	
}
