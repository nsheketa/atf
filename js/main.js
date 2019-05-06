$(document).ready(function () {
    new WOW().init();

    $('.alert__close').click(function (e) {
        e.preventDefault();

        btnPosition();
        $('.alert').fadeOut().removeClass('active');
    });

    //nav position regarding Alert
    function btnPosition() {
        var alert = $('.alert'),
            menu = $('.menu__btn'),
            telegram = $('.telegram__mob'),
            lang = $('.header-lang');

        menu.removeClass('.isAlert').addClass('noAlert');

        if ($(window).width() < 992) {
            telegram.removeClass('isAlert').addClass('noAlert');
            lang.removeClass('isAlert').addClass('noAlert');
        }
    }

    //nav position regarding Alert
    function checkAlert() {
        if ($('.alert').hasClass('active')) {
            $('.menu__btn').removeClass('noAlert').addClass('isAlert');
            if ($(window).width()  < 992) {
                $('.telegram__mob').removeClass('noAlert').addClass('isAlert');
                $('.header-lang').removeClass('noAlert').addClass('isAlert');
            }
        } else {
            $('.menu__btn').removeClass('isAlert').addClass('noAlert');
            if ($(window).width()  < 992) {
                $('.telegram__mob').removeClass('isAlert').addClass('noAlert');
                $('.header-lang').removeClass('isAlert').addClass('noAlert');
            }
        }
    }

    //header-menu

    $('.menu__btn').click(function (e) {
        e.preventDefault();

        $(this).toggleClass('active');
        $('.header__menu').toggleClass('active');
        $('#menu-overlay').fadeToggle();
    });
    $('.header__menu-link').click(function (e) {
        e.preventDefault();

        $('#menu-overlay').fadeOut();
        $('.menu__btn').removeClass('active');
        $('.header__menu').removeClass('active');
    });


    $('#menu-overlay').click(function () {
        $('#menu-overlay').fadeOut();
        $('.menu__btn').removeClass('active');
        $('.header__menu').removeClass('active');
    });
    $('#modal-overlay').click(function () {
        $('#modal-overlay').fadeOut();
        $('.modal').removeClass('active');
    });

    //Custom Select

    $('#header-info__form-select').customSelect({
        // placeholder: 'ВЫБЕРИТЕ СРОК ДЕЙСТВИЯ',
        search: false,
        transition: 300,
        includeValue: true
    });
    $('.wi__slider-point').click(function () {
        var $this = $(this);
        var circle = $('.wi__slider-circle');
        if ($this.is('.wi__slider-point:nth-of-type(1)')) {
            circle.css('left', '-12px');
            $('.welcome-info__slider-desc').text('консервативный');
        }
        else if ($this.is('.wi__slider-point:nth-of-type(2)')) {
            circle.css('left', '29.33%');
            $('.welcome-info__slider-desc').text('умеренный');
        }
        else if ($this.is('.wi__slider-point:nth-of-type(3)')) {
            circle.css('left', '63.66%');
            $('.welcome-info__slider-desc').text('агрессивный');
        }
        else if ($this.is('.wi__slider-point:nth-of-type(4)')) {
            circle.css('left', '95%');
            $('.welcome-info__slider-desc').text('экстремальный');
        }
    });

    //Experience section

    $('.ec__center').click(function (e) {
        e.preventDefault();
        $('.ec__content').toggleClass('active');
    });

    //slider

    $('.slick__slider').slick({
        arrows: true,
        infinite: false,
        speed: 300,
        prevArrow: '<div class="slick-prev slick-arrow"></div>',
        nextArrow: '<div class="slick-next slick-arrow"></div>',
        dots: true,
        dotsClass: 'slick__slider-dots',
        customPaging: function (slider, i) {
            return (i + 1);
        }
    });

    $('.slick-active').next().addClass('next');
    $('.slick__slider-dots li').click(function () {
        var $this = $(this),
            slides = $('.slick__slider-dots li');
        slides.removeClass('next');
        $this.next().addClass('next');
    });
    $('.slick-prev').click(function () {
        var slides = $('.slick__slider-dots li');
        slides.removeClass('active');
        slides.removeClass('next');
        $(this).parents('.slick__slider').find('.slick-active').next().addClass('next');
    });
    $('.slick-next').click(function () {
        var slides = $('.slick__slider-dots li');
        slides.removeClass('active');
        slides.removeClass('next');
        $(this).parents('.slick__slider').find('.slick-active').next().addClass('next');
    });

    //questions accordion

    $('.question__accordion-title').click(function () {
        $('.question__accordion-title').not(this).removeClass('active').next().slideUp(400);
        $(this).addClass('active').next().slideDown(400);
    });

    //modal-question

    $('.modal__link, .modal__result-link').click(function (e) {
        e.preventDefault();

        var $this = $(this);

        //reset old modal
        $('.modal').removeClass('active');
        $('.modal').css('top', '50%');

        setTimeout(function () {
            // open new
            var scrollTop = $(window).scrollTop(),
                modal = $this.attr('href');

            $(modal).css('top', scrollTop + 50);

            $(modal).addClass('active');
            $("#modal-overlay").fadeIn();
        }, 300);
    });

    $('.modal__close,#modal-overlay').click(function (e) {
        e.preventDefault();

        $("#modal-overlay").fadeOut();
        $('.modal').removeClass('active');

        $('.modal').css('top', '50%');
        $(".modal").removeClass('active');
    });

    //Scroll nav

    $('.header__menu-link, .footer-scroll__link').click(function () {

        var the_id = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(the_id).offset().top
        }, 'slow');

        return false;
    });

    //Scroll menu btn position

    function menuState() {
        if ($(window).width()  < 992) {

            if ($(window).scrollTop() >= 250) {
                $('.menu__btn').css({
                    position: "fixed"
                });
            } else {
                $('.menu__btn').css({
                    position: "absolute"
                })
            }
        } else {
            $('.menu__btn').css({
                position: "fixed"
            });
        }
    }

    function menuPosition() {
        var menu = $('.menu__btn'),
            menuPosition = menu.offset().top,
            menuLine = $('.menu__btn-line'),
            section1 = $('.finmarket'),
            section1Start = section1.offset().top,
            section1End = Math.max(section1Start + section1.outerHeight()),
            section3 = $('.change'),
            section3Start = section3.offset().top,
            section3End = Math.max(section3Start + section3.outerHeight()),
            section4 = $('.connect'),
            section4Start = section4.offset().top,
            section4End = Math.max(section4Start + section4.outerHeight()),
            subSection4 = $('.about-robots__link-wrap'),
            subSection4Start = subSection4.offset().top,
            subSection4End = Math.max(subSection4Start + subSection4.outerHeight()),
            section6 = $('.guarantees'),
            section6Start = section6.offset().top,
            section6End = Math.max(section6Start + section6.outerHeight());

        if (menuPosition >= section1Start && menuPosition <= section1End
            || menuPosition >= section3Start && menuPosition <= section3End
            || menuPosition >= section4Start && menuPosition <= section4End
            || menuPosition >= subSection4Start && menuPosition <= subSection4End
            || menuPosition >= section6Start && menuPosition <= section6End) {
            menuLine.css('background-color', '#fff');
        }
        else {
            menuLine.css('background-color', '#333');
        }
    }

    menuPosition();
    menuState();
    checkAlert();

    $(window).scroll(function () {
        menuPosition();
        menuState();
    });
    $(window).resize(function () {
        menuPosition();
        menuState();
        checkAlert();
    });

});

