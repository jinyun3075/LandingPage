const btnScrollTop = $('.btn-scroll-top');
function scrollUpEvent() {
    window.onmousewheel = function (e) {
        // 마우스 휠 페이지 상단 방향으로 이동할 때
        if (e.wheelDelta === 120) {
        // btnScrollTop 아래에서 위로 나타남
        $('.btn-scroll-top').addClass("scroll-up");
            btnScrollTop.addClass("scroll-up");
            if (window.scrollY < 120) {
                $('.btn-scroll-top').removeClass("scroll-up");
            }
        } else {
            $('.btn-scroll-top').removeClass("scroll-up");
        }
    }
}
scrollUpEvent();