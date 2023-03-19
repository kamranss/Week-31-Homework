$(document).ready(function(){



    // $(document).on("keyup", "input", function(){
    //     console.log($(this).val());
    // })
    
    // let arr  = $("input").val().split("-");
    // console.log(arr);

    $.ajax({
        url: "https://jsonplaceholder.typicode.com/users",
        method: "get",
        success: function(data){
            console.log(data);
        },
        error: function(data) {
            console.log(data);
        }
    })



})