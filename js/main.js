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

        if(e.originalEvent.deltaY > 0){
            if(page === lastPage) return;

            page++;
        }else if(e.originalEvent.deltaY < 0){
            if(page === 1) return;

            page--;
        }
        let posTop = (page-1) * $(window).height();

        $html.animate({scrollTop : posTop});
    })

    const burger = $('.menu-trigger');

    burger.each(function(index){
        let $this = $(this);

        $this.on('click', function(e){
            e.preventDefault();
            $(this).toggleClass('active-' + (index+1));
        })
    });
})