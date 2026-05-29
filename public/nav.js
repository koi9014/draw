$.get("nav.html", function (data) {

    $(".nav").html(data)

    const isLogin = localStorage.getItem("isLogin")

    if (isLogin === "true") {
        $(".login1").hide()
        $(".personal").show()
        $(".logout1").show()
    } else {
        $(".login1").show()
        $(".logout1").hide()
        $(".personal").hide()

    }

})