$(function () {
    $(".btn").click(function () {
        swal("已成功寄信", "等待繪師收到回覆", "success");
    })
})

$(function () {
    $(".btnNO").click(function () {
        swal("未開放委託", "等待繪師重新開啟", "error");
    })
})

$(function () {
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        speed:700,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
})

$(function () {
    $(".click").click(function () {
        $(".show")[0].showModal()
    })
})