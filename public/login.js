$(function () {
    $(".btn").click(function () {
        const newEmail = $(".email").val();
        const newPassword = $(".password").val();

        $.ajax({
            url: "http://localhost:5000/profile",
            method: "Post",
            contentType: "application/json",
            data: JSON.stringify({
                email: newEmail,
                password: newPassword
            }),

            success: function (res) {
                swal("已成功登入", "歡迎回來", "success");


            },
            error: function (err) {

                swal("帳號秘密錯誤", "請重新輸入", "error");

            }
        })


    })
})

