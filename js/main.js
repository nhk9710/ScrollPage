$(document).ready(() => {
    const $html = $("html");

    let page = 1;

    const lastPage = $(".content").length;

    $html.animate({scrollTop:0},10);

    window.addEventListener("wheel", function (e){

        e.preventDefault();
    }, {passive: false});

    $(window).on("wheel",function (e){
        if ($html.is(":animated")) return;

        if(e.originalEvent.deltaY > 0){ //아래쪽으로 굴린거
            if(page === lastPage) return;
            page++;

            if( $('.content-wise').hasClass('content-ani')){

                $('.content-wise').removeClass('content-ani')
            }else{
                $('.content-wise').addClass('content-ani')
            }
        }else if(e.originalEvent.deltaY < 0){ //위쪽으로 굴린거
            if(page === 1) return;
            page--;

            if( $('.content-wise').hasClass('content-ani')){
                console.log(1)
                $('.content-wise').removeClass('content-ani')
            }else{
                console.log(2)
                $('.content-wise').addClass('content-ani')
            }
        }
        let posTop = (page-1) * $(window).height();

        $html.animate({scrollTop : posTop});
    })
    /* trigger */
    const content = $('.content-trigger');
    content.each(function(index){
        let $this = $(this);

        $this.on('click', function(e){
            e.preventDefault();
            $(this).toggleClass('active');
        })
    });
    $('.content-trigger').click(function(){
        if( $('.content-hidden').hasClass('content-text')){
            $('.content-hidden').removeClass('content-text')
        }else{
            $('.content-hidden').addClass('content-text')
        }
    });


})


