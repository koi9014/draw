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
            <div class="card" data-id="${item.id}">
            <p>
            繪師名稱:
            <span class="intro">${item.intro}</span>
            </p>

            <p>
            擅長風格:
            <span class="style">${item.style}</span>
            </p>

            <p>
            委託價格:
            <span class="money">${item.money}</span>
            </p>

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
//先載入
loadTodps();

$(function () {
    $(document).on("click", ".revise", function () {
       
        const card = $(this).closest(".card");
        const id = card.data("id");
        const btn = $(this);

        const styleEl = card.find(".style");
        const moneyEl = card.find(".money");

        const style = styleEl.text();
        const money = moneyEl.text();

        if (btn.hasClass("editing")) {

            const newStyle = card.find(".editStyle").val();
            const newMoney = card.find(".editMoney").val();

            $.ajax({
                url: `http://localhost:5000/profile/${id}`,
                method: "PUT",
                contentType: "application/json",
                data: JSON.stringify({
                    style: newStyle,
                    money: newMoney
                }),
                dataType: "json",

                success: function () {

                    card.find(".editStyle").replaceWith(
                        `<span class="style">${newStyle}</span>`
                    );

                    card.find(".editMoney").replaceWith(
                        `<span class="money">${newMoney}</span>`
                    );

                    btn.removeClass("editing").text("修改");
                },

                error: function (err) {
                    console.log(err);
                }
            });

        } else {

            styleEl.replaceWith(
                `<input class="editStyle" value="${style}">`
            );

            moneyEl.replaceWith(
                `<input class="editMoney" value="${money}">`
            );

            btn.addClass("editing").text("儲存");
        }

    })





})
