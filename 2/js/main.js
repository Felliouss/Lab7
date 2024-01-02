let mobileMenuActive = false;
let mobileMenuAnim = false;
let $mobileMenu = $('.mobile-menu');

function toggleMobileMenu(bool){
    $('.mobile-menu .fade').stop(true);
    $('.mobile-menu .window').stop(true,true);

    if (bool == true){
        $mobileMenu.show();

        $('.mobile-menu .fade').animate({opacity: 0.5},300);
        $('.mobile-menu .window').animate({right: '0'},300);
        $('.extra__content>*').css('zIndex',-1);

        mobileMenuActive = true;
    }
    else {
        $('.mobile-menu .fade').animate({opacity: 0},400);
        $('.mobile-menu .window').animate({right: '-100%'},400); 
        $('.extra__content>*').css('zIndex',0);

        mobileMenuActive = false;
    }
}

$(document).ready(function(){
    $('.burger').click(function(){
        if (mobileMenuAnim == true) return;
        mobileMenuAnim = true;
        
        if (mobileMenuActive) {
            toggleMobileMenu(false);
            setTimeout(function(){
                mobileMenuAnim = false;
                $mobileMenu.hide();
            },400)
        }
        else {
            toggleMobileMenu(true);
            setTimeout(function(){
                mobileMenuAnim = false;
            },400)
        }
    })
})

$(window).on('resize',function(){
    if ($(window).width() > 540) {
        toggleMobileMenu(false);
        mobileMenuAnim = false;
    }
})