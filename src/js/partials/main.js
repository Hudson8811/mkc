

$(document).ready(function () {
    $('.first-screen__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
    });

    $('.shilds__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        centerMode: true,
        variableWidth: true
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > $('.header').height()){
            $('.header').addClass('header--active')
        } else{
            $('.header').removeClass('header--active')
        }
    });

    $('.investor__catalog-item').hover(function(){
        const leftPosition = $(this).data('id')
        $('.investor__catalog-item').removeClass('investor__catalog-item-active')
        $(this).addClass('investor__catalog-item-active')
        $('.investor__catalog-bar_slide').css({
            left: leftPosition
        })
    })

    $('.header__burger').click(function(){
        $(this).toggleClass('header__burger--active')
        $('.header .header__menu').toggleClass('header__menu--active')
    })
});



ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.74086206899801,37.61425749999998],
            zoom: 16,
            controls: []
        }, {
            searchControlProvider: 'yandex#search'
        }),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        }, {
            iconLayout: 'default#image',
            iconImageHref: '../img/map-icon.png',
            iconImageSize: [255, 153],
            iconImageOffset: [-46, -153]
        })

    myMap.geoObjects
        .add(myPlacemark)
});