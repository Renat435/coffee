$(document).ready(function () {
    $('.choose-slider').slick({
        slidesToShow: 2,
        nextArrow: '<button type="button" class="slick-next"><img src="images/next.png" alt=""></button>',
        responsive: [
            {
                breakpoint: 1080,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.giftset__slider').slick({
        arrows: false,
        dots: true,
        fade: true,
    });
    $('.combo__slider').slick({
        slidesToShow: 3,
        nextArrow: '<button type="button" class="slick-next"><img src="images/next.png" alt=""></button>',
        responsive: [
            {
                breakpoint: 1130,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 780,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});