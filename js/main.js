$(function () {
    //jQery준비
    $('#menu_bg_wrap .menu_bg, #header_wrap #header_left > ul > li > ul').hide();

    $('#header_left > ul > li, #menu_bg_wrap .menu_bg').mouseenter(function () {
        $('#menu_bg_wrap .menu_bg, #header_wrap #header_left > ul > li > ul').stop().slideDown(300);
    }).mouseleave(function () {
        $('#menu_bg_wrap .menu_bg, #header_wrap #header_left > ul > li > ul').stop().slideUp(300);
    });



    //모바일 네비게이션 바 복제
    var naviClon = $('#header_left').contents().clone();
    var navi_list = $('<div id="sm_menu"></div>');
    var search = $('#header_right').contents().clone();
    navi_list.append(search);
    navi_list.append(naviClon);
    navi_list.appendTo('#mb_navi');



    $('#m_menu').click(function () {
        $('#mb_navi').toggleClass('open');
        if ($('#mb_navi').hasClass('open')) { //열린상
            $('#mb_navi').stop(true).animate({
                right: 0
            }, 500);
            $('#m_menu > a').find('img').attr('src', 'img/main/btn_close.png');
            $('body').css('overflow', 'hidden');

        } else { //닫힌상태
            $('#mb_navi').stop(true).animate({
                right: '-100%'
            }, 500);
            $('#sm_menu > ul > li > .menu_sec').hide();
            $('#sm_menu > ul > li > a').removeClass('selected');
            $(this).find('img').attr('src', 'img/main/btn_menu.png');
            $('body').css('overflow', 'scroll');
        };
    });



    /*모바일 각 메뉴 클릭시 서브메뉴 펼침*/
    $('#sm_menu > ul > li > a').click(function () {
        $(this).toggleClass('selected');
        $('#sm_menu > ul > li > a ').not(this).removeClass('selected');
        $(this).find('+ul').slideToggle('fast');
        $('#sm_menu > ul > li > a').not(this).find('+ul').slideUp('fast');

    });

    /*pc화면 사이즈에서 모바일 메뉴 사라지고 초기화기*/
    $(window).resize(function () {
        if ($(this).width() > 748) {
            $('#mb_navi').css('right', '-100%');
            $('#sm_menu > ul > li > .menu_sec').hide();
            $('#sm_menu > ul > li > a').removeClass('selected');
            $('#mb_navi').removeClass('open');
            $('#m_menu > a').find('img').attr('src', 'img/main/btn_menu.png');
            $('body').css('overflow', 'scroll');
        };
        if ($(this).width() < 748) {
            $('#popup').hide();
        };
    });

    /*레이어 팝업*/
    $('#popup').animate({
        top: '200px',
        opacity: 1
    }, 1000, 'easeOutBounce')

    $('.close').click(function () {
        $('#popup').hide();
    });

    /*퀵메뉴*/
    var $quick = $('#quick_right_menu');
            var offset = $quick.offset();
            $(window).scroll(function() {
                if ($(this).scrollTop() > offset.top) {
                    $quick.stop().animate({
                        marginTop: $(this).scrollTop() - 500
                    }, 500);
                } else {
                    $quick.stop().animate({
                        marginTop: 20
                    }, 200);
                }
            });
    

    /*slide1*/
    var swiper = new Swiper('.swiper-container1', {
        slidesPerView: 1, //보여지는 슬라이드 개수
        spaceBetween: 0, //슬라이드 사이 공간
        loop: true, // 반복 슬라이드
        keyboard: {
            enabled: true, //키보드 제어
        },
        autoplay: {
            delay: 8000, // 8초마다 슬라이드
            disableOnInteraction: true, //버튼 제어시 멈춤
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true, //블릿버튼 제어
        },
        navigation: { //이전다음버튼 제어
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    /*slide2*/
    var swiper = new Swiper('.swiper-container2', {
        slidesPerView: 4,
        spaceBetween: 20,
        slidesPerGroup: 1,
        loop: true, //반복하지 않으려면 false로 변경
        loopFillGroupWithBlank: true, //마지막페이지 빈공백 안생기려면 false로 변경
        autoplay: {
            delay: 8000,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        //화면 사이즈에 따른 슬라이드 갯수 조절
        breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            },

        }
    });

    /*slide3*/
    var swiper = new Swiper('.swiper-container3', {
        slidesPerView: 4,
        spaceBetween: 20,
        slidesPerGroup: 1,
        loop: true, //반복하지 않으려면 false로 변경
        loopFillGroupWithBlank: true, //마지막페이지 빈공백 안생기려면 false로 변경
        autoplay: {
            delay: 8000,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        //화면 사이즈에 따른 슬라이드 갯수 조절
        breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            },

        }
    });
    
    /*popup*/
    cookiedata = document.cookie;

        if (cookiedata.indexOf("ncookie=done") < 0) {

            document.getElementById('popup').style.display = "block";

        } else {

            document.getElementById('popup').style.display = "none";

        }


}); //jQery 종료