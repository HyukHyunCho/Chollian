$(document).ready(function() {

    //aaa();

    $("#detailPageBtn").click(function() {
		location.href = "machineManagementDetail.html";
	}); 

    $("#detailPageBtn2").click(function() {
		location.href = "machineManagementDetail.html";
	});

    $("#detailPageBtn3").click(function() {
		location.href = "machineManagementDetail.html";
	});

    $("#detailPageBtn4").click(function() {
		location.href = "machineManagementDetail.html";
	});

    $("#detailPageBtn5").click(function() {
		location.href = "machineManagementDetail.html";
	});

    $("#addModalBtn").click(function() {
        $("#modal").css("display","block");
    });

    $("#cancelModalBtn").click(function() {
        $("#modal").css("display","none");
    });

    $("#releaseBtn").click(function() {
        if (confirm("외부 출고 하시겠습니까?") == true){    //확인
            document.form.submit();
        } else{ 
            return;
        }
    });

    
});


function aaa() {

	var url = "http://192.168.0.8:7579/VITCON-Dev";
	
	$.ajax({
        headers: {
            'Accept': 'application/json',
            'X-M2M-RI': 1,
            'X-M2M-Origin': 'Cmyself',
            'X-M2M-RVI': '2a',
            'X-M2M-TY': 4
        },
		url : url,
		type : 'get',
		//data : parameter,
		success : function(response) {
			
            
			console.log(response["m2m:cb"]);

            

		},
		error : function () {
			alert("error");
		}  
	});
	
}