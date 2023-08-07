var validUserData = () => {
    var uData = {};
    uData.accoutId = $("#uid").val();
    uData.passward = $("#upass").val();
    console.log(uData)

    $.ajax({
        url : '/validate/userCredentials',
        method : 'POST',
        data : uData,
        dataType : 'JSON',
        success: (response) => {
            console.log(response)
            if(response.msg == 'valid'){
                loadSelectedPage('homePage')
                $("#header_1").hide()
            }else{ 
                // document.querySelector(".invalidCredentials").style.display = 'block'
                $(".invalidCredentials").show()
            }
        },
        error: (error) => {
            console.log(error)
        }
    })
}