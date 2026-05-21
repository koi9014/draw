function loadTodps() {
    $.ajax({
        url: "http://localhost:50/profile",
        method: "GET",
        dataType: "json",
        success: function (res) {
            res.forEach(item => {
                console.log(item.id);
                console.log(item.intro);
            });

        }
    });
}

loadTodps();