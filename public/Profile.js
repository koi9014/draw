function loadTodps() {
    $.ajax({
        url: "http://localhost:5000/profile",
        method: "GET",
        dataType: "json",


        success: function (res) {
            console.log(res);
            let html = "";

            res.forEach(item => {
                html += `
                <div data-id="${item.id}">

                    <p class="text">繪師名稱:${item.intro}</p>
                    <p class="text">擅長風格:${item.style}</p>
                    <p class="text">委託價格:${item.money}</p>
                    <button class="revise">修改</button>
                </div>
                `;
            });

            $(".profile").append(html);
        },
        error: function (err) {
            console.error("載入失敗", err);
        }
    });
}

loadTodps();