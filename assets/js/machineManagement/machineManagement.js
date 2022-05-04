$(document).ready(function() {

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

