 $( document ).ready(function() {
    var scrollCSS= function(){
        $('.ss-scroll-trigger').not('.ss-activated').each(function(index){
            var el=$(this);
            var offset=el.offset().top- $(window).scrollTop();
            if(offset<$(window).height()*.9){
                el.removeClass('.ss-scroll-trigger').addClass('ss-activated');
            }            
        });
    };
    scrollCSS();
    $(window).scroll(scrollCSS);
});